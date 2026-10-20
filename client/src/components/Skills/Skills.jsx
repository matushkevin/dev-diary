import { motion } from 'framer-motion';
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Terminal, 
  GitBranch 
} from 'lucide-react';
import './Skills.css';

function Skills() {
  // We organize our skills into categories for the UI
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="category-icon" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript (ES6+)", "React", "Responsive Design"]
    },
    {
      title: "Backend",
      icon: <Server className="category-icon" size={24} />,
      skills: ["Node.js", "Express", "REST APIs"]
    },
    {
      title: "Database & Tools",
      icon: <Database className="category-icon" size={24} />,
      skills: ["MongoDB", "Git & GitHub", "VS Code", "Vite", "Framer Motion"]
    }
  ];

  return (
    <section id="skills" className="skills-section section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Skills</span></h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={category.title}
              className="skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }} // Staggers the animation
            >
              <div className="skill-card-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              
              <ul className="skill-list">
                {category.skills.map((skill, i) => (
                  <li key={i} className="skill-item">
                    <span className="skill-dot"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;