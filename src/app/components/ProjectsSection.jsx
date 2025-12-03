"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

export const projectsData = [
  {
    id: 1,
    title: "DGM California",
    description:
      "A website for a company that provides services for transportation and logistics of dangerous goods",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naman995/dgm-learn-firebase",
    previewUrl: "https://dgm-firebase.vercel.app/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Personal portfolio website for a photographer",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naman995/Arpit_portfolio",
    previewUrl: "https://raattdesign.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description:
      "A conversion-focused, responsive template equipped with essential online store features like product galleries, a shopping cart, and secure checkout, optimized for seamless shopping across all devices",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/naman995/suridhi",
    previewUrl: "https://suridhi.vercel.app/",
  },
  {
    id: 4,
    title: "User Management System",
    description:
      "A comprehensive user management system built with modern DevOps practices",
    detailedDescription:
      "This project demonstrates a complete user management system with automated CI/CD pipelines, containerization, and cloud deployment. The system includes user authentication, role-based access control, and real-time monitoring capabilities.",
    image: "/images/projects/4.png",
    tag: ["All", "Devops"],
    gitUrl: "/",
    previewUrl: "/",
    videoUrl: "", // Add your video URL here
  },
  {
    id: 5,
    title: "3 Tier Architecture Application Deployment",
    description: "End to End 3 tier architecture application deployment",
    detailedDescription:
      "A production-ready React application template with Firebase integration, featuring automated deployment pipelines, container orchestration, and infrastructure as code. This project showcases best practices in DevOps workflows including automated testing, continuous integration, and cloud-native deployment strategies.",
    image: "/images/projects/5.png",
    tag: ["All", "Devops"],
    gitUrl: "/",
    previewUrl: "/",
    videoUrl: "", // Add your video URL here
  },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "A comprehensive full-stack development roadmap project",
  //   detailedDescription:
  //     "This project provides a complete roadmap for full-stack development with DevOps integration. It includes infrastructure automation, containerization with Docker, Kubernetes orchestration, CI/CD pipelines, and monitoring solutions. The project demonstrates end-to-end DevOps practices from development to production deployment.",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Devops"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  //   videoUrl: "", // Add your video URL here
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Devops"
          isSelected={tag === "Devops"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              id={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.tag}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
