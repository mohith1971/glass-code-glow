import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-glass-border">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            Designed & Built by{' '}
            <span className="gradient-text font-semibold">Bongu Mohit</span>
            {' '}with{' '}
            <Heart className="inline h-4 w-4 text-primary mx-1" />
            {' '}• © {currentYear}
          </p>
          <p className="text-sm text-muted-foreground/60 mt-2">
            "Learning in silence, building with purpose"
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;