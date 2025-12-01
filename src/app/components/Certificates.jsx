"use client";
import React from "react";
import { ArrowDownTrayIcon, EyeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    name: "Docker",
    file: "/certificate/Docker.pdf",
    image: "/cert-image/Docker.png",
  },
  {
    id: 2,
    name: "Kubernetes",
    file: "/certificate/Kubernetes.pdf",
    image: "/cert-image/Kubernetes.png",
  },
  {
    id: 3,
    name: "Helm",
    file: "/certificate/Helm.pdf",
    image: "/cert-image/Helm.png",
  },
  {
    id: 4,
    name: "Jenkins",
    file: "/certificate/Jenkins.pdf",
    image: "/cert-image/Jenkins.png",
  },
  {
    id: 5,
    name: "Linux",
    file: "/certificate/Linux.pdf",
    image: "/cert-image/Linux.png",
  },
  {
    id: 6,
    name: "Shell Scripting",
    file: "/certificate/shell-scripting.pdf",
    image: "/cert-image/shell-scripting.png",
  },
];

const CertificateCard = ({ certificate }) => {
  const handleView = () => {
    window.open(certificate.file, "_blank");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = certificate.file;
    link.download = `${certificate.name}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="group"
    >
      <div className="rounded-xl relative bg-gradient-to-br from-[#181818] to-[#252525] border border-[#333] hover:border-primary-500 transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary-500/20">
        {/* Certificate Image */}
        <div className="relative w-full h-48 md:h-56 overflow-hidden bg-[#252525]">
          <Image
            src={certificate.image}
            alt={certificate.name}
            fill
            className="object-contain group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        {/* Certificate Info and Buttons */}
        <div className="p-4 flex flex-col items-center">
          <h5 className="text-xl font-semibold text-white mb-4 text-center">
            {certificate.name}
          </h5>
          <div className="flex gap-3">
            <button
              onClick={handleView}
              className="flex items-center gap-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors duration-300 text-sm"
            >
              <EyeIcon className="h-5 w-5" />
              View
            </button>
            <button
              onClick={handleDownload}
              className="flex items-center gap-2 px-4 py-2 bg-secondary-500 hover:bg-secondary-600 text-white rounded-lg transition-colors duration-300 text-sm"
            >
              <ArrowDownTrayIcon className="h-5 w-5" />
              Download
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="certificates" className="text-white py-8 px-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Certificates
      </h2>
      <div
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
      >
        {certificates.map((certificate, index) => (
          <motion.div
            key={certificate.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <CertificateCard certificate={certificate} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
