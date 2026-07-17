import { Button } from "@/components/ui/button.jsx";
import ProfileVisual from '@/components/ProfileVisual';

export default function About({ showVisual, visualAnchorRef }) {
  return (
    <section id="about" className="section-padding bg-card">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          <h2 className="section-heading">
            About <span className="text-primary">Me</span>
          </h2>
          <p className="section-subheading">Passionate about quality engineering and building robust automation solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-6 animate-fade-in-up">
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              I'm an aspiring <strong>Software Development Engineer in Test (SDET)</strong> with a strong foundation in software development and a passion for delivering high-quality, reliable applications. I specialize in building scalable automation frameworks using <strong>Java, Selenium WebDriver, TestNG, and Cucumber (BDD)</strong>, following industry best practices such as the <strong>Page Object Model (POM)</strong>.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Beyond automation, I have hands-on experience in <strong>frontend development</strong> using <strong>HTML, CSS, JavaScript, and React</strong>, enabling me to understand application architecture from both development and testing perspectives. I continuously strengthen my problem-solving abilities by solving <strong>Data Structures and Algorithms</strong> problems in Java and C++.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              My goal is to leverage my combined expertise in software development, test automation, and quality engineering to build reliable, scalable, and user-centric software solutions.
            </p>

            {/* Contact Info */}
            <div className="pt-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Email:</span> ashishsanotosh523@gmail.com
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> India
              </p>
            </div>

            {/* Resume Button */}
            <div className="pt-4">
              <a href="https://drive.google.com/file/d/1XIaJsW6ozc-Aqd8XoPUpjD-2JKQKomvX/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-white group">
                  Download Resume
                  <svg className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                  </svg>
                </Button>
              </a>
            </div>
          </div>

          {/* Right - Shared animated profile visual */}
          <div ref={visualAnchorRef} className="hidden md:flex items-center justify-center min-h-96">
            {showVisual && <ProfileVisual variant="about" />}
          </div>
        </div>
      </div>
    </section>
  );
}

