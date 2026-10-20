import { motion } from 'framer-motion';
import { ExternalLink, Code, Folder } from 'lucide-react';
import './Projects.css';

function Projects() {
  // Data for our placeholder projects
  const projectsData = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce application with user authentication, a shopping cart, and payment processing integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management tool where teams can create boards, assign tasks, and track progress in real-time.",
      tech: ["React", "Express", "Socket.io"],
      github: "#",
      live: "#"
    },
    {
      title: "Developer Blog",
      description: "A personal blogging platform featuring markdown support, syntax highlighting, and a custom admin dashboard.",
      tech: ["React", "Node.js", "PostgreSQL"],
      github: "#",
      live: "#"
    }
  ];

  return (
    <section id="projects" className="projects-section section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Featured <span className="gradient-text">Projects</span></h2>
          <div className="section-divider"></div>
          <p className="section-subtitle">
            Here are some of the projects I've been working on. (Placeholders for now!)
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* Fake Image Area */}
              <div className="project-image-placeholder">
                <Folder size={48} className="project-folder-icon" />
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  
                  {/* Links */}
                  <div className="project-links">
                    <a href={project.github} aria-label="GitHub Repository">
                      <Code size={20} />
                    </a>
                    <a href={project.live} aria-label="Live Demo">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <p className="project-description">{project.description}</p>

                {/* Tech Tags */}
                <ul className="project-tech-list">
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Projects;