import { useState } from 'react';
import { Button } from "@/components/ui/button.jsx";
import { Card } from "@/components/ui/card.jsx";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'Responsive React.js weather app using the OpenWeatherMap API. Features location-based search and dynamic weather updates with responsive UI styled using Tailwind CSS.',
    category: 'Full-Stack',
    tags: ['React.js', 'Vite', 'OpenWeatherMap API', 'Tailwind CSS'],
    image: '🌦️',
    demoLink: 'https://weather-app-phi-woad-33.vercel.app/', // TODO: replace with live demo URL
    githubLink: 'https://github.com/Ashishsantoshkumar/Weather-App', // TODO: replace with GitHub repo URL
  },
  {
    id: 2,
    title: 'Selenium Java Test Automation (Cucumber BDD)',
    description: 'Automation test suite built with Java, Selenium WebDriver, TestNG, and Cucumber (BDD). Includes Page Object Model style structure and supports data-driven testing patterns.',
    category: 'Automation',
    tags: ['Java', 'Selenium', 'TestNG', 'Cucumber (BDD)'],
    image: '🤖',
    demoLink: 'https://github.com/Ashishsantoshkumar/SeleniumProject', // TODO: replace with live demo URL (or remove if N/A)
    githubLink: 'https://github.com/Ashishsantoshkumar/SeleniumProject', // TODO: replace with GitHub repo URL
  },
  {
  id: 3,
  title: 'Password Generator',
  description: 'A secure password generator with customizable length and options for uppercase, lowercase, numbers, and special characters.',
  category: 'Full-Stack',
  tags: [
    'HTML',
    'CSS',
    'JavaScript'
  ],
  image: '🔐',
  demoLink: 'https://password-generator-jc58-915zhug40.vercel.app/', // Replace with your live demo URL
  githubLink: 'https://github.com/Ashishsantoshkumar/Password-Generator', // Replace with your GitHub repository URL
},
];

const categories = ['All', 'Automation', 'Full-Stack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container">
        <div className="max-w-3xl mx-auto mb-12 text-center animate-fade-in-up">
          <h2 className="section-heading">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="section-subheading">A showcase of automation frameworks, tools, and technical solutions</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12 animate-fade-in-up">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-stagger">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-lift bg-white border border-border group flex flex-col h-full"
            >
              <div className="h-40 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                {project.image}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag, index) => (
                    <span key={index} className="px-2 py-1 text-xs font-medium bg-muted text-foreground rounded-full">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs font-medium bg-muted text-foreground rounded-full">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>

                <div className="flex gap-2 pt-4 border-t border-border">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg transition-all duration-300"
                  >
                    <ExternalLink size={16} />
                    View
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-3 py-2 text-sm font-medium bg-muted text-foreground hover:bg-foreground hover:text-white rounded-lg transition-all duration-300"
                  >
                    <FaGithub size={16} /> 
                    Code
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 pt-8 border-t border-border">
          <a href="#" className="inline-block">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white group">
              View All Projects
              <svg className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}