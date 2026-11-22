import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * 3D structure for the hero: a wireframe icosahedron whose vertices are small
 * "test nodes" that flip from pending (grey) to passed (green) in a loop,
 * with a spinning core and an orbit ring. Reacts to mouse and scroll.
 * Colors match the site theme (primary #2563eb, secondary #f97316).
 */
export default function Hero3D({ className = '' }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ── Renderer / scene / camera ───────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const root = new THREE.Group();
    scene.add(root);

    // ── Colors (light theme) ────────────────────────────────
    const PRIMARY = 0x2563eb;
    const SECONDARY = 0xf97316;
    const PENDING = new THREE.Color(0x94a3b8);
    const PASS = new THREE.Color(0x10b981);

    // ── Outer wireframe shell ───────────────────────────────
    const shellGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const shellMat = new THREE.MeshBasicMaterial({
      color: PRIMARY, wireframe: true, transparent: true, opacity: 0.35,
    });
    root.add(new THREE.Mesh(shellGeo, shellMat));

    // ── Inner core ──────────────────────────────────────────
    const coreGeo = new THREE.IcosahedronGeometry(1.25, 0);
    const coreMat = new THREE.MeshBasicMaterial({
      color: SECONDARY, wireframe: true, transparent: true, opacity: 0.75,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    root.add(core);

    // ── Test nodes on every unique vertex of the shell ──────
    const nodeGeo = new THREE.BoxGeometry(0.22, 0.22, 0.22);
    const nodes = [];
    const pos = shellGeo.attributes.position;
    const seen = new Set();
    for (let i = 0; i < pos.count; i++) {
      const key = `${pos.getX(i).toFixed(2)},${pos.getY(i).toFixed(2)},${pos.getZ(i).toFixed(2)}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const mesh = new THREE.Mesh(nodeGeo, new THREE.MeshBasicMaterial({ color: PENDING.clone() }));
      mesh.position.set(pos.getX(i), pos.getY(i), pos.getZ(i));
      mesh.userData = { progress: 0, delay: Math.random() * 6 };
      root.add(mesh);
      nodes.push(mesh);
    }

    // ── Orbit ring ──────────────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(3.6, 0.012, 8, 160);
    const ringMat = new THREE.MeshBasicMaterial({ color: SECONDARY, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = 1.2;
    root.add(ring);

    // ── Interaction ─────────────────────────────────────────
    let mx = 0, my = 0, scroll = 0;
    const onPointer = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => { scroll = Math.min(window.scrollY / window.innerHeight, 1); };
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // ── Resize + visibility ─────────────────────────────────
    const resizeObserver = new ResizeObserver(() => {
      const w = mount.clientWidth, h = mount.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    });
    resizeObserver.observe(mount);

    let visible = true;
    const visibilityObserver = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
    visibilityObserver.observe(mount);

    // ── Animation loop ──────────────────────────────────────
    const clock = new THREE.Clock();
    let rafId = 0;

    const renderFrame = () => {
      const t = clock.getElapsedTime();
      if (!reduceMotion) {
        root.rotation.y = t * 0.18 + mx * 1.1 + scroll * 1.5;
        root.rotation.x = my * 0.7 + Math.sin(t * 0.3) * 0.12;
        core.rotation.y = -t * 0.5;
        core.rotation.x = t * 0.3;
        ring.rotation.z = t * 0.25;
      }
      // 12s loop: nodes switch to "passed" one by one, then reset
      const cycle = t % 12;
      nodes.forEach((n) => {
        const d = n.userData;
        const target = cycle > 1 && cycle > d.delay ? 1 : 0;
        d.progress += (target - d.progress) * 0.06;
        n.material.color.copy(PENDING).lerp(PASS, d.progress);
        n.scale.setScalar(1 + d.progress * 0.35);
      });
      renderer.render(scene, camera);
    };

    const loop = () => {
      rafId = requestAnimationFrame(loop);
      if (visible) renderFrame();
    };

    if (reduceMotion) {
      nodes.forEach((n) => n.material.color.copy(PASS));
      renderer.render(scene, camera);
    } else {
      loop();
    }

    // ── Cleanup ─────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
      resizeObserver.disconnect();
      visibilityObserver.disconnect();
      [shellGeo, coreGeo, nodeGeo, ringGeo].forEach((g) => g.dispose());
      [shellMat, coreMat, ringMat].forEach((m) => m.dispose());
      nodes.forEach((n) => n.material.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode === mount) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className={`relative w-full h-[320px] md:h-[520px] ${className}`}
      role="img"
      aria-label="Interactive 3D model of test nodes turning from pending to passed"
    />
  );
}
