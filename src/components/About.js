import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaTrophy } from 'react-icons/fa';

function About() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
      <p className="mb-4">
        Titulaire d'un Master de l'Université Nazi Boni, je suis un professionnel polyvalent 
        spécialisé dans la data science, le développement web et l'ingénierie logicielle.
      </p>
      <motion.div variants={sectionVariants}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <FaGraduationCap className="mr-2" /> Expérience académique
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Master en [Votre spécialité] - Université Nazi Boni</li>
          {/* Ajoutez d'autres détails sur votre parcours académique */}
        </ul>
      </motion.div>
      <motion.div variants={sectionVariants}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <FaLaptopCode className="mr-2" /> Compétences clés
        </h3>
        <ul className="list-disc list-inside mb-4">
          <li>Python pour l'analyse de données et le machine learning</li>
          <li>Développement d'applications mobiles avec Flutter</li>
          <li>Visualisation de données avec Power BI</li>
          <li>Intelligence Artificielle et apprentissage automatique</li>
          <li>Développement web avec Laravel et React</li>
        </ul>
      </motion.div>
      <motion.div variants={sectionVariants}>
        <h3 className="text-2xl font-semibold mb-4 flex items-center">
          <FaTrophy className="mr-2" /> Réalisations
        </h3>
        <ul className="list-disc list-inside">
          <li>Projets de recherche en [votre domaine de recherche]</li>
          <li>Formations dispensées sur Power BI (PL-900 et PL-300)</li>
          {/* Ajoutez d'autres réalisations importantes */}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default About;

