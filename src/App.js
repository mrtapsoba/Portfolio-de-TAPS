import React, { createContext, useState, useContext, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaGraduationCap, FaLaptopCode, FaTrophy, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

// Contexte de thème
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
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
  const { darkMode } = useTheme();

  return (
      <div className={`flex flex-col min-h-screen ${darkMode ? 'dark' : ''} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <header className="bg-blue-700 dark:bg-blue-900 text-white p-4 sticky top-0 z-10">
          <nav className="container mx-auto flex justify-between items-center">
            <a href="#home" className="text-2xl font-bold">TAPS</a>
            <ul className="flex space-x-4">
              <li><a href="#home" className="hover:text-blue-200">Accueil</a></li>
              <li><a href="#about" className="hover:text-blue-200">À propos</a></li>
              <li><a href="#experience" className="hover:text-blue-200">Expérience</a></li>
              <li><a href="#skills" className="hover:text-blue-200">Compétences</a></li>
              <li><a href="#projects" className="hover:text-blue-200">Projets</a></li>
              <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
            </ul>
            <ThemeToggle />
          </nav>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          <Section id="home">
            <div className="flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left">
              <motion.img
                src="../assets/taps_profile.jpg"
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
                <p className="text-2xl mb-4">Data Scientist | Développeur Web et Mobile | Ingénieur Logiciel</p>
                <p className="text-xl mb-8 max-w-2xl">
                  Passionné par l'analyse de données et les solutions innovantes, je souhaite
                  contribuer à des projets stratégiques en tant que Data Analyst, en exploitant mes
                  compétences en machine learning, visualisation de données et analyse prédictive
                  pour anticiper les tendances et apporter une valeur ajoutée aux décisions
                  d'entreprise.
                </p>
                <div className="flex justify-center md:justify-start space-x-4">
                  <a href="#contact" className="bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300">
                    Me contacter
                  </a>
                  <a href="#projects" className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300">
                    Voir mes projets
                  </a>
                </div>
              </motion.div>
            </div>
          </Section>

          <Section id="about">
            <h2 className="text-3xl font-bold mb-6">À propos de moi</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaGraduationCap className="mr-2" /> Formation
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">Microsoft Certified: Power BI Data Analyst Associate</p>
                    <p>Microsoft Learn, 2024</p>
                  </li>
                  <li>
                    <p className="font-semibold">Master en Science de données</p>
                    <p>ECOLE SUPÉRIEURE D'INFORMATIQUE, 2021 - 2023</p>
                  </li>
                  <li>
                    <p className="font-semibold">Licence en Ingénierie des Systèmes d'Information</p>
                    <p>ECOLE SUPÉRIEURE D'INFORMATIQUE, 2018 - 2021</p>
                  </li>
                  <li>
                    <p className="font-semibold">Python full stack</p>
                    <p>Sira Labs, 2021</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <FaLaptopCode className="mr-2" /> Compétences clés
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>Analyse de données et Machine Learning avec Python</li>
                  <li>Développement web (React, Laravel, Django)</li>
                  <li>Développement mobile (Flutter)</li>
                  <li>Visualisation de données (Power BI, Streamlit)</li>
                  <li>Gestion de bases de données (SQL, NoSQL)</li>
                  <li>Gestion de projet informatique</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="experience">
            <h2 className="text-3xl font-bold mb-6">Expérience professionnelle</h2>
            <div className="space-y-6">
              <ExperienceItem 
                title="Formateur Power BI – PL-300 et PL-900"
                company="Box Africa"
                period="Décembre 2024"
                description="Animation d'une formation pratique de 4 jours sur l'utilisation de Power BI pour l'analytique de données et la création de rapports interactifs. Préparation aux certifications PL-300 et PL-900."
              />
              <ExperienceItem 
                title="Développeur Web et Data Scientist"
                company="ProsTech"
                period="Avril 2024 - En cours"
                description="Conception et développement d'une application de gestion et d'aide à la migration vers le Canada. Mise en place d'un système de recommandation intelligent et analyse de données pour améliorer les performances de l'application."
              />
              <ExperienceItem 
                title="Data Scientist"
                company="WASCAL"
                period="Février 2024 - Juillet 2024"
                description="Analyse des migrations de la population Burkinabé suite au conflit et aux changements climatiques. Développement d'un modèle AI de prédiction du flux migratoire et d'un outil de prise de décision sur conflit, migration et sécurité alimentaire."
              />
              <ExperienceItem 
                title="Data Scientist"
                company="WASCAL"
                period="Juillet 2023 - Janvier 2024"
                description="Collecte et préparation des données météorologiques. Analyse des données pour une meilleure compréhension de la météo en Afrique de l'Ouest. Développement d'un système de prédiction de la température utilisant le Machine Learning et le Deep Learning."
              />
            </div>
          </Section>

          <Section id="skills">
            <h2 className="text-3xl font-bold mb-6">Compétences techniques</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">Langages de programmation</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBar skill="Python" level={90} />
                  <SkillBar skill="JavaScript" level={85} />
                  <SkillBar skill="PHP" level={80} />
                  <SkillBar skill="Dart" level={85} />
                  <SkillBar skill="SQL" level={85} />
                  <SkillBar skill="R" level={75} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Frameworks et outils</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBar skill="React" level={80} />
                  <SkillBar skill="Laravel" level={85} />
                  <SkillBar skill="Flutter" level={90} />
                  <SkillBar skill="Django" level={75} />
                  <SkillBar skill="Power BI" level={95} />
                  <SkillBar skill="Streamlit" level={85} />
                </div>
              </div>
            </div>
          </Section>

          <Section id="projects">
            <h2 className="text-3xl font-bold mb-6">Projets réalisés</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Faso Migration"
                description="Plateforme web d'analyse du flux migratoire au Burkina Faso et de prévision des migrations futures pour une meilleure prise de décision."
                technologies={["Python", "Jupyter Notebook", "Scikit-learn", "Streamlit"]}
              />
              <ProjectCard
                title="Climat Model"
                description="Collecte, préparation et analyse de données météorologiques. Développement de modèles IA pour la complétion de données manquantes et la prédiction météorologique."
                technologies={["Python", "Matplotlib", "Seaborn", "Scikit-learn", "TensorFlow", "Keras"]}
              />
              <ProjectCard
                title="RifkaStore"
                description="Application web et mobile de e-commerce inspirée du Grand Marché de Ouagadougou."
                technologies={["HTML", "CSS", "Uikit", "PHP", "Flutter", "MySQL"]}
              />
              <ProjectCard
                title="Reemix Play"
                description="Application mobile de streaming de musique et vidéo avec fonctionnalités sociales."
                technologies={["Dart", "Flutter", "MySQL"]}
                link="https://github.com/mrtapsoba/reemix_play"
              />
              <ProjectCard
                title="EventBook"
                description="Application mobile de suivi, partage et publication d'événements."
                technologies={["Dart", "Flutter", "MySQL"]}
                link="https://github.com/mrtapsoba/eventbook-v1"
              />
              <ProjectCard
                title="Bon contact"
                description="Réseau social professionnel mobile avec messagerie instantanée et partage d'opportunités."
                technologies={["Dart", "Flutter", "Firebase"]}
                link="https://bit.ly/3VTOmdI"
              />
            </div>
          </Section>

          <Section id="contact">
            <h2 className="text-3xl font-bold mb-6">Contact</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Informations de contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <FaMapMarkerAlt className="mr-2" />
                    <span>Ouagadougou, Burkina Faso</span>
                  </li>
                  <li className="flex items-center">
                    <FaPhoneAlt className="mr-2" />
                    <span>+226 56 90 66 66</span>
                  </li>
                  <li className="flex items-center">
                    <FaEnvelope className="mr-2" />
                    <span>ktapsoba80@gmail.com</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <h3 className="text-xl font-semibold mb-4">Retrouvez-moi sur les réseaux sociaux</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/abdoul-kader-tapsoba-32b193196" className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                      <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com/mrtapsoba" className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300">
                      <FaGithub size={24} />
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Envoyez-moi un message</h3>
                <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nom</label>
                    <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
                    <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600" required />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
                    <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600" required></textarea>
                  </div>
                  <button type="submit" className="w-full bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300">
                    Envoyer
                  </button>
                </form>
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

const ExperienceItem = ({ title, company, period, description }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6"
    whileHover={{ scale: 1.03 }}
    transition={{ duration: 0.3 }}
  >
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 dark:text-gray-400 mb-2">{company} | {period}</p>
    <p>{description}</p>
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

const ProjectCard = ({ title, description, technologies, link }) => (
  <motion.div 
    className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3 }}
  >
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm">
            {tech}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
          Voir le projet
        </a>
      )}
    </div>
  </motion.div>
);

const PortfolioWithTheme = () => (
  <ThemeProvider>
    <Portfolio />
  </ThemeProvider>
);

export default PortfolioWithTheme;

