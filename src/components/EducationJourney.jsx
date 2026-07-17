import { useEffect, useRef, useState, useCallback } from 'react';
import { Card } from "@/components/ui/card.jsx";
import { Badge } from '@/components/ui/badge.jsx';
import { Calendar, BookOpen, ChevronDown, ExternalLink } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// EDUCATION DATA
// ─────────────────────────────────────────────────────────────
const educationItems = [
  {
    id: 1,
    title: 'Bachelor of Technology in Information Technology',
    school: 'Haldia Institute of Technology, Haldia, West Bengal, India',
    period: '2022 – 2026',
    meta: 'CGPA: 7.82 / 10',
    type: 'Education',
    skills: ['IT', 'DSA', 'OOP', 'SQL'],
  },
  {
    id: 2,
    title: 'Learn Manual Software Testing + Agile with Jira Tool',
    school: 'Udemy',
    meta: 'Certification',
    type: 'Certification',
    skills: ['Jira', 'Agile', 'Manual Testing'],
    link: 'https://www.udemy.com/certificate/UC-4db80648-56c5-4a86-a92c-2979b9d3c0cb/',
    link2: 'https://www.udemy.com/',
  },
  {
    id: 3,
    title: 'Achievements',
    school: 'LeetCode & GeeksforGeeks',

    meta: '400+ coding problems solved',
    type: 'Achievement',
    skills: ['Java', 'DSA', 'Problem Solving'],
    link: 'https://leetcode.com/u/ashishsantosh/',
    link2: 'https://www.geeksforgeeks.org/profile/ashishsan5xu3',
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

function EducationRow({ item, isLeft, isActive, isVisited, nodeRef, rowRef }) {
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

  const linkClassName =
    'mt-2 inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors';

  return (
    <div
      ref={(el) => {
        localRef.current = el;
        rowRef(el);
      }}
      className={`relative flex items-center gap-6 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
        }`}
    >
      <div className="flex-1 md:w-1/2 md:px-10">
        <Card
          className={`group relative p-6 border bg-white transition-all duration-700 ease-out ${inView
              ? 'opacity-100 translate-x-0 scale-100'
              : `opacity-0 scale-95 ${isLeft ? 'md:-translate-x-10' : 'md:translate-x-10'} translate-y-6`
            } ${isActive
              ? 'border-primary shadow-[0_0_35px_-8px_var(--primary)] scale-[1.03]'
              : 'border-border hover-lift'
            }`}
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="min-w-0">
              <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground font-medium mt-1">{item.school}</p>
            </div>

            <Badge
              className={
                item.type === 'Education'
                  ? 'bg-primary'
                  : item.type === 'Certification'
                    ? 'bg-secondary'
                    : 'bg-cyan-500'
              }
            >
              {item.type}
            </Badge>
          </div>
          {item.type === 'Education' && (
            <p className="text-xs text-muted-foreground font-semibold flex items-center gap-1.5 mb-3">
              <Calendar className="w-3 h-3" />
              {item.period}
            </p>
          )}

          <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
            <BookOpen className="w-3.5 h-3.5 text-primary" /> {item.meta}
          </p>

          <div className="flex flex-wrap gap-2">
            {item.skills.map((s, idx) => (
              <span
                key={idx}
                className="px-2 py-1 text-xs font-medium bg-muted text-foreground rounded-full"
              >
                {s}
              </span>
            ))}
          </div>

          {item.type === 'Certification' && item.link ? (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-md border border-border bg-white px-3 py-2 text-xs font-semibold text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              View Certificate
            </a>
          ) : null}

          {item.type === 'Achievement' ? (
            <>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  LeetCode
                </a>
              ) : null}

              {item.link2 ? (
                <a
                  href={item.link2}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClassName}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GeeksforGeeks
                </a>
              ) : null}
            </>
          ) : null}

          <ChevronDown
            className={`w-4 h-4 text-muted-foreground absolute bottom-4 right-4 transition-transform duration-300 ${isActive ? 'translate-y-0.5 text-primary' : ''
              }`}
          />
        </Card>
      </div>

      <div className="hidden md:flex md:w-0 items-center justify-center relative z-10">
        <div
          ref={nodeRef}
          className={`w-5 h-5 rounded-full border-2 transition-all duration-500 ${isActive
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

export default function EducationJourney() {
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

    if (points.length >= 2) setPathD(buildSnakePath(points));
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
    if (!pathRef.current) return;
    setPathLength(pathRef.current.getTotalLength());
  }, [pathD]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const idx = rowEls.current.indexOf(entry.target);
          if (idx !== -1) {
            setActiveIndex(idx);
            setMaxReached((prev) => Math.max(prev, idx));
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    rowEls.current.filter(Boolean).forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathD]);

  const progress =
    educationItems.length > 1 ? maxReached / (educationItems.length - 1) : 1;
  const dashOffset = pathLength * (1 - progress);

  return (
    <section id="education" ref={sectionRef} className="section-padding bg-white overflow-hidden">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          <h2 className="section-heading">
            Education <span className="text-primary">Journey</span>
          </h2>
          <p className="section-subheading">
            Academics, certifications, and learning milestones
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div ref={containerRef} className="relative">
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary to-secondary" />

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
              {educationItems.map((item, index) => (
                <EducationRow
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

