"use client";
import React, { useState } from "react";
import { useTheme } from "@/context/ThemeContext";
import { motion } from "framer-motion";
import { FiExternalLink, FiCode, FiSmartphone, FiGlobe } from "react-icons/fi";

const projects = [
  {
    title: "Crampas.ai Website",
    description:
      "AI-driven business information management web app built with React.js and Next.js.",
    link: "https://crampas.ai",
    icon: FiGlobe,
    tech: ["React.js", "Next.js", "AI"],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "MyOrbit App & Web",
    description:
      "Cross-platform app for Telkomsel's MyOrbit service using React Native and React.js.",
    link: "https://myorbit.id",
    icon: FiSmartphone,
    tech: ["React Native", "React.js", "Mobile"],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Private Tutoring Service App",
    description:
      "React Native app with Firebase for booking tutors and authentication.",
    link: "#",
    icon: FiCode,
    tech: ["React Native", "Firebase", "Authentication"],
    color: "from-green-500 to-teal-500",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Projects() {
  const { theme } = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen py-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1
          style={{ marginBottom: "23px", lineHeight: "1.2", paddingBottom: "8px" }}
          className={`text-5xl font-extrabold mb-4 ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400 to-indigo-400 text-transparent bg-clip-text"
              : "bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text"
          }`}
        >
          My Projects
        </h1>
        <div
          className={`h-1 w-32 ${
            theme === "dark"
              ? "bg-gradient-to-r from-cyan-400 to-indigo-400"
              : "bg-gradient-to-r from-blue-600 to-purple-600"
          } rounded-full mb-2`}
        ></div>
        <p
          className={`text-lg ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Explore my latest work and creative solutions
        </p>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => {
          const IconComponent = project.icon;
          return (
            <motion.div
              key={project.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                y: -8,
                transition: { duration: 0.3 },
              }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              className="group relative"
            >
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`block relative overflow-hidden rounded-2xl ${
                  theme === "dark"
                    ? "bg-gray-800/50 border-gray-700"
                    : "bg-white border-gray-200"
                } border backdrop-blur-sm transition-all duration-300 hover:shadow-2xl`}
                whileTap={{ scale: 0.98 }}
              >
                {/* Gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                ></div>

                {/* Content */}
                <div className="relative p-6">
                  {/* Icon and external link */}
                  <div className="flex items-center justify-between mb-4">
                    <motion.div
                      className={`p-3 rounded-xl ${
                        theme === "dark" ? "bg-gray-700" : "bg-gray-100"
                      } group-hover:bg-gradient-to-br group-hover:${
                        project.color
                      } transition-all duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent
                        className={`w-6 h-6 ${
                          theme === "dark"
                            ? "text-gray-300 group-hover:text-white"
                            : "text-gray-600 group-hover:text-white"
                        } transition-colors duration-300`}
                      />
                    </motion.div>
                    <motion.div
                      className={`p-2 rounded-lg ${
                        theme === "dark"
                          ? "text-gray-400 hover:text-cyan-400"
                          : "text-gray-500 hover:text-blue-600"
                      } transition-colors duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h2
                    className={`text-xl font-bold mb-3 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    } group-hover:bg-gradient-to-r group-hover:${
                      project.color
                    } group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300`}
                  >
                    {project.title}
                  </h2>

                  {/* Description */}
                  <p
                    className={`${
                      theme === "dark" ? "text-gray-300" : "text-gray-600"
                    } text-sm leading-relaxed mb-4`}
                  >
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: techIndex * 0.1 }}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          theme === "dark"
                            ? "bg-gray-700 text-gray-300"
                            : "bg-gray-100 text-gray-700"
                        } group-hover:bg-gradient-to-r group-hover:${
                          project.color
                        } group-hover:text-white transition-all duration-300`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Animated border */}
                <motion.div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20`}
                  initial={false}
                  animate={{
                    opacity: hoveredIndex === index ? 0.2 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
                    transform:
                      hoveredIndex === index
                        ? "translateX(100%)"
                        : "translateX(-100%)",
                    transition: "transform 0.6s ease-in-out",
                  }}
                />
              </motion.a>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Floating particles background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-2 h-2 ${
              theme === "dark" ? "bg-cyan-400/20" : "bg-blue-400/20"
            } rounded-full`}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
