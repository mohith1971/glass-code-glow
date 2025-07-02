import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Code, Cpu, Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const projects = [
    {
      title: 'JARVIS AI Assistant',
      description: 'Personal AI assistant project combining OS-level automation, scripting, and speech recognition for seamless computer interaction.',
      tech: ['C++', 'Python', 'OS'],
      status: 'WIP',
      icon: Brain,
      gradient: 'from-primary to-secondary',
      github: '#',
      live: null,
    },
    {
      title: 'External eGPU Interface',
      description: 'Portable detachable GPU interface design for laptops, focusing on power efficiency and portability for high-performance computing.',
      tech: ['C++', 'Linux', 'System Design'],
      status: 'Concept',
      icon: Cpu,
      gradient: 'from-secondary to-primary',
      github: '#',
      live: null,
    },
    {
      title: 'DSA Visualizer',
      description: 'Interactive tool to visualize sorting and graph algorithms step-by-step, making complex data structures easy to understand.',
      tech: ['React.js', 'D3.js', 'JavaScript'],
      status: 'Completed',
      icon: Code,
      gradient: 'from-primary/80 to-secondary/80',
      github: '#',
      live: '#',
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
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
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
            <p className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto">
              Building innovative solutions that bridge system-level programming with modern interfaces
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="group relative"
              >
                <div className="glass p-8 rounded-2xl hover-lift h-full flex flex-col">
                  {/* Project Icon & Status */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${project.gradient} shadow-glow`}>
                      <project.icon className="h-8 w-8 text-white" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'Completed' 
                        ? 'bg-success/20 text-success' 
                        : project.status === 'WIP'
                        ? 'bg-warning/20 text-warning'
                        : 'bg-primary/20 text-primary'
                    }`}>
                      {project.status}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-2xl font-bold mb-4 group-hover:gradient-text transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="text-foreground/80 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ delay: 0.5 + index * 0.2 + techIndex * 0.1 }}
                          className="px-3 py-1 glass-strong rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3 mt-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 glass border-glass-border hover:border-primary/50 hover:bg-primary/10"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    {project.live && (
                      <Button
                        variant="default"
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90"
                        onClick={() => window.open(project.live, '_blank')}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Button>
                    )}
                  </div>

                  {/* Hover Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-2xl bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Future Projects Teaser */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-16 text-center"
          >
            <div className="glass p-8 rounded-2xl max-w-3xl mx-auto">
              <h4 className="text-2xl font-bold mb-4 gradient-text">What's Next?</h4>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                I'm constantly exploring new ways to bridge low-level system programming with intelligent automation. 
                Future projects include CUDA-accelerated computing solutions, embedded system interfaces, and 
                advanced AI integration tools.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {['CUDA Programming', 'Embedded Systems', 'AI Integration', 'System Optimization'].map((future, index) => (
                  <motion.span
                    key={future}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ delay: 1.2 + index * 0.1 }}
                    className="px-4 py-2 glass-strong rounded-lg text-sm font-medium hover:bg-primary/10 transition-colors cursor-pointer"
                  >
                    {future}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;