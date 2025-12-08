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
    description:
      "End-to-End Deployment of a Three-Tier Application on AWS EKS Cluster using GitOps",
    detailedDescription: ` Project: End-to-End Deployment of a Three-Tier Application on AWS EKS Cluster using GitOps

Objective: Led the deployment of a three-tier application on AWS EKS, utilizing GitOps with ArgoCD to automate and streamline the delivery process.

Key Achievements:
• Infrastructure Automation:
  Reduced setup time by 30% using Terraform for AWS provisioning.

• CI/CD Pipeline:
  Achieved a 95% deployment success rate with zero downtime by implementing a Jenkins-driven CI/CD pipeline.

• GitOps Integration:
  Cut manual intervention by 80% through ArgoCD integration, ensuring seamless synchronization between GitHub and EKS.

• Monitoring Setup:
  Improved issue detection time by 40% with Prometheus and Grafana, enabling faster response to critical alerts.

Impact: Delivered a 99.9% deployment success rate, improved scalability, and reduced manual efforts by 90%, significantly enhancing operational efficiency and system reliability.`,
    image: "/project/5-1.png",
    tag: ["All", "Devops"],
    gitUrl: "/",
    previewUrl: "/",
    videoUrl: "/video/CICD project.mp4", // Add your video URL here
    projectImages: [
      "/project/5-1.png",
      "/project/5-2.png",
      "/project/5-3.png",
      "/project/5-4.png",
    ], // Add image URLs here, e.g., ["/images/projects/5-1.png", "/images/projects/5-2.png"]
  },
  {
    id: 6,
    title: "2 tier-python application",
    description: "Containerization of a Two-Tier Application using Docker, Docker Compose, and Image Scanning with Docker Scout",
    detailedDescription: `Upon completion of this project, learners can add the following description to their resumes:

Objective: Containerized a two-tier application using Docker and managed deployment with Docker Compose.

Key Achievements:

• Created and managed Docker images, optimizing container performance.

• Conducted vulnerability scanning with Docker Scout to enhance security.

• Improved understanding of container networking and Docker security best practices.

Impact: Streamlined application deployment, bolstered security, and deepened containerization expertise.`,
    image: "/project/6-1.png",
    tag: ["All", "Devops"],
    gitUrl: "/",
    previewUrl: "/",
    videoUrl: "",
    projectImages: ["/project/6-1.png"], // Add image URLs here, e.g., ["/images/projects/5-1.png", "/images/projects/5-2.png"]
  },
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
