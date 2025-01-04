import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { motion } from 'framer-motion';
import { ThemeProvider } from '../contexts/ThemeContext';

function Layout({ children }) {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen ">
        <header className="bg-blue-700 dark:bg-blue-900 text-white p-4">
          <nav className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold">TAPSOBA Abdoul Kader</Link>
            <ul className="flex space-x-4">
              <li><Link to="/" className="hover:text-blue-200">Accueil</Link></li>
              <li><Link to="/about" className="hover:text-blue-200">À propos</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-200">Portfolio</Link></li>
              <li><Link to="/skills" className="hover:text-blue-200">Compétences</Link></li>
              <li><Link to="/blog" className="hover:text-blue-200">Blog</Link></li>
              <li><Link to="/contact" className="hover:text-blue-200">Contact</Link></li>
            </ul>
            <ThemeToggle />
          </nav>
        </header>
        <motion.main 
          className="flex-grow container mx-auto px-4 py-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
        <footer className="bg-blue-700 dark:bg-blue-900 text-white p-4">
          <div className="container mx-auto text-center">
            © 2023 TAPSOBA Abdoul Kader. Tous droits réservés.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default Layout;

