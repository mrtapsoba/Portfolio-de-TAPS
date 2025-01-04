import React from 'react';
import { motion } from 'framer-motion';
import weatherAppImage from '../assets/weather-app.jpg';
import canadaAppImage from '../assets/canada-app.jpg';
import powerBIImage from '../assets/power-bi.jpg';

function PortfolioItem({ title, description, technologies, image }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const projects = [
    {
      title: "Plateforme de visualisation de données météo",
      description: "Une application Streamlit pour visualiser et analyser des données météorologiques en temps réel.",
      technologies: ["Python", "Streamlit", "Pandas", "Plotly"],
      image: weatherAppImage
    },
    {
      title: "Application d'aide à la migration au Canada",
      description: "Une application mobile pour guider les utilisateurs dans leur processus de migration au Canada.",
      technologies: ["Flutter", "Dart", "Firebase"],
      image: canadaAppImage
    },
    {
      title: "Formations Power BI",
      description: "Séries de formations sur Power BI, couvrant les certifications PL-900 et PL-300.",
      technologies: ["Power BI", "DAX", "M Language"],
      image: powerBIImage
    }
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <PortfolioItem key={index} {...project} />
        ))}
      </div>
    </motion.div>
  );
}

export default Portfolio;

