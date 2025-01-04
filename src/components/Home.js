import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg'; // Assurez-vous d'avoir cette image dans votre dossier assets

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left">
      <motion.img
        src={profileImage}
        alt="TAPSOBA Abdoul Kader"
        className="rounded-full w-64 h-64 object-cover mb-8 md:mr-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold mb-4">TAPSOBA Abdoul Kader</h1>
        <p className="text-2xl mb-8">Data Scientist | Développeur Web | Ingénieur Logiciel</p>
        <p className="text-xl mb-8 max-w-2xl">
          Passionné par l'innovation technologique et l'analyse de données, 
          je transforme des idées complexes en solutions concrètes et efficaces.
        </p>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/contact" className="bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300">
            Travaillons ensemble
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;

