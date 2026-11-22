
// export default function Footer() {
//   const currentYear = new Date().getFullYear();

//   const quickLinks = [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Projects", href: "#projects" },
//     { label: "Experience", href: "#experience" },
//     { label: "Contact", href: "#contact" },
//   ];

//   const socialLinks = [
//     {
//       label: "LinkedIn",
//       href: "https://linkedin.com/in/ashishkumar-g/",
//       icon: "linkedin",
//     },
//     {
//       label: "GitHub",
//       href: "https://github.com/Ashishsantoshkumar",
//       icon: "github",
//     },
//     {
//       label: "Email",
//       href: "mailto:ashishsanotosh523@gmail.com",
//       icon: "mail",
//     },
//   ];

//   return (
//     <footer className="bg-foreground text-white py-10">
//       <div className="container mx-auto px-8 ">
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start pb-6">
//           {/* Brand */}
//           <div className="space-y-2">
//             <div className="flex items-center gap-2">
//               <div className="w-7 h-7 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center font-bold text-sm">
//                 ✓
//               </div>
//               <span className="text-base font-bold">Ashish</span>
//             </div>
//             <p className="text-sm text-white/70 leading-snug">
//               SDET & Test Automation Engineer building robust, scalable
//               automation solutions.
//             </p>
//           </div>

//           {/* Quick Links */}
       
//    <div className="flex flex-col items-center ">
//   <h3 className="text-base font-semibold mb-4 tracking-wide">
//     Quick Links
//   </h3>

//  <ul className="flex items-center  justify-center gap-5 whitespace-nowrap">
//   {quickLinks.map((link) => (
//     <li key={link.label}>
//       <a
//         href={link.href}
//         className="text-sm text-white/70 hover:text-primary transition-colors duration-300"
//       >
//         {link.label}
//       </a>
//     </li>
//   ))}
// </ul>
// </div>

//           {/* Social Links */}
//           <div className="md:justify-self-end">
//             <h3 className="text-sm font-semibold mb-4">Connect</h3>
//             <div className="flex gap-2">
//               {socialLinks.map((link) => (
//                 <a
//                   key={link.label}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="p-2 rounded-lg bg-white/10 hover:bg-primary transition-all duration-300 hover-lift"
//                   aria-label={link.label}
//                   title={link.label}
//                 >
//                   {link.icon === "linkedin" && (
//                     <svg
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//                     </svg>
//                   )}
//                   {link.icon === "github" && (
//                     <svg
//                       className="w-4 h-4"
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
//                     </svg>
//                   )}
//                   {link.icon === "mail" && (
//                     <svg
//                       className="w-4 h-4"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                       />
//                     </svg>
//                   )}
//                 </a>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-white/10 pt-4" />

//         {/* Copyright */}
//         <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-white/60">
//           <p>© {currentYear} Ashish Kumar Gupta. All rights reserved.</p>
//           <p className="flex items-center gap-1">
//             Designed
//             by Ashish Kumar Gupta
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }// this is my codee donot delte that









// claude code


import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';

const roles = ['SDET', 'Test Automation Engineer', 'QA Engineer', 'Problem Solver'];

/* ─────────────────────────────────────────────────────────────
   3D STRUCTURE
   Wireframe icosahedron whose vertices are small "test nodes" that
   flip from pending (grey) to passed (green) on a 12s loop, with a
   spinning core and an orbit ring. Reacts to mouse and scroll.
   ───────────────────────────────────────────────────────────── */
