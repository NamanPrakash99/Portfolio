import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about my background and what drives me."
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Photo Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-primary-500/20 rounded-lg blur-lg z-0" />
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                {/* Profile photo */}
                <img 
                  src="/profile.jpg" 
                  alt="Naman Prakash" 
                  className="w-full aspect-[4/5] object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Computer Science Student & Developer
            </h3>
            
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I'm Naman, a Computer Science and Engineering student at Lovely Professional University, with a passion for creating elegant solutions to complex problems.
              </p>
              
              <p>
                With experience in both frontend and backend development, I enjoy working across the entire stack. My tech journey began with C++ and has expanded to include modern web technologies like React, Angular, and Node.js.
              </p>
              
              

              <p>
                I'm constantly learning and exploring new technologies to stay at the forefront of web development trends. I'm particularly interested in creating accessible, responsive, and performant web applications.
              </p>
            </div>
            
            <div className="mt-8">
              <a href="/Naman_CV.pdf" download="Naman_CV.pdf" target="_blank" rel="noopener noreferrer">
                <Button>
                  Download CV
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 