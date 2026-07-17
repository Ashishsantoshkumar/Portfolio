import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button.jsx';
import { ArrowRight, Mail, Linkedin, Github } from 'lucide-react';
import ProfileVisual from '@/components/ProfileVisual';

const roles = ['SDET', 'Test Automation Engineer', 'QA Engineer', 'Problem Solver'];

export default function Hero({ showVisual }) {
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

          {/* Right Content - Animated profile visual */}
          <div className="flex items-center justify-center min-h-80 md:min-h-96">
            {showVisual && <ProfileVisual variant="hero" />}
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

