import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { BookOpen, Code2, Cpu, Zap } from 'lucide-react';

const Timeline = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const timelineData = [
    {
      phase: 'Phase 1',
      title: 'Foundation Building',
      period: 'Current Focus',
      description: 'Mastering core computer science fundamentals and system-level programming',
      skills: ['C++', 'DSA', 'COA', 'OS'],
      icon: BookOpen,
      status: 'active',
      color: 'primary',
    },
    {
      phase: 'Phase 2',
      title: 'System Integration',
      period: 'Next 6 Months',
      description: 'Expanding into Linux systems, networking, and embedded programming',
      skills: ['Linux', 'Python', 'CN', 'Embedded'],
      icon: Code2,
      status: 'upcoming',
      color: 'secondary',
    },
    {
      phase: 'Phase 3',
      title: 'Specialization',
      period: 'Post-Job Entry',
      description: 'Advanced parallel computing, databases, and AI system integration',
      skills: ['CUDA', 'DBMS', 'AI Integration', 'Performance Optimization'],
      icon: Cpu,
      status: 'future',
      color: 'primary',
    },
    {
      phase: 'Beyond',
      title: 'Innovation',
      period: 'Long-term Vision',
      description: 'Contributing to next-generation computing systems and AI acceleration',
      skills: ['Research', 'Open Source', 'Tech Leadership', 'System Architecture'],
      icon: Zap,
      status: 'vision',
      color: 'secondary',
    },
  ];

  return (
    <section id="timeline" className="py-20 relative">
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
              Learning <span className="gradient-text">Journey</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              A roadmap of continuous learning and skill development in system software engineering
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary rounded-full hidden lg:block" />

            <div className="space-y-12">
              {timelineData.map((item, index) => (
                <motion.div
                  key={item.phase}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03 }}
                      className={`glass p-8 rounded-2xl hover-lift ${
                        item.status === 'active' ? 'ring-2 ring-primary/50 glow-primary' : ''
                      }`}
                    >
                      {/* Phase Badge */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                          item.status === 'active' 
                            ? 'bg-primary/20 text-primary' 
                            : item.status === 'upcoming'
                            ? 'bg-secondary/20 text-secondary'
                            : 'bg-muted/20 text-muted-foreground'
                        }`}>
                          {item.phase}
                        </span>
                        <span className="text-sm text-muted-foreground">{item.period}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-2xl font-bold mb-3 gradient-text">{item.title}</h3>

                      {/* Description */}
                      <p className="text-foreground/80 mb-6 leading-relaxed">{item.description}</p>

                      {/* Skills */}
                      <div className="space-y-3">
                        <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                          Key Focus Areas
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                              transition={{ delay: 0.5 + index * 0.2 + skillIndex * 0.1 }}
                              className="px-3 py-1 glass-strong rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Icon */}
                  <div className="relative hidden lg:block">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}
                      className={`w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                        item.status === 'active'
                          ? 'bg-primary shadow-glow'
                          : item.status === 'upcoming'
                          ? 'bg-secondary shadow-glow-secondary'
                          : 'glass border-2 border-muted'
                      }`}
                    >
                      <item.icon className={`h-8 w-8 ${
                        item.status === 'active' || item.status === 'upcoming' 
                          ? 'text-white' 
                          : 'text-muted-foreground'
                      }`} />
                    </motion.div>
                  </div>

                  {/* Mobile Icon */}
                  <div className="lg:hidden mb-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.status === 'active'
                        ? 'bg-primary'
                        : item.status === 'upcoming'
                        ? 'bg-secondary'
                        : 'glass border-2 border-muted'
                    }`}>
                      <item.icon className={`h-6 w-6 ${
                        item.status === 'active' || item.status === 'upcoming' 
                          ? 'text-white' 
                          : 'text-muted-foreground'
                      }`} />
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 gradient-text">The Journey Continues</h4>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Every phase builds upon the last, creating a solid foundation for innovation in system software engineering. 
                I'm committed to continuous learning and staying at the forefront of technology evolution.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;