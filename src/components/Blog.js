import React from 'react';
import { motion } from 'framer-motion';

function BlogPost({ title, excerpt, date }) {
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 mb-6"
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{date}</p>
      <p>{excerpt}</p>
      <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 inline-block">Lire la suite</a>
    </motion.div>
  );
}

function Blog() {
  const posts = [
    {
      title: "L'avenir de l'IA dans l'analyse de données",
      excerpt: "Explorons comment l'intelligence artificielle transforme le domaine de l'analyse de données...",
      date: "15 juin 2023"
    },
    {
      title: "Optimiser les performances de vos applications Flutter",
      excerpt: "Découvrez les meilleures pratiques pour améliorer les performances de vos apps Flutter...",
      date: "2 mai 2023"
    },
    {
      title: "Power BI vs Tableau : Quelle solution choisir ?",
      excerpt: "Une comparaison détaillée des deux outils de visualisation de données les plus populaires...",
      date: "18 avril 2023"
    }
  ];

  return (
    <motion.div 
      className="max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6">Blog</h2>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </motion.div>
  );
}

export default Blog;

