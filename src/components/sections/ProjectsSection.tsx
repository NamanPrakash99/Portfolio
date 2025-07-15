import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

// Project data
const projects = [
  {
    id: 1,
    title: 'Affiliate Link Sharing (Affiliate++)',
    description: 'Affiliate++ is a web-based SaaS platform designed to help content creators, marketers, and businesses manage, shorten, and track affiliate links with ease. It offers real-time click analytics, campaign-wise organization, and role-based access — enabling users to optimize their affiliate strategies and boost performance effortlessly.',
    image: 'Affiliate.png',
    technologies: ['React', 'Node.js','MongoDB', 'Google OAuth', 'Express.js', 'Razorpay'],
    features: [
      'Generate clean, custom short links for affiliate URLs.',
      'Track total clicks, timestamps, referrer sources, and basic geo-location of each visit.',
      'Organize links by campaigns, platforms, or products for better performance tracking.',
      'Support for multiple users with different roles (e.g., Admin, Marketer).',
      'Secure login/signup with JWT-based session management.'
    ],
    github: 'https://github.com/NamanPrakash99/MERN-Project-1',
    live: '',
    date: 'Jun 2025'
  },
  {
    id: 2,
    title: 'CCTV Smart Surveillance & Monitoring System',
    description: 'Developed a web-based surveillance system leveraging existing CCTV infrastructure to enable real-time crowd monitoring, crime detection, and worksite oversight, improving operational efficiency by 50%.',
    image: '/Dashboard.png',
    technologies: ['React', 'Node.js', 'WebRTC', 'Socket.IO', 'MongoDB', 'Tensorflow'],
    features: [
      'Integrated a centralized dashboard for live video access, analytics, and alert notifications, enhancing situational awareness and response time by 40%',
      'Implemented smart monitoring features such as zone-based activity tracking and automated alert generation, reducing manual intervention by 35%',
      'Enhanced public safety and worksite supervision through role-based access control and secure streaming, ensuring data integrity and controlled visibility'
    ],
    github: 'https://github.com/NamanPrakash99/CCTV-Surveillance',
    live: 'https://smart-surveillance-demo.example.com',
    date: 'Mar 2024'
  },
  {
    id: 3,
    title: 'Weather Application',
    description: 'Developed a fully functional weather application using React, enabling real-time weather updates, location-based forecasts, and interactive UI, increasing user engagement by 45%.',
    image: '/Weather.png',
    technologies: ['React', 'Weather API', 'JavaScript', 'CSS3', 'HTML5'],
    features: [
      'Optimized API calls with caching mechanisms, reducing data fetch time by 30% and improving app performance',
      'Implemented a responsive and intuitive UI with dynamic theme switching based on weather conditions, enhancing user experience by 35%',
      'Integrated a search feature with debouncing logic, reducing API request load by 40% and improving response accuracy'
    ],
    github: 'https://github.com/NamanPrakash99/Weather-Forecast',
    live: 'https://weather-forecast-sage-five.vercel.app/',
    date: 'Jan 2024'
  },
  {
    id: 4,
    title: 'E-Commerce Website',
    description: 'Developed a fully functional e-commerce platform with product browsing, cart management, and secure payments, increased user engagement by 40%.',
    image: '/E-Commerce.png',
    technologies: ['MongoDB', 'Express', 'React', 'Node.js'],
    features: [
      'Optimized data storage and order history, improved efficiency by 30%',
      'Implemented real-time cart updates with token-based transactions, enhanced checkout speed by 25%',
      'Enhanced search functionality using debouncing logic, reduced response time by 35%',
      'Built an admin dashboard to streamline backend operations, boosted efficiency by 40%'
    ],
    github: 'https://github.com/NamanPrakash99/E-Commerce--Website',
    live: 'https://reactproject-frontend.vercel.app/',
    date: 'Nov 2024'
  },
  {
    id: 5,
    title: 'Cement Procurement and Management Platform',
    description: 'Created a web platform for cement procurement and order management, boosted order processing efficiency by 35%.',
    image: '/Cement.png',
    technologies: ['Angular', 'MongoDB', 'Express.js'],
    features: [
      'Integrated secure user authentication and role-based access control, strengthened system security by 40%',
      'Refined backend communication through RESTful APIs, boosted response speed by 30%',
      'Deployed the frontend on Netlify and the backend on Render, increased platform availability by 45%'
    ],
    github: 'https://github.com/NamanPrakash99/cement-website-new/tree/main/project1',
    live: 'https://cement-website-new.onrender.com/',
    date: 'Apr 2024'
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="A selection of my recent development work."
          centered
        />
        
        <div className="mt-12">
          {/* Project Tabs */}
          <div className="flex flex-wrap justify-center mb-8">
            {projects.map((project) => (
              <button
                key={project.id}
                onClick={() => setActiveProject(project)}
                className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
                  activeProject.id === project.id
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {project.title}
              </button>
            ))}
          </div>
          
          {/* Active Project Display */}
          <motion.div
            key={activeProject.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Project Image */}
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full aspect-video object-cover object-center"
              />
            </div>
            
            {/* Project Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {activeProject.title}
                </h3>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {activeProject.date}
                </span>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {activeProject.description}
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Key Features:
                </h4>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                  {activeProject.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-4">
                {activeProject.github && (
                  <a
                    href={activeProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiGithub className="mr-2" />
                    <span>View Code</span>
                  </a>
                )}
                
                {activeProject.live && (
                  <a
                    href={activeProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 