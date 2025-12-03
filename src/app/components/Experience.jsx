"use client";
import React from "react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import {
  ArrowDownTrayIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const experiences = [
  {
    id: 1,
    role: "DevOps Engineer",
    company: "CargoFlash Infotech Pvt. Ltd.",
    location: "Gurugram, India",
    startDate: "Feb 2024",
    endDate: "May 2025",
    description: [
      "The company required a reliable and scalable solution for managing warehousing and reservations for airline cargo, delivered as a SaaS application.",
      "Implemented Docker containerization, orchestrated deployments using Kubernetes on AWS infrastructure, and built robust CI/CD pipelines using Jenkins for automated testing and release workflows. Coordinated application releases on test and staging servers, optimising deployment speed and reliability.",
      "Reduced manual deployment errors by 75%, accelerated release cycles from weekly to daily, and improved platform stability and scalability for client airline partners.",
    ],
    techStack: [
      "Docker",
      "Kubernetes",
      "Helm",
      "Jenkins",
      "Linux",
      "Shell",
      "Prometheus",
      "Grafana",
      "AWS",
      "Terraform",
    ],
    experienceLetter: "/exp/Cargoflash.pdf", // Add your experience letter path here
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Misui India Pvt. Ltd.",
    location: "Bengalore , India",
    startDate: "Jun 2022",
    endDate: "Mar 2022",
    description: [
      "Developed responsive and reusable UI components in React, collaborated with the team to implement new features, and optimized the frontend codebase during my internship",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "React", "Git", "GitHub"],
    experienceLetter: "/exp/Misui.pdf",
  },
  {
    id: 3,
    role: "Web Developer Intern",
    company: "TES Pvt. Ltd.",
    location: "Bengalore , India",
    startDate: "Dec 2021",
    endDate: "Jan 2022",
    description: [
      "Developed and optimized a fully responsive landing page, ensuring fast load time and smooth user experience.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
    experienceLetter: "/exp/TES.pdf", // Add your experience letter path here
  },
];

const ExperienceCard = ({ experience }) => {
  const handleView = () => {
    if (experience.experienceLetter) {
      window.open(experience.experienceLetter, "_blank");
    }
  };

  const handleDownload = () => {
    if (experience.experienceLetter) {
      const link = document.createElement("a");
      link.href = experience.experienceLetter;
      link.download = `${experience.company}-Experience-Letter.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-xl bg-gradient-to-br from-[#181818] to-[#252525] border border-[#333] hover:border-primary-500 transition-all duration-300 p-5 md:p-6 flex flex-col gap-3 hover:shadow-lg hover:shadow-primary-500/20"
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <h3 className="text-xl md:text-2xl font-semibold text-white">
          {experience.role}
        </h3>
        <p className="text-sm text-gray-300">
          {experience.startDate} - {experience.endDate}
        </p>
      </div>
      <p className="text-sm md:text-base text-gray-300">
        <span className="font-medium text-white">{experience.company}</span>
        {experience.location && ` • ${experience.location}`}
      </p>
      <ul className="list-disc list-inside space-y-1 text-sm md:text-base text-gray-300">
        {experience.description.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
      {experience.techStack && experience.techStack.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {experience.techStack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs md:text-sm rounded-full bg-[#111] border border-[#333] text-gray-200"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
      {experience.experienceLetter && (
        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-[#333]">
          <DocumentTextIcon className="h-5 w-5 text-gray-400" />
          <span className="text-sm text-gray-400 flex-1">
            Experience Letter
          </span>
          <div className="flex gap-2">
            <button
              onClick={handleView}
              className="flex items-center gap-2 px-3 py-1.5 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 text-xs md:text-sm"
            >
              <EyeIcon className="h-4 w-4" />
              View
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-3 py-1.5 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors duration-300 text-xs md:text-sm"
            >
              <ArrowDownTrayIcon className="h-4 w-4" />
              Download
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="experience" className="text-white py-8 px-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Work Experience
      </h2>
      <div ref={ref} className="space-y-6 md:space-y-8 max-w-4xl mx-auto">
        {experiences.map((experience, index) => (
          <motion.div
            key={experience.id}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ExperienceCard experience={experience} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
