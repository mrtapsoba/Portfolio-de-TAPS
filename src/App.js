import React, { createContext, useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaGraduationCap, FaLaptopCode, FaTrophy, FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaBars, FaTimes } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import i18n from './i18n';

// Contexte de thème
const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
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
    <motion.button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200"
      whileTap={{ scale: 0.95 }}
      whileHover={{ scale: 1.05 }}
      aria-label={darkMode ? "Activer le mode clair" : "Activer le mode sombre"}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={darkMode ? "moon" : "sun"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {darkMode ? <FaSun className="w-5 h-5" /> : <FaMoon className="w-5 h-5" />}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
};

// Composant de menu mobile
const MobileMenu = ({ isOpen, toggleMenu }) => {
  const { t } = useTranslation();
  return (
    <motion.div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 ${isOpen ? 'block' : 'hidden'}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col h-full justify-center items-center">
        <button onClick={toggleMenu} className="absolute top-4 right-4 text-white">
          <FaTimes size={24} />
        </button>
        <a
          href="#home"
          className="text-white text-2xl my-4"
          onClick={toggleMenu}
        >
          {t('header.home')}
        </a>
        <a
          href="#about"
          className="text-white text-2xl my-4"
          onClick={toggleMenu}
        >
          {t('header.about')}
        </a>
        <a
          href="#experience"
          className="text-white text-2xl my-4"
          onClick={toggleMenu}
        >
          {t('header.experience')}
        </a>
        <a
          href="#skills"
          className="text-white text-2xl my-4"
          onClick={toggleMenu}
        >
          {t('header.skills')}
        </a>
        <a
          href="#projects"
          className="text-white text-2xl my-4"
          onClick={toggleMenu}
        >
          {t('header.projects')}
        </a>
        <a
          href="#contact"
          className="text-white text-2xl my-4"
          onClick={toggleMenu}
        >
          {t('header.contact')}
        </a>
      </div>
    </motion.div>
  );
};

