import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { FiBook, FiUsers, FiCode, FiHeart } from 'react-icons/fi';
import React from 'react';

// Define the activity item type
interface ActivityItem {
  id: number;
  type: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  date: string;
  icon: React.ReactNode;
}

// Experience and education data
const experiences: ActivityItem[] = [
  {
    id: 1,
    type: 'education',
    title: 'Bachelor of Technology',
    organization: 'Lovely Professional University',
    location: 'Phagwara, Punjab',
    description: 'Computer Science and Engineering; CGPA: 7.12',
    date: 'Sep 2022 - Present',
    icon: <FiBook />
  },
  {
    id: 2,
    type: 'education',
    title: 'Intermediate',
    organization: "St. Xavier's High School",
    location: 'Azamgarh, Uttar Pradesh',
    description: 'PCM; Percentage: 90.6%',
    date: 'Apr 2020 - Mar 2021',
    icon: <FiBook />
  },
  {
    id: 3,
    type: 'education',
    title: 'Matriculation',
    organization: "St. Xavier's High School",
    location: 'Azamgarh, Uttar Pradesh',
    description: 'Percentage: 87%',
    date: 'Apr 2018 - Mar 2019',
    icon: <FiBook />
  }
];

const coCurricularActivities: ActivityItem[] = [
  {
    id: 4,
    type: 'co-curricular',
    title: 'Hackathon Participation',
    organization: 'Dr. Code Drive Hackathon',
    location: '',
    description: 'Developed a lead-generation website that automatically sends emails to accounts with the highest leads.',
    date: 'Mar 2025',
    icon: <FiCode />
  },
  {
    id: 5,
    type: 'co-curricular',
    title: 'Team Lead',
    organization: 'Hackathon',
    location: '',
    description: 'Lead a team of 3 members to develop a sports networking platform.',
    date: 'Oct 2024',
    icon: <FiUsers />
  },
  {
    id: 6,
    type: 'co-curricular',
    title: 'Volunteer',
    organization: 'Sudeeksha Nai Raah Foundation',
    location: '',
    description: 'Volunteered teaching underprivileged children, adapted methods to diverse learning needs, developed communication skills relevant to technical presentations.',
    date: 'Jun 2023',
    icon: <FiHeart />
  }
];

const extraCurricularActivities: ActivityItem[] = [
  // Empty array since we moved the volunteer work to co-curricular
];

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState('education');

  // Combine all items for rendering based on the active tab
  const getItemsToRender = (): ActivityItem[] => {
    switch (activeTab) {
      case 'education':
        return experiences;
      case 'co-curricular':
        return coCurricularActivities;
      case 'extra-curricular':
        return extraCurricularActivities;
      default:
        return experiences;
    }
  };

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education & Activities" 
          subtitle="My educational background, professional journey, and activities."
          centered
        />
        
        {/* Tab navigation */}
        <div className="flex flex-wrap justify-center mt-8 mb-12">
          <button
            onClick={() => setActiveTab('education')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
              activeTab === 'education'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('co-curricular')}
            className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
              activeTab === 'co-curricular'
                ? 'bg-primary-500 text-white'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
          >
            Co-Curricular Activities
          </button>
          {extraCurricularActivities.length > 0 && (
            <button
              onClick={() => setActiveTab('extra-curricular')}
              className={`px-4 py-2 mx-2 mb-2 rounded-full transition-colors ${
                activeTab === 'extra-curricular'
                  ? 'bg-primary-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Extra-Curricular Activities
            </button>
          )}
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-700" />
          
          {/* Timeline items */}
          <div className="space-y-12">
            {getItemsToRender().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                } items-center md:items-start`}
              >
                {/* Timeline circle and icon */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-white">
                  {item.icon}
                </div>
                
                {/* Content */}
                <div className={`bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-full md:w-5/12 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-6' : 'md:ml-6'
                }`}>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                      {item.date}
                    </span>
                  </div>
                  
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-1">
                    {item.organization}
                  </p>
                  
                  {item.location && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {item.location}
                    </p>
                  )}
                  
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 