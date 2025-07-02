import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-20 relative">
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
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-lg opacity-30 animate-pulse" />
                <div className="relative glass-strong rounded-full p-2 hover-lift">
                  <img
                    src="https://via.placeholder.com/250x250.png?text=Your+Photo"
                    alt="Bongu Mohit"
                    className="w-64 h-64 rounded-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            {/* About Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-6"
            >
              <div className="glass p-8 rounded-2xl hover-lift">
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  I'm <span className="gradient-text font-semibold">Bongu Mohit</span>, a passionate and determined aspiring System Software and Embedded Engineer with a strong foundation in C++, Data Structures, Operating Systems, and Computer Architecture.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  I learn in silence and build with purpose, aiming to work at world-class companies like <span className="text-primary font-semibold">NVIDIA</span>, <span className="text-primary font-semibold">Qualcomm</span>, <span className="text-primary font-semibold">Intel</span>, or <span className="text-primary font-semibold">AMD</span>.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/90 mb-6">
                  From building efficient system-level solutions to envisioning futuristic tools like a personal AI assistant, I'm on a mission to bridge low-level programming with intelligent automation.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground/90">
                  I believe in <span className="text-secondary font-semibold">learning deeply</span>, <span className="text-secondary font-semibold">failing forward</span>, and <span className="text-secondary font-semibold">proving silently</span>—through code.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl text-center hover-lift"
                >
                  <div className="text-2xl font-bold gradient-text">2+</div>
                  <div className="text-muted-foreground">Years Learning</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="glass p-6 rounded-xl text-center hover-lift"
                >
                  <div className="text-2xl font-bold gradient-text">5+</div>
                  <div className="text-muted-foreground">Projects Built</div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;