import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from 'framer-motion';
import { Camera, Layers, Atom, GitBranch, Box } from 'lucide-react';
import image from "./image/profile.jpg";


// ---------------------------------------------------------------------------
// Drop your real photo in `client/public` and point this at it, e.g.
//   const PROFILE_IMAGE_SRC = '/profile.jpg';
// Leave it empty to keep the placeholder — no other change is required,
// every animation below targets this same container.
// ---------------------------------------------------------------------------
const PROFILE_IMAGE_SRC = '/assets/profile.jpg';


const PARTICLES_DATA = [
  { id: 0, left: 12, size: 4, delay: 0.5, duration: 6, tone: 'bg-primary/50' },
  { id: 1, left: 35, size: 6, delay: 1.2, duration: 8, tone: 'bg-secondary/50' },
  { id: 2, left: 78, size: 3, delay: 2.8, duration: 5, tone: 'bg-primary/50' },
  { id: 3, left: 45, size: 7, delay: 0.1, duration: 8, tone: 'bg-secondary/50' },
  { id: 4, left: 92, size: 5, delay: 3.4, duration: 7, tone: 'bg-primary/50' },
  { id: 5, left: 22, size: 5, delay: 2.1, duration: 7, tone: 'bg-secondary/50' },
  { id: 6, left: 56, size: 4, delay: 4.0, duration: 6, tone: 'bg-primary/50' },
  { id: 7, left: 81, size: 6, delay: 1.9, duration: 9, tone: 'bg-secondary/50' },
  { id: 8, left: 3, size: 4, delay: 0.8, duration: 6, tone: 'bg-primary/50' },
  { id: 9, left: 67, size: 5, delay: 3.1, duration: 7, tone: 'bg-secondary/50' },
];

const sizeConfig = {
  hero: {
  
  wrapper: 'w-70 h-70 sm:w-[24rem] sm:h-[26rem] md:w-[26rem] md:h-[28rem]',
    iconBubble: 'w-20 h-21 md:w-12 md:h-12',
    iconSize: 20,
  },
  about: {
     wrapper: 'w-70 h-70 sm:w-[24rem] sm:h-[26rem] md:w-[26rem] md:h-[28rem]',
    iconBubble: 'w-9 h-9 md:w-10 md:h-10',
    iconSize: 16,
  },
};

const techIcons = [
  { Icon: Layers, label: 'Spring Boot', pos: 'top-[18%] right-[-14%]', delay: 0.4 },
  { Icon: Atom, label: 'React', pos: 'bottom-[22%] left-[-16%]', delay: 0.8 },
  { Icon: GitBranch, label: 'Git', pos: 'top-[48%] left-[-18%]', delay: 1.6 },
  { Icon: GitBranch, label: 'GitHub', pos: 'top-[-8%] right-[18%]', delay: 2.0 },
  { Icon: Box, label: 'Docker', pos: 'bottom-[-8%] left-[22%]', delay: 2.4 },
];

const glassCards = [{ text: '🚀 Building Projects', pos: '-top-5 -right-4 md:-right-8', delay: 0.6 }];

export default function ProfileVisual({ variant }) {
  const reduceMotion = useReducedMotion();
  const { wrapper, iconBubble, iconSize } = sizeConfig[variant];




  // Pointer parallax + tilt
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const springX = useSpring(mvX, { stiffness: 120, damping: 20, mass: 0.4 });
  const springY = useSpring(mvY, { stiffness: 120, damping: 20, mass: 0.4 });
  const rotateX = useTransform(springY, [-30, 30], [7, -7]);
  const rotateY = useTransform(springX, [-30, 30], [-7, 7]);

  // Spotlight follows the same pointer offset
  const spotX = useTransform(springX, [-30, 30], [38, 62]);
  const spotY = useTransform(springY, [-30, 30], [38, 62]);
  const spotlightBg = useMotionTemplate`radial-gradient(circle at ${spotX}% ${spotY}%, var(--color-primary) 0%, transparent 60%)`;

  function handlePointerMove(e) {
    if (reduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    mvX.set(Math.max(-30, Math.min(30, relX / 6)));
    mvY.set(Math.max(-30, Math.min(30, relY / 6)));
  }

  function handlePointerLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <div
      className="relative flex items-center justify-center select-none"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{ perspective: 800 }}
    >
      {/* Spotlight */}
      <motion.div
        aria-hidden
        className="absolute -inset-10 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: spotlightBg }}
      />

      {/* Soft glow */}
      <div
        aria-hidden
        className={`absolute inset-6 rounded-3xl bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl ${
          reduceMotion ? '' : 'animate-glow-pulse'
        }`}
      />

      {/* Rotating gradient ring */}
      <div
        aria-hidden
        className="absolute inset-[-6%] rounded-[2rem] p-[2px] opacity-40"
        style={{
          background:
            'conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-primary))',
        }}
      >
        <div className="w-full h-full rounded-[2rem]" />
      </div>

      {/* Particles */}
      {!reduceMotion &&
        PARTICLES_DATA.map((p) => (
          <span
            key={p.id}
            aria-hidden
            className={`absolute bottom-0 rounded-full ${p.tone} animate-particle pointer-events-none`}
            style={{
              left: `${p.left}%`,
              width: p.size,
              height: p.size,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}

      {/* Core photo card */}
      <motion.div
        transition={{ layout: { type: 'spring', stiffness: 90, damping: 20, mass: 0.7 } }}
        className={`relative z-10 ${wrapper} rounded-3xl border border-white/40 shadow-2xl backdrop-blur-sm overflow-hidden ${
          reduceMotion ? '' : 'animate-float-slow'
        }`}
        style={{
          x: reduceMotion ? 0 : springX,
          y: reduceMotion ? 0 : springY,
          rotateX: reduceMotion ? 0 : rotateX,
          rotateY: reduceMotion ? 0 : rotateY,
          transformStyle: 'preserve-3d',
        }}
        whileHover={reduceMotion ? undefined : { scale: 1.05 }}
      >
        {PROFILE_IMAGE_SRC ? (
          <img
  src={image}
  alt="Ashish Kumar Gupta"
  className="w-full h-full object-cover object-top"
/>
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center gap-3 border-2 border-dashed border-primary/30 bg-gradient-to-br from-primary/10 via-white/50 to-secondary/10">
            <Camera className="w-10 h-10 text-primary/50" />
            <p className="text-xs font-medium text-muted-foreground text-center px-8">Your photo goes here</p>
          </div>
        )}
      </motion.div>

      {/* Floating tech icons */}
      {techIcons.map(({ Icon, label, pos, delay }) => (
        <motion.div
          key={label}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: delay * 0.15, duration: 0.5 }}
          className={`hidden md:flex absolute ${pos} ${iconBubble} z-20 items-center justify-center rounded-xl bg-white/70 backdrop-blur-sm border border-white/50 shadow-md text-primary ${
            reduceMotion ? '' : 'animate-icon-float'
          }`}
          style={reduceMotion ? undefined : { animationDelay: `${delay}s` }}
          title={label}
          aria-hidden
        >
          <Icon size={iconSize} />
        </motion.div>
      ))}

      {/* Glass info cards */}
      {glassCards.map(({ text, pos, delay }) => (
        <motion.div
          key={text}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + delay * 0.2, duration: 0.5 }}
          className={`hidden lg:block absolute ${pos} z-20 rounded-xl bg-white/70 backdrop-blur-md border border-white/50 shadow-lg px-3 py-2 text-xs font-semibold text-foreground ${
            reduceMotion ? '' : 'animate-float-slow'
          }`}
          style={reduceMotion ? undefined : { animationDelay: `${delay}s` }}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}

