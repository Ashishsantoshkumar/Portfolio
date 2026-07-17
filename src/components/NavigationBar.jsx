import { useEffect, useState } from "react";

const sections = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function getActiveSectionId() {
  const OFFSET = 120; // accounts for sticky header
  let activeId = "home";

  for (const s of sections) {
    const el = document.getElementById(s.id);
    if (!el) continue;
    const top = el.getBoundingClientRect().top;
    if (top - OFFSET <= 0) activeId = s.id;
  }

  return activeId;
}

export default function NavigationBar() {
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setActiveId(getActiveSectionId());
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // keep hash for browser navigation
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <header
      className={
        "fixed top-0 left-0 right-0 z-50 transition-colors " +
        (scrolled
          ? "bg-white/80 backdrop-blur border-b border-border"
          : "bg-transparent")
      }
    >
      <nav className="container flex items-center justify-between py-3">
        <div className="text-sm font-bold text-foreground">
          <span className="text-primary text-2xl">Ashish</span>
        </div>

        <div className="hidden md:flex items-center gap-1">
          {sections.map((s) => {
            const isActive = activeId === s.id;
            return (
              <button
                key={s.id}
                onClick={() => handleNav(s.id)}
                className={
                  "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 " +
                  (isActive
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-muted hover:text-primary")
                }
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="md:hidden">
          <select
            aria-label="Navigate sections"
            value={activeId}
            onChange={(e) => handleNav(e.target.value)}
            className="bg-muted text-foreground border border-border rounded-lg px-3 py-2 text-sm"
          >
            {sections.map((s) => (
              <option key={s.id} value={s.id}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </nav>
    </header>
  );
}

