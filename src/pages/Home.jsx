import { useRef } from "react";
import { useInView } from "framer-motion";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import Projects from "../components/Projects.jsx";
import EducationJourney from "../components/EducationJourney.jsx";
import Contact from "../components/Contact.jsx";
import Experience from "../components/Experience.jsx";
import NavigationBar from "../components/NavigationBar.jsx";
import Footer from "../components/footer.jsx";

export default function Home() {

  const aboutVisualAnchorRef = useRef(null);
  const isAboutActive = useInView(aboutVisualAnchorRef, {
    margin: "-35% 0px -35% 0px",
  });

  return (
    <div className="min-h-screen bg-white">
      <NavigationBar />
      <main className="pt-16 md:pt-20">
        <Hero showVisual={!isAboutActive} />
        <About showVisual={isAboutActive} visualAnchorRef={aboutVisualAnchorRef} />
        <Projects />
        <Experience/>
        <EducationJourney />
        <Contact />
        <Footer/>
      </main>
    </div>
  );
}


