import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Code } from 'lucide-react';
import './Experience.css';

function Experience() {
  // Data for the timeline
  const experienceData = [
    {
      type: "work",
      title: "Freelance Full Stack Developer",
      company: "Self-Employed",
      date: "2024 - Present",
      description: [
        "Building responsive, modern web applications using React and Node.js.",
        "Collaborating with clients to design and implement custom digital experiences.",
        "Managing the full software lifecycle from design to deployment."
      ]
    },
    {
      type: "education",
      title: "Full Stack Web Development",
      company: "The Odin Project",
      date: "2023 - Present",
      description: [
        "Immersive, project-based curriculum focused on JavaScript, React, Node.js, and databases.",
        "Built multiple full-stack projects using industry-standard tools like Git and GitHub.",
        "Mastered core computer science concepts and modern web architecture."
      ]
    },
    {
      type: "work",
      title: "Reverse Engineering & Hardware Repair",
      company: "Independent Projects",
      date: "2021 - Present",
      description: [
        "Diagnosed and repaired complex hardware and software issues in various machines.",
        "Developed strong analytical and problem-solving skills by reverse engineering broken systems.",
        "Applied logical debugging techniques to find creative solutions."
      ]
    }
  ];

  // Helper function to choose the right icon
  const getIcon = (type) => {
    if (type === "work") return <Briefcase size={20} />;
    if (type === "education") return <GraduationCap size={20} />;
    return <Code size={20} />;
  };

  return (
    <section id="experience" className="experience-section section">
      <div className="container">
        
        {/* Section Header */}
        <motion.div 
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My <span className="gradient-text">Journey</span></h2>
          <div className="section-divider"></div>
        </motion.div>

        {/* Timeline */}
        <div className="timeline">
          {experienceData.map((item, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              {/* The glowing dot */}
              <div className="timeline-dot">
                {getIcon(item.type)}
              </div>

              {/* The content card */}
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3 className="timeline-title">{item.title}</h3>
                  <span className="timeline-date">{item.date}</span>
                </div>
                <h4 className="timeline-company">{item.company}</h4>
                
                <ul className="timeline-description">
                  {item.description.map((point, i) => (
                    <li key={i}>{point}</li>
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

export default Experience;