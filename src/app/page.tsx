'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaPython, FaJava, FaJs, FaHtml5, FaBootstrap, FaAws, FaTasks, FaChartBar, FaDatabase, FaServer, FaCloud, FaDatabase as FaMongoDB } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { SiTensorflow, SiPandas, SiNumpy, SiScipy, SiScikitlearn, SiKeras, SiDjango, SiJquery, SiMysql, SiPostgresql, SiLeetcode } from 'react-icons/si';
import { TbBrandCpp } from 'react-icons/tb';
import Navigation from '@/components/Navigation';
import Loader from '@/components/Loader';
import Contact from '@/components/Contact';
import InitialLoad from '@/components/InitialLoad';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) {
    return <InitialLoad />;
  }

  return (
    <div suppressHydrationWarning className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navigation />
            <main className="min-h-screen text-gray-900 dark:text-gray-100">
              {/* Hero Section */}
              <section id="home" className="relative h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                  >
                    <div className="mb-8 font-mono text-sm text-gray-500 dark:text-gray-400">
                      <span className="text-blue-600 dark:text-blue-400">//</span>
                      <span>Welcome to my portfolio</span>
                    </div>
                    <motion.h1
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 font-mono"
                    >
                      Praharshitha Piduru
                    </motion.h1>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                      className="text-xl sm:text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-8 font-mono"
                    >
                      <span className="text-blue-600 dark:text-blue-400">const</span> role = <span className="text-yellow-600 dark:text-yellow-400">&quot;Data Analyst &amp; Developer&quot;</span>;
                    </motion.h2>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6, duration: 0.8 }}
                      className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 font-mono"
                    >
                      <span className="text-blue-600 dark:text-blue-400">//</span> Transforming complex data into actionable insights
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.8 }}
                      className="flex flex-wrap justify-center gap-4 sm:gap-6"
                    >
                      <a
                        href="mailto:hi@praharshitha.me"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-mono"
                      >
                        <HiOutlineMail className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>Email</span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/praharshitha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-mono"
                      >
                        <FaLinkedin className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>LinkedIn</span>
                      </a>
                      <a
                        href="https://leetcode.com/praharshitha"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors font-mono"
                      >
                        <SiLeetcode className="w-5 h-5 sm:w-6 sm:h-6" />
                        <span>LeetCode</span>
                      </a>
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="absolute w-96 h-96 -top-48 -left-48 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-xl animate-blob"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute w-96 h-96 -bottom-48 -right-48 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"
                  />
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1, delay: 1.4 }}
                    className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-200 dark:bg-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"
                  />
                </div>
              </section>

              {/* About Section */}
              <section id="about" className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                  >
                    <div className="mb-8 font-mono text-sm text-gray-400">
                      <span className="text-blue-400">//</span>
                      <span>About Me</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-8 text-center font-mono">About Me</h2>
                    <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                      <p className="text-lg text-gray-300 mb-6 font-mono">
                        <span className="text-blue-400">const</span> about = <span className="text-yellow-400">`I&apos;m an experienced Data Analyst with over 3 years of expertise in analysing complex datasets, delivering actionable insights, and driving strategic decision-making. My technical background spans across Python, SQL, and various BI tools, allowing me to effectively bridge the gap between data and business strategy.`</span>;
                      </p>
                      <p className="text-lg text-gray-300 font-mono">
                        <span className="text-blue-400">const</span> location = <span className="text-yellow-400">&quot;St Albans, United Kingdom&quot;</span>;
                      </p>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Skills Section */}
              <section id="skills" className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8 font-mono text-sm text-gray-400">
                      <span className="text-blue-400">//</span>
                      <span>Technical Skills</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-12 text-center font-mono">Technical Skills</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {[
                        {
                          category: "Programming Languages",
                          skills: [
                            { name: "Python", icon: <FaPython className="w-5 h-5" /> },
                            { name: "R", icon: <span className="text-[#276DC3] font-bold">R</span> },
                            { name: "SQL", icon: <FaDatabase className="w-5 h-5" /> },
                            { name: "MDX", icon: <span className="text-[#0074A3] font-bold">MDX</span> },
                            { name: "DAX", icon: <span className="text-[#0074A3] font-bold">DAX</span> },
                            { name: "Java", icon: <FaJava className="w-5 h-5" /> },
                            { name: "C++", icon: <TbBrandCpp className="w-5 h-5" /> },
                            { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
                            { name: "HTML", icon: <FaHtml5 className="w-5 h-5" /> },
                            { name: "Bootstrap", icon: <FaBootstrap className="w-5 h-5" /> }
                          ]
                        },
                        {
                          category: "Frameworks & Libraries",
                          skills: [
                            { name: "Pandas", icon: <SiPandas className="w-5 h-5" /> },
                            { name: "Django", icon: <SiDjango className="w-5 h-5" /> },
                            { name: "jQuery", icon: <SiJquery className="w-5 h-5" /> },
                            { name: "NumPy", icon: <SiNumpy className="w-5 h-5" /> },
                            { name: "SciPy", icon: <SiScipy className="w-5 h-5" /> },
                            { name: "TensorFlow", icon: <SiTensorflow className="w-5 h-5" /> },
                            { name: "Scikit Learn", icon: <SiScikitlearn className="w-5 h-5" /> },
                            { name: "Keras", icon: <SiKeras className="w-5 h-5" /> }
                          ]
                        },
                        {
                          category: "Databases & Cloud",
                          skills: [
                            { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
                            { name: "Postgres", icon: <SiPostgresql className="w-5 h-5" /> },
                            { name: "MongoDB", icon: <FaMongoDB className="w-5 h-5" /> },
                            { name: "Microsoft Azure", icon: <FaCloud className="w-5 h-5" /> },
                            { name: "Oracle Cloud", icon: <FaCloud className="w-5 h-5" /> },
                            { name: "AWS", icon: <FaAws className="w-5 h-5" /> }
                          ]
                        },
                        {
                          category: "Data Warehousing",
                          skills: [
                            { name: "Star Schema", icon: <span className="text-[#0074A3] font-bold">★</span> },
                            { name: "Snowflake", icon: <FaCloud className="w-5 h-5" /> },
                            { name: "OLAP", icon: <span className="text-[#0074A3] font-bold">OLAP</span> },
                            { name: "OLTP", icon: <span className="text-[#0074A3] font-bold">OLTP</span> },
                            { name: "Database Design", icon: <FaDatabase className="w-5 h-5" /> }
                          ]
                        },
                        {
                          category: "Tools & Platforms",
                          skills: [
                            { name: "Power BI", icon: <FaChartBar className="w-5 h-5" /> },
                            { name: "Hadoop", icon: <FaServer className="w-5 h-5" /> }
                          ]
                        },
                        {
                          category: "Methodologies",
                          skills: [
                            { name: "Agile", icon: <FaTasks className="w-5 h-5" /> },
                            { name: "Scrum", icon: <span className="text-[#0074A3] font-bold">S</span> },
                            { name: "Kanban", icon: <span className="text-[#0074A3] font-bold">K</span> },
                            { name: "Waterfall", icon: <span className="text-[#0074A3] font-bold">W</span> }
                          ]
                        }
                      ].map((category, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
                        >
                          <h3 className="text-xl font-semibold mb-4 font-mono text-blue-400">{category.category}</h3>
                          <div className="flex flex-wrap gap-2">
                            {category.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono flex items-center gap-2"
                              >
                                {skill.icon}
                                {skill.name}
                              </span>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Experience Section */}
              <section id="experience" className="py-20 bg-gray-800">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8 font-mono text-sm text-gray-400">
                      <span className="text-blue-400">//</span>
                      <span>Work Experience</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-12 text-center font-mono">Experience</h2>
                    <div className="max-w-4xl mx-auto space-y-12">
                      {/* Current Role */}
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700"
                      >
                        <h3 className="text-2xl font-semibold mb-2 font-mono text-blue-400">Data Analyst</h3>
                        <p className="text-gray-300 mb-4 font-mono">Techno Point Ltd, United Kingdom</p>
                        <p className="text-gray-400 mb-4 font-mono">March 2024 - Present</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 font-mono">
                          <li>Developed user-friendly applications for MTN (South Africa-based telecom) focusing on customer and business functionalities.</li>
                          <li>Collected, cleaned, and analysed large datasets using SQL and Snowflake to support business reporting and ad-hoc analysis.</li>
                          <li>Developed and maintained dashboards using Power BI to visualize KPIs and trends for decision-makers across departments.</li>
                          <li>Automated recurring data extraction and transformation processes using SQL queries and Snowflake tasks.</li>
                        </ul>
                      </motion.div>

                      {/* Previous Role */}
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-900 rounded-lg p-6 shadow-lg border border-gray-700"
                      >
                        <h3 className="text-2xl font-semibold mb-2 font-mono text-blue-400">Data Analyst</h3>
                        <p className="text-gray-300 mb-4 font-mono">Tata Consultancy Services (TCS), Hyderabad, India</p>
                        <p className="text-gray-400 mb-4 font-mono">August 2021 - January 2023</p>
                        <ul className="list-disc list-inside space-y-2 text-gray-300 font-mono">
                          <li>Developed and optimized SQL queries and stored procedures to manage and analyse large datasets for a key client in the insurance domain.</li>
                          <li>Built and maintained dashboards and reports to translate complex data into actionable insights for business stakeholders.</li>
                          <li>Integrated REST APIs to automate data retrieval and improve overall data flow efficiency across multiple systems.</li>
                          <li>Designed and optimized ETL workflows using Python and SQL, improving data pipeline efficiency.</li>
                        </ul>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Projects Section */}
              <section id="projects" className="py-20 bg-gray-900">
                <div className="container mx-auto px-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <div className="mb-8 font-mono text-sm text-gray-400">
                      <span className="text-blue-400">//</span>
                      <span>Featured Projects</span>
                    </div>
                    <h2 className="text-4xl font-bold mb-12 text-center font-mono">Projects</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                      {/* Project 1 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
                      >
                        <h3 className="text-2xl font-semibold mb-4 font-mono text-blue-400">Scammer & Fake User Detection on Twitter</h3>
                        <p className="text-gray-300 mb-4 font-mono">
                          A web application that identifies scammers and abusive content on Twitter using Natural Language Processing.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono">Java</span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono">NLP</span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono">SQL</span>
                        </div>
                      </motion.div>

                      {/* Project 2 */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="bg-gray-800 rounded-lg p-6 shadow-lg border border-gray-700"
                      >
                        <h3 className="text-2xl font-semibold mb-4 font-mono text-blue-400">Handwritten Digit Recognition App</h3>
                        <p className="text-gray-300 mb-4 font-mono">
                          A neural network-based application for recognizing handwritten digits, built with Python and TensorFlow.
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono">Python</span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono">TensorFlow</span>
                          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-md text-sm font-mono">Keras</span>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
              </section>

              {/* Contact Section */}
              <Contact />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
