import React, { createContext, useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaGraduationCap, FaLaptopCode, FaTrophy, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

// Contexte de thème
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    const [darkMode, setDarkMode] = useState(savedMode);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Composant de basculement de thème
const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
    </button>
  );
};

// Composant principal
function Portfolio() {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header className="bg-blue-700 dark:bg-blue-900 text-white p-4 sticky top-0 z-10">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold">TAPSOBA Abdoul Kader</a>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-200">Accueil</a></li>
              <li><a href="#about" className="hover:text-blue-200">À propos</a></li>
              <li><a href="#portfolio" className="hover:text-blue-200">Portfolio</a></li>
              <li><a href="#skills" className="hover:text-blue-200">Compétences</a></li>
              <li><a href="#blog" className="hover:text-blue-200">Blog</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
            <ThemeToggle />
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <Section id="home">
            <div className="flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left">
              <motion.img
                src="/placeholder.svg?height=256&width=256"
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
                <motion.a
                  href="#contact"
                  className="bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Travaillons ensemble
                </motion.a>
              </motion.div>
            </div>
          </Section>

          <Section id="about">
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <p className="mb-4">
              Titulaire d'un Master de l'Université Nazi Boni, je suis un professionnel polyvalent 
              spécialisé dans la data science, le développement web et l'ingénierie logicielle.
            </p>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Expérience académique
              </h3>
              <ul className="list-disc list-inside mb-4">
                <li>Master en Science des Données - Université Nazi Boni</li>
                <li>Licence en Informatique - Université de Ouagadougou</li>
              </ul>
            </div>
            <div>
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
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center">
                <FaTrophy className="mr-2" /> Réalisations
              </h3>
              <ul className="list-disc list-inside">
                <li>Projets de recherche en analyse prédictive des données météorologiques</li>
                <li>Formations dispensées sur Power BI (PL-900 et PL-300)</li>
                <li>Développement d'une application mobile d'aide à la migration au Canada</li>
              </ul>
            </div>
          </Section>

          <Section id="portfolio">
            <h2 className="text-3xl font-bold mb-6">Portfolio</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <PortfolioItem
                title="Plateforme de visualisation de données météo"
                description="Une application Streamlit pour visualiser et analyser des données météorologiques en temps réel."
                technologies={["Python", "Streamlit", "Pandas", "Plotly"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <PortfolioItem
                title="Application d'aide à la migration au Canada"
                description="Une application mobile pour guider les utilisateurs dans leur processus de migration au Canada."
                technologies={["Flutter", "Dart", "Firebase"]}
                image="/placeholder.svg?height=300&width=400"
              />
              <PortfolioItem
                title="Formations Power BI"
                description="Séries de formations sur Power BI, couvrant les certifications PL-900 et PL-300."
                technologies={["Power BI", "DAX", "M Language"]}
                image="/placeholder.svg?height=300&width=400"
              />
            </div>
          </Section>

          <Section id="skills">
            <h2 className="text-3xl font-bold mb-6">Compétences techniques</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <SkillBar skill="Python" level={90} />
              <SkillBar skill="Flutter" level={85} />
              <SkillBar skill="Power BI" level={95} />
              <SkillBar skill="React" level={80} />
              <SkillBar skill="Laravel" level={75} />
              <SkillBar skill="Machine Learning" level={85} />
            </div>
          </Section>

          <Section id="blog">
            <h2 className="text-3xl font-bold mb-6">Blog</h2>
            <div className="space-y-6">
              <BlogPost
                title="L'avenir de l'IA dans l'analyse de données"
                excerpt="Explorons comment l'intelligence artificielle transforme le domaine de l'analyse de données..."
                date="15 juin 2023"
              />
              <BlogPost
                title="Optimiser les performances de vos applications Flutter"
                excerpt="Découvrez les meilleures pratiques pour améliorer les performances de vos apps Flutter..."
                date="2 mai 2023"
              />
              <BlogPost
                title="Power BI vs Tableau : Quelle solution choisir ?"
                excerpt="Une comparaison détaillée des deux outils de visualisation de données les plus populaires..."
                date="18 avril 2023"
              />
            </div>
          </Section>

          <Section id="contact">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <form onSubmit={(e) => e.preventDefault()} className="mb-8">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Nom</label>
                <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" required />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">Message</label>
                <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600" required></textarea>
              </div>
              <button type="submit" className="bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300">
                Envoyer
              </button>
            </form>
            <div>
              <h3 className="text-xl font-semibold mb-4">Retrouvez-moi sur les réseaux sociaux</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"><FaLinkedin size={24} /></a>
                <a href="#" className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"><FaGithub size={24} /></a>
                <a href="#" className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"><FaTwitter size={24} /></a>
              </div>
            </div>
          </Section>
        </main>

        <footer className="bg-blue-700 dark:bg-blue-900 text-white p-4">
          <div className="container mx-auto text-center">
            © 2023 TAPSOBA Abdoul Kader. Tous droits réservés.
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}

// Composants auxiliaires
const Section = ({ id, children }) => (
  <motion.section
    id={id}
    className="mb-16"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.section>
);

const PortfolioItem = ({ title, description, technologies, image }) => (
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

const SkillBar = ({ skill, level }) => (
  <div className="mb-4">
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-blue-300">{skill}</span>
      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${level}%`}}></div>
    </div>
  </div>
);

const BlogPost = ({ title, excerpt, date }) => (
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

export default Portfolio;

