import { useEffect, useRef, useState, useCallback } from 'react';
import { Card } from '@/components/ui/card.jsx';
import { Calendar, Briefcase, ChevronDown } from 'lucide-react';


const experienceItems = [
  {
    id: 1,
    company: 'Cognizant',
    role: 'Java Automation QA Intern',
    duration: 'Jan 2026 – May 2026',
    logo: 'CG',
    description:
      'Built and maintained automated test suites for enterprise web applications, improving regression coverage and catching defects before release.',
    stack: ['Java', 'Selenium', 'TestNG','Cucumber', 'REST Assured', 'SQL'],
  },
   {
    id: 2,
    company: 'Capsitech',
    role: 'Frontend Development Intern',
    duration: 'Jul 2025 – Aug 2025',
    logo: 'CP',
    description:
      'Developed responsive web interfaces using HTML, CSS, JavaScript, and React.js. Built reusable UI components, improved user experience, and optimized applications with Tailwind CSS for seamless performance across multiple devices.',
    stack: [
      'React.js',
      'JavaScript',
      'HTML',
      'CSS',
      'Tailwind CSS',
      'Git',
      'GitHub',
    ],
  },
];

// Build a smooth S-curve path through a list of {x,y} points.
function buildSnakePath(points) {
  if (points.length < 2) return '';
  let d = `M ${points[0].x},${points[0].y}`;
  for (let i = 0; i < points.length - 1; i++) {
    const p0 = points[i];
    const p1 = points[i + 1];
    const midY = (p0.y + p1.y) / 2;
    d += ` C ${p0.x},${midY} ${p1.x},${midY} ${p1.x},${p1.y}`;
  }
  return d;
}

function ExperienceRow({ item, isLeft, isActive, isVisited, nodeRef, rowRef }) {
  const [inView, setInView] = useState(false);
  const localRef = useRef(null);

  useEffect(() => {
    const el = localRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        rowRef(el);
      }}
      className={`relative flex items-center gap-6 md:gap-0 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <div className="flex-1 md:w-1/2 md:px-10">
        <Card
          className={`group relative p-6 border bg-white transition-all duration-700 ease-out ${
            inView
              ? 'opacity-100 translate-x-0 scale-100'
              : `opacity-0 scale-95 ${isLeft ? 'md:-translate-x-10' : 'md:translate-x-10'} translate-y-6`
          } ${
            isActive
              ? 'border-primary shadow-[0_0_35px_-8px_var(--primary)] scale-[1.03]'
              : 'border-border hover-lift'
          }`}
        >
          <div className="flex items-start gap-4">
            <div
              className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xs font-bold transition-colors duration-500 ${
                isVisited ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
              }`}
            >
              {item.logo}
            </div>
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {item.company}
                {isActive && (
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                )}
              </h3>
              <p className="text-sm text-muted-foreground font-medium flex items-center gap-1.5 mt-0.5">
                <Briefcase className="w-3.5 h-3.5" /> {item.role}
              </p>
              <p className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5 mt-1">
                <Calendar className="w-3 h-3" /> {item.duration}
              </p>
            </div>
          </div>

          <p className="text-sm text-muted-foreground mt-4">{item.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {item.stack.map((s, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-muted text-foreground rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          <ChevronDown
            className={`w-4 h-4 text-muted-foreground absolute bottom-4 right-4 transition-transform duration-300 ${
              isActive ? 'translate-y-0.5 text-primary' : ''
            }`}
          />
        </Card>
      </div>

      {/* Spine node — desktop only, mobile has its own simpler node */}
      <div className="hidden md:flex md:w-0 items-center justify-center relative z-10">
        <div
          ref={nodeRef}
          className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${
            isActive
              ? 'bg-primary border-primary scale-150 shadow-[0_0_20px_4px_var(--primary)]'
              : isVisited
              ? 'bg-primary/70 border-primary'
              : 'bg-white border-border'
          }`}
        />
      </div>
    </div>
  );
}

export default function Experience() {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);
  const nodeEls = useRef([]);
  const rowEls = useRef([]);
  const pathRef = useRef(null);

  const [pathD, setPathD] = useState('');
  const [pathLength, setPathLength] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [maxReached, setMaxReached] = useState(0);

  const recomputePath = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const containerRect = container.getBoundingClientRect();
    const points = nodeEls.current
      .filter(Boolean)
      .map((el) => {
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - containerRect.left,
          y: r.top + r.height / 2 - containerRect.top,
        };
      });
    if (points.length >= 2) {
      setPathD(buildSnakePath(points));
    }
  }, []);

  useEffect(() => {
    recomputePath();
    const onResize = () => recomputePath();
    window.addEventListener('resize', onResize);
    const ro = new ResizeObserver(() => recomputePath());
    if (containerRef.current) ro.observe(containerRef.current);
    return () => {
      window.removeEventListener('resize', onResize);
      ro.disconnect();
    };
  }, [recomputePath]);

  useEffect(() => {
    if (pathRef.current) {
      const len = pathRef.current.getTotalLength();
      setPathLength(len);
    }
  }, [pathD]);

  // Track which row is centered in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = rowEls.current.indexOf(entry.target);
            if (idx !== -1) {
              setActiveIndex(idx);
              setMaxReached((prev) => Math.max(prev, idx));
            }
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );
    rowEls.current.filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathD]);

  const progress = experienceItems.length > 1 ? maxReached / (experienceItems.length - 1) : 1;
  const dashOffset = pathLength * (1 - progress);

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          <h2 className="section-heading">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="section-subheading">A journey through roles, teams, and technologies</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={containerRef} className="relative">
            {/* Mobile: simple vertical spine */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

            {/* Desktop: curved snake path */}
            <svg
              className="hidden md:block absolute inset-0 w-full h-full pointer-events-none"
              preserveAspectRatio="none"
            >
              <path d={pathD} fill="none" stroke="var(--border)" strokeWidth="3" />
              <path
                ref={pathRef}
                d={pathD}
                fill="none"
                stroke="url(#snakeGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                style={{
                  strokeDasharray: pathLength,
                  strokeDashoffset: dashOffset,
                  transition: 'stroke-dashoffset 0.7s ease',
                }}
              />
              <defs>
                <linearGradient id="snakeGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--primary)" />
                  <stop offset="100%" stopColor="var(--secondary)" />
                </linearGradient>
              </defs>
            </svg>

            <div className="space-y-10 md:space-y-16 relative">
              {experienceItems.map((item, index) => (
                <ExperienceRow
                  key={item.id}
                  item={item}
                  index={index}
                  isLeft={index % 2 === 0}
                  isActive={index === activeIndex}
                  isVisited={index <= maxReached}
                  nodeRef={(el) => (nodeEls.current[index] = el)}
                  rowRef={(el) => (rowEls.current[index] = el)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}