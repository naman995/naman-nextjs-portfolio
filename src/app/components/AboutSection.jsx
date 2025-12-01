"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="font-semibold">Programming &amp; Scripting</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Python</li>
            <li>Bash</li>
            <li>HTML</li>
            <li>CSS3</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Version Control &amp; CI/CD</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Git</li>
            <li>GitHub</li>
            <li>Jenkins</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">
            Containerization &amp; Orchestration
          </h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Docker</li>
            <li>Kubernetes</li>
            <li>Helm</li>
            <li>ECS</li>
            <li>EKS</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Cloud Platforms (AWS)</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>VPC</li>
            <li>EC2</li>
            <li>IAM</li>
            <li>S3</li>
            <li>CloudFront</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">
            Infrastructure as Code (IaC) &amp; Configuration Management
          </h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Terraform</li>
            <li>Ansible</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold">Monitoring &amp; Logging</h4>
          <ul className="list-disc pl-5 mt-2 space-y-1">
            <li>Prometheus</li>
            <li>Grafana</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Computer Science</li>
        <li>Manav Rachna International Institute Of Research And Studies</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="flex flex-col items-center justify-center">
          {/* <Image
          src="/images/about-image.png"
          alt="about image"
          width={300}
          height={300}
        />  */}
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a DevOps Engineer with 1 year and 4 months of experience in
            building scalable cloud infrastructure and automating CI/CD
            workflows. I am proficient in AWS, Docker, Kubernetes, Terraform,
            Python, and Bash. I specialize in monitoring and observability,
            using tools like Prometheus and Grafana to ensure robust and
            reliable systems. I’m a fast learner who is always eager to expand
            my knowledge and skill set. As a collaborative team player, I’m
            excited to work with others to build exceptional applications.
          </p>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
