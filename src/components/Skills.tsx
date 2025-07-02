import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Database, Settings, Zap } from 'lucide-react';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      skills: ['C++', 'Python', 'Bash'],
      color: 'text-primary',
    },
    {
      title: 'Core CS',
      icon: Database,
      skills: ['DSA', 'OS', 'COA', 'CN'],
      color: 'text-secondary',
    },
    {
      title: 'Tools/Tech',
      icon: Settings,
      skills: ['Linux', 'Git', 'React.js', 'Tailwind CSS', 'Framer Motion'],
      color: 'text-primary',
    },
    {
      title: 'Special Interests',
      icon: Zap,
      skills: ['CUDA', 'Embedded Systems', 'System Programming'],
      color: 'text-secondary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Building expertise in system-level programming and cutting-edge technologies
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="glass p-8 rounded-2xl hover-lift group"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex p-4 rounded-full bg-gradient-primary/10 mb-4 group-hover:bg-gradient-primary/20 transition-all duration-300`}>
                    <category.icon className={`h-8 w-8 ${category.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 0.4 + (index * 0.1) + (skillIndex * 0.05) 
                      }}
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between p-3 glass-strong rounded-lg group/skill cursor-pointer"
                    >
                      <span className="text-foreground font-medium">{skill}</span>
                      <motion.div
                        className="w-2 h-2 rounded-full bg-primary opacity-0 group-hover/skill:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.5 }}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(45deg, transparent, hsl(var(--primary)), transparent)' }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 gradient-text">Learning Philosophy</h4>
              <p className="text-lg text-foreground/80 leading-relaxed">
                I believe in mastering fundamentals before exploring advanced concepts. Every line of code I write 
                is a step towards building systems that matter. From low-level memory management to high-level 
                system architecture, I approach each challenge with curiosity and determination.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;