function Hero3D() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Renderer / scene / camera
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 100);
    camera.position.z = 9;

    const root = new THREE.Group();
    scene.add(root);

    // Colors (match site theme: primary #2563eb, secondary #f97316)
    const PRIMARY = 0x2563eb;
    const SECONDARY = 0xf97316;
    const PENDING = new THREE.Color(0x94a3b8);
    const PASS = new THREE.Color(0x10b981);

    // Outer wireframe shell
    const shellGeo = new THREE.IcosahedronGeometry(2.6, 1);
    const shellMat = new THREE.MeshBasicMaterial({ color: PRIMARY, wireframe: true, transparent: true, opacity: 0.35 });
    root.add(new THREE.Mesh(shellGeo, shellMat));

    // Inner core
    const coreGeo = new THREE.IcosahedronGeometry(1.25, 0);
    const coreMat = new THREE.MeshBasicMaterial({ color: SECONDARY, wireframe: true, transparent: true, opacity: 0.75 });
    const core = new THREE.Mesh(coreGeo, coreMat);
    root.add(core);

    // Test nodes on every unique vertex of the shell
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

    // Orbit ring
    const ringGeo = new THREE.TorusGeometry(3.6, 0.012, 8, 160);
    const ringMat = new THREE.MeshBasicMaterial({ color: SECONDARY, transparent: true, opacity: 0.6 });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = 1.2;
    root.add(ring);

    // Mouse + scroll interaction
    let mx = 0, my = 0, scroll = 0;
    const onPointer = (e) => {
      mx = e.clientX / window.innerWidth - 0.5;
      my = e.clientY / window.innerHeight - 0.5;
    };
    const onScroll = () => { scroll = Math.min(window.scrollY / window.innerHeight, 1); };
    window.addEventListener('pointermove', onPointer, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // Resize + pause when off screen
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

    // Animation loop
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
      const cycle = t % 12; // nodes turn "passed" one by one, then reset
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

    // Cleanup
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
      className="relative w-full h-[320px] md:h-[520px]"
      role="img"
      aria-label="Interactive 3D model of test nodes turning from pending to passed"
    />
  );
}

export default function Hero() {
  const typingRef = useRef(null);
  const roleIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const type = () => {
      const currentRole = roles[roleIndex.current];
      const element = typingRef.current;

      if (!element) return;

      if (!isDeleting.current) {
        if (charIndex.current < currentRole.length) {
          element.textContent += currentRole[charIndex.current];
          charIndex.current++;
          setTimeout(type, 80);
        } else {
          isDeleting.current = true;
          setTimeout(type, 2000);
        }
      } else {
        if (charIndex.current > 0) {
          element.textContent = currentRole.substring(0, charIndex.current - 1);
          charIndex.current--;
          setTimeout(type, 50);
        } else {
          isDeleting.current = false;
          roleIndex.current = (roleIndex.current + 1) % roles.length;
          setTimeout(type, 500);
        }
      }
    };

    type();
  }, []);

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-2">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Ashish</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                <span ref={typingRef} className="text-primary font-semibold" />
                <span className="animate-pulse">|</span>
              </p>
            </div>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg">
              I'm an SDET with a passion for building robust, scalable automation frameworks. Specialized in Java, Selenium WebDriver, TestNG, and modern QA practices. Let's create reliable software together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#projects">
                <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white group">
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <a href="#contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/5">
                  Get In Touch
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-6 border-t border-border">
              <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/ashishkumar-g/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 hover-lift"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://github.com/Ashishsantoshkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-muted hover:bg-foreground hover:text-white transition-all duration-300 hover-lift"
                  aria-label="GitHub"
                >
                  <Github size={20} />
                </a>
                <a
                  href="mailto:ashishsanotosh523@gmail.com"
                  className="p-2 rounded-lg bg-muted hover:bg-secondary hover:text-white transition-all duration-300 hover-lift"
                  aria-label="Email"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Content - 3D test-node structure */}
          <div className="relative flex items-center justify-center">
            <Hero3D />
            <div className="absolute left-0 top-[14%] rounded-lg border border-border bg-white/90 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur pointer-events-none">
              <span className="text-emerald-600 font-semibold">✓</span> 400+ problems solved
            </div>
            <div className="absolute right-0 bottom-[16%] rounded-lg border border-border bg-white/90 px-3 py-2 text-sm font-medium shadow-sm backdrop-blur pointer-events-none">
              <span className="text-emerald-600 font-semibold">✓</span> Page Object Model
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