// Composant principal
function Portfolio() {
  const { t } = useTranslation();
  const { darkMode } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300 min-h-screen">
        <header className="bg-blue-700 dark:bg-blue-900 text-white p-4 sticky top-0 z-10 transition-colors duration-300">
          <nav className="container mx-auto flex justify-between items-center">
            <motion.a 
              href="/" 
              className="text-2xl font-bold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              TAPS.
            </motion.a>
            <div className="hidden md:flex space-x-4">
              <div className="hidden md:flex space-x-4">
                <motion.a
                  href="#home"
                  className="hover:text-blue-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('header.home')}
                </motion.a>
                <motion.a
                  href="#about"
                  className="hover:text-blue-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('header.about')}
                </motion.a>
                <motion.a
                  href="#experience"
                  className="hover:text-blue-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('header.experience')}
                </motion.a>
                <motion.a
                  href="#skills"
                  className="hover:text-blue-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('header.skills')}
                </motion.a>
                <motion.a
                  href="#projects"
                  className="hover:text-blue-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('header.projects')}
                </motion.a>
                <motion.a
                  href="#contact"
                  className="hover:text-blue-200 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('header.contact')}
                </motion.a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <select
                value={localStorage.getItem('language') || 'en'}
                onChange={(e) => changeLanguage(e.target.value)}
                className="bg-blue-600 text-white px-2 py-1 rounded"
              >
                <option value="en">EN</option>
                <option value="fr">FR</option>
                <option value="es">ES</option>
                <option value="ru">RU</option>
                <option value="ge">GE</option>
              </select>
              <button className="md:hidden" onClick={toggleMenu}>
                <FaBars size={24} />
              </button>
            </div>
          </nav>
        </header>

        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} list={[t('header.home'), t('header.about'), t('header.experience'), t('header.skills'), t('header.projects'), t('header.contact')]} />

        <main className="flex-grow container mx-auto px-4 py-8">
          <Section  id="home">
            <div className="flex flex-col md:flex-row items-center justify-center h-full text-center md:text-left mt-5">
              <motion.img
                src="../assets/taps_profile.jpg"
                alt="TAPSOBA Abdoul Kader"
                className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover mb-8 md:mr-8"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.h1 
                  className="text-3xl md:text-5xl font-bold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {t('home.title')}
                </motion.h1>
                <motion.p 
                  className="text-xl md:text-2xl mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {t('home.subtitle')}
                </motion.p>
                <motion.p 
                  className="text-base md:text-xl mb-8 max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {t('home.description')}
                </motion.p>
                <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                  <motion.a
                    href="#contact"
                    className="bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('home.contactButton')}
                  </motion.a>
                  <motion.a
                    href="#projects"
                    className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t('home.projectsButton')}
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </Section>

          <Section id="about">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('about.title')}
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaGraduationCap className="mr-2" /> {t('about.education.title')}
                </h3>
                <ul className="space-y-4">
                  <li>
                    <p className="font-semibold">{t('about.education.certifications.one.title')}</p>
                    <p>{t('about.education.certifications.one.institution')}, {t('about.education.certifications.one.year')}</p>
                  </li>
                  <li>
                    <p className="font-semibold">{t('about.education.certifications.two.title')}</p>
                    <p>{t('about.education.certifications.two.institution')}, {t('about.education.certifications.two.period')}</p>
                  </li>
                  <li>
                    <p className="font-semibold">{t('about.education.certifications.three.title')}</p>
                    <p>{t('about.education.certifications.three.institution')}, {t('about.education.certifications.three.period')}</p>
                  </li>
                  <li>
                    <p className="font-semibold">{t('about.education.certifications.four.title')}</p>
                    <p>{t('about.education.certifications.four.institution')}, {t('about.education.certifications.four.year')}</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <FaLaptopCode className="mr-2" /> {t('about.skills.title')}
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>{t('about.skills.list.one')}</li>
                  <li>{t('about.skills.list.two')}</li>
                  <li>{t('about.skills.list.three')}</li>
                  <li>{t('about.skills.list.four')}</li>
                  <li>{t('about.skills.list.five')}</li>
                  <li>{t('about.skills.list.six')}</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section id="experience">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('experience.title')}
            </motion.h2>
            <div className="space-y-6">
              <ExperienceItem 
                title={t('experience.jobs.one.title')}
                company={t('experience.jobs.one.company')}
                period={t('experience.jobs.one.period')}
                description={t('experience.jobs.one.description')}
              />
              <ExperienceItem 
                title={t('experience.jobs.two.title')}
                company={t('experience.jobs.two.company')}
                period={t('experience.jobs.two.period')}
                description={t('experience.jobs.two.description')}
              />
              <ExperienceItem 
                title={t('experience.jobs.three.title')}
                company={t('experience.jobs.three.company')}
                period={t('experience.jobs.three.period')}
                description={t('experience.jobs.three.description')}
              />
              <ExperienceItem 
                title={t('experience.jobs.four.title')}
                company={t('experience.jobs.four.company')}
                period={t('experience.jobs.four.period')}
                description={t('experience.jobs.four.description')}
              />
            </div>
          </Section>

          <Section id="skills">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('skills.title')}
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('skills.programmingLanguages.title')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBar skill={t('skills.programmingLanguages.skills.one.name')} level={t('skills.programmingLanguages.skills.one.level')} />
                  <SkillBar skill={t('skills.programmingLanguages.skills.two.name')} level={t('skills.programmingLanguages.skills.two.level')} />
                  <SkillBar skill={t('skills.programmingLanguages.skills.three.name')} level={t('skills.programmingLanguages.skills.three.level')} />
                  <SkillBar skill={t('skills.programmingLanguages.skills.four.name')} level={t('skills.programmingLanguages.skills.four.level')} />
                  <SkillBar skill={t('skills.programmingLanguages.skills.five.name')} level={t('skills.programmingLanguages.skills.five.level')} />
                  <SkillBar skill={t('skills.programmingLanguages.skills.six.name')} level={t('skills.programmingLanguages.skills.six.level')} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">{t('skills.frameworksAndTools.title')}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <SkillBar skill={t('skills.frameworksAndTools.skills.one.name')} level={t('skills.frameworksAndTools.skills.one.level')} />
                  <SkillBar skill={t('skills.frameworksAndTools.skills.two.name')} level={t('skills.frameworksAndTools.skills.two.level')} />
                  <SkillBar skill={t('skills.frameworksAndTools.skills.three.name')} level={t('skills.frameworksAndTools.skills.three.level')} />
                  <SkillBar skill={t('skills.frameworksAndTools.skills.four.name')} level={t('skills.frameworksAndTools.skills.four.level')} />
                  <SkillBar skill={t('skills.frameworksAndTools.skills.five.name')} level={t('skills.frameworksAndTools.skills.five.level')} />
                  <SkillBar skill={t('skills.frameworksAndTools.skills.six.name')} level={t('skills.frameworksAndTools.skills.six.level')} />
                </div>
              </div>
            </div>
          </Section>

          <Section id="projects">
            <motion.h2
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {t('projects.title')}
            </motion.h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title={t('projects.list.one.title')}
                description={t('projects.list.one.description')}
                technologies={t('projects.list.one.technologies', { returnObjects: true })}
              />
              <ProjectCard
                title={t('projects.list.two.title')}
                description={t('projects.list.two.description')}
                technologies={t('projects.list.two.technologies', { returnObjects: true })}
              />
              <ProjectCard
                title={t('projects.list.three.title')}
                description={t('projects.list.three.description')}
                technologies={t('projects.list.three.technologies', { returnObjects: true })}
              />
              <ProjectCard
                title={t('projects.list.four.title')}
                description={t('projects.list.four.description')}
                technologies={t('projects.list.four.technologies', { returnObjects: true })}
                link={t('projects.list.four.link')}
              />
              <ProjectCard
                title={t('projects.list.five.title')}
                description={t('projects.list.five.description')}
                technologies={t('projects.list.five.technologies', { returnObjects: true })}
                link={t('projects.list.five.link')}
              />
              <ProjectCard
                title={t('projects.list.six.title')}
                description={t('projects.list.six.description')}
                technologies={t('projects.list.six.technologies', { returnObjects: true })}
                link={t('projects.list.six.link')}
              />
            </div>
          </Section>

          <Section id="contact">
          <motion.h2
            className="text-2xl md:text-3xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {t('contact.title')}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact.info.title')}</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>{t('contact.info.address')}</span>
                </li>
                <li className="flex items-center">
                  <FaPhoneAlt className="mr-2" />
                  <span>{t('contact.info.phone')}</span>
                </li>
                <li className="flex items-center">
                  <FaEnvelope className="mr-2" />
                  <span>{t('contact.info.email')}</span>
                </li>
              </ul>
              <div className="mt-4">
                <h3 className="text-xl font-semibold mb-4">{t('contact.social.title')}</h3>
                <div className="flex space-x-4">
                  <a
                    href={t('contact.social.linkedin')}
                    className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    <FaLinkedin size={24} />
                  </a>
                  <a
                    href={t('contact.social.github')}
                    className="text-blue-700 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300"
                  >
                    <FaGithub size={24} />
                  </a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">{t('contact.form.title')}</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.form.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.form.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 dark:bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-600 dark:hover:bg-blue-500 transition duration-300"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>
        </Section>
        </main>

        <footer className="bg-blue-700 dark:bg-blue-900 text-white p-4 transition-colors duration-300">
          <div className="container mx-auto text-center">
            {t('footer.rights')}
          </div>
        </footer>
      </div>
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
  <motion.div 
    className="mb-4"
    initial={{ width: 0 }}
    animate={{ width: "100%" }}
    transition={{ duration: 0.5 }}
  >
    <div className="flex justify-between mb-1">
      <span className="text-base font-medium text-blue-700 dark:text-blue-300">{skill}</span>
      <span className="text-sm font-medium text-blue-700 dark:text-blue-300">{level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <motion.div 
        className="bg-blue-600 h-2.5 rounded-full" 
        initial={{ width: 0 }}
        animate={{ width: `${level}%` }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
    </div>
  </motion.div>
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
          <motion.span 
            key={index} 
            className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
      {link && (
        <motion.a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-blue-600 dark:text-blue-400 hover:underline"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Voir le projet
        </motion.a>
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

