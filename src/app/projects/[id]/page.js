"use client";
import React from "react";
import { useParams } from "next/navigation";
import { projectsData } from "../../components/ProjectsSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

// Helper function to convert YouTube/Vimeo URLs to embed format
const getEmbedUrl = (url) => {
  if (!url) return null;
  
  // YouTube URL handling
  if (url.includes("youtube.com/watch")) {
    const videoId = url.split("v=")[1]?.split("&")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  if (url.includes("youtu.be/")) {
    const videoId = url.split("youtu.be/")[1]?.split("?")[0];
    return videoId ? `https://www.youtube.com/embed/${videoId}` : url;
  }
  if (url.includes("youtube.com/embed")) {
    return url;
  }
  
  // Vimeo URL handling
  if (url.includes("vimeo.com/")) {
    const videoId = url.split("vimeo.com/")[1]?.split("?")[0];
    return videoId ? `https://player.vimeo.com/video/${videoId}` : url;
  }
  if (url.includes("player.vimeo.com")) {
    return url;
  }
  
  // Direct video file or other embed URLs
  return url;
};

export default function ProjectDetailPage() {
  const params = useParams();
  const projectId = parseInt(params.id);
  const project = projectsData.find((p) => p.id === projectId);
  
  const embedUrl = project?.videoUrl ? getEmbedUrl(project.videoUrl) : null;

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col bg-[#121212]">
        <Navbar />
        <div className="container mt-24 mx-auto px-12 py-4">
          <div className="text-white text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link
              href="/#projects"
              className="text-primary-500 hover:text-primary-600"
            >
              Go back to projects
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        {/* Back Button */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-white hover:text-primary-500 mb-8 transition-colors duration-300"
        >
          <ArrowLeftIcon className="h-5 w-5" />
          <span>Back to Projects</span>
        </Link>

        {/* Video Hero Section */}
        <section className="mb-12">
          <div className="rounded-xl overflow-hidden bg-[#181818] p-4 md:p-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 text-center">
              {project.title}
            </h1>
            <div className="aspect-video w-full bg-[#252525] rounded-lg overflow-hidden">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={project.title}
                ></iframe>
              ) : project.videoUrl && project.videoUrl.endsWith?.(".mp4") ? (
                <video
                  src={project.videoUrl}
                  controls
                  className="w-full h-full"
                >
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-[#ADB7BE] text-lg mb-4">
                      Video coming soon
                    </p>
                    <p className="text-[#ADB7BE] text-sm">
                      Add a video URL (YouTube, Vimeo, or direct video file) to the project data to display it here
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="mb-12">
          <div className="bg-[#181818] rounded-xl p-6 md:p-8">
            <h2 className="text-3xl font-bold text-white mb-6">
              Project Description
            </h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-[#ADB7BE] text-lg leading-relaxed">
                {project.detailedDescription || project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="mb-12">
          <div className="bg-[#181818] rounded-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Project Details
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-[#ADB7BE] mb-2">Category:</p>
                <div className="flex flex-wrap gap-2">
                  {project.tag
                    .filter((tag) => tag !== "All")
                    .map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-primary-500/20 text-primary-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>
              {project.gitUrl && project.gitUrl !== "/" && (
                <div>
                  <p className="text-[#ADB7BE] mb-2">Repository:</p>
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-500 hover:text-primary-400 transition-colors"
                  >
                    View on GitHub
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}

