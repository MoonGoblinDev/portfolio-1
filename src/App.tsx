import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Smartphone,
  Gamepad2,
  Code2,
  Instagram,
} from "lucide-react";

import { Project } from "@/types";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectDetail } from "@/components/ProjectDetail";
import { FloatingBadge } from "@/components/FloatingBadge";
import { usePortfolioData } from "@/hooks/usePortfolioData";

type ProjectFilter = "All" | "App" | "Game";
const PROJECT_FILTERS: ProjectFilter[] = ["All", "App", "Game"];

// --- Main Application ---
const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [filter, setFilter] = useState<ProjectFilter>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { projects, socials, assets, badges, loading } = usePortfolioData();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="relative">
          <div className="w-16 h-16 rounded-full border-4 border-emerald-500/30 border-t-emerald-500 animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 blur-md animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  // If a project is selected, show the detail view
  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-200 selection:bg-emerald-500/30 selection:text-emerald-200 font-sans">

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-emerald-900/5' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="font-bold text-xl tracking-tighter flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <span className="text-emerald-500">//</span>
            <span className="text-white">BREGAS.ID</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-emerald-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-emerald-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-emerald-400 transition-colors">Contact</a>
          </div>
          <a href={`mailto:${socials?.email}`} className="px-5 py-2.5 rounded-full bg-white/5 border border-white/10 text-white text-sm font-medium hover:bg-emerald-600 hover:border-emerald-500 transition-all duration-300">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background decorative glow */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-teal-900/10 rounded-full blur-[120px] pointer-events-none opacity-50"></div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 md:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for hire
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.9]">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500 text-glow">
                Bregas S.
              </span>
              <br />
              Wicaksono
            </h1>

            <p className="text-xl text-neutral-400 max-w-lg leading-relaxed font-light">
              I'm <strong className="text-white font-medium">Bregas</strong>. A software engineer bridging the gap between high-performance Apple platforms and immersive Unity experiences.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a href="#projects" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-medium transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] hover:-translate-y-1">
                View Work
              </a>
              {socials && (
                <>
                  <a href={socials.github} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white hover:text-emerald-400 font-medium transition-all flex items-center gap-2 hover:-translate-y-1">
                    <Github size={20} />
                    GitHub
                  </a>
                  <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white hover:text-emerald-400 font-medium transition-all flex items-center gap-2 hover:-translate-y-1">
                    <Instagram size={20} />
                    Instagram
                  </a>
                </>
              )}
            </div>
          </div>

          {/* Hero Image & Floating Elements */}
          <div className="order-1 md:order-2 relative flex justify-center items-center">
            <div className="relative group">
              {/* Glowing background effect */}
              <div className="absolute -inset-1 bg-gradient-to-tr from-emerald-600 via-teal-500 to-emerald-400 rounded-[2.5rem] blur-lg opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse"></div>

              {/* Photo Container */}
              <div className="relative w-72 h-80 md:w-96 md:h-[30rem] bg-neutral-900 rounded-[2rem] border border-white/10 overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10 pointer-events-none"></div>
                {assets && (
                  <img
                    src={assets.profileImage}
                    alt="Bregas S. Wicaksono"
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = assets.profileFallback;
                      e.currentTarget.onerror = null;
                    }}
                  />
                )}
              </div>

              {/* Floating Badges */}
              {badges.map((badge, index) => (
                <FloatingBadge
                  key={badge.id}
                  badge={badge}
                  delay={index * 2}
                />
              ))}

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
            <span className="w-12 h-1 bg-emerald-500 rounded-full"></span>
            About Me
          </h2>
          <div className="glass p-10 md:p-14 rounded-3xl border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 space-y-6">
              <p className="text-xl text-neutral-300 leading-relaxed">
                I am a passionate Software Engineer with a deep focus on the Apple ecosystem and interactive media. My journey began with a curiosity for how software interacts with hardware, leading me to specialize in <strong className="text-white">Swift</strong> for iOS and macOS development.
              </p>
              <p className="text-xl text-neutral-300 leading-relaxed">
                Beyond traditional apps, I explore the dimension of spatial computing and entertainment through <strong className="text-white">Unity</strong>. Whether it's building a robust utility app for the Mac or an immersive game environment, I prioritize performance, clean architecture, and delightful user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">A curated list of technologies I use to bring ideas to life.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* iOS/macOS */}
            <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                  <Smartphone size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Apple Platforms</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Swift', 'SwiftUI', 'UIKit', 'AppKit', 'Combine', 'Core Data', 'XCode'].map(skill => (
                  <span key={skill} className="px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 group-hover:border-emerald-500/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Game Dev */}
            <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                  <Gamepad2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Interactive & 3D</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Unity 3D', 'C#', 'ARKit', 'RealityKit', 'Shader Graph', 'Physics', '3D Math'].map(skill => (
                  <span key={skill} className="px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 group-hover:border-emerald-500/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* General/Tools */}
            <div className="p-8 rounded-3xl border border-white/5 bg-gradient-to-b from-white/[0.03] to-transparent hover:border-emerald-500/20 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-500">
                  <Code2 size={28} />
                </div>
                <h3 className="text-2xl font-bold text-white">Engineering</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git', 'CI/CD', 'Cloudflare', 'REST APIs', 'System Design', 'Algorithms', 'Agile'].map(skill => (
                  <span key={skill} className="px-4 py-2 text-sm font-medium rounded-lg bg-neutral-900 text-neutral-300 border border-neutral-800 group-hover:border-emerald-500/20 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div>
              <h2 className="text-4xl font-bold text-white flex items-center gap-3 mb-4">
                <span className="w-12 h-1 bg-emerald-500 rounded-full"></span>
                Selected Work
              </h2>
              <p className="text-neutral-400 text-lg">A collection of applications and games I've built.</p>
            </div>

            {/* Filters */}
            <div className="flex p-1.5 bg-neutral-900 rounded-xl border border-white/5 backdrop-blur-sm self-start md:self-auto">
              {PROJECT_FILTERS.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-8 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${filter === category
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-900/50'
                    : 'text-neutral-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {category}s
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-neutral-950 border-t border-white/5 pt-32 pb-12 relative overflow-hidden">
        {/* Footer Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 tracking-tight">Let's build something amazing.</h2>
          <p className="text-neutral-400 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
            Whether you have a question about Swift, Unity, or just want to discuss the future of tech, I'm always open to a conversation.
          </p>

          {socials && (
            <div className="flex justify-center gap-6 mb-20">
              <a href={`mailto:${socials.email}`} className="group p-5 rounded-full bg-neutral-900 text-white hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-white/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-900/50">
                <Mail size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href={socials.github} className="group p-5 rounded-full bg-neutral-900 text-white hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-white/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-900/50">
                <Github size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href={socials.linkedin} className="group p-5 rounded-full bg-neutral-900 text-white hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-white/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-900/50">
                <Linkedin size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href={socials.instagram} className="group p-5 rounded-full bg-neutral-900 text-white hover:bg-emerald-600 hover:text-white transition-all duration-300 border border-white/10 hover:-translate-y-2 hover:shadow-lg hover:shadow-emerald-900/50">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          )}

          <div className="border-t border-white/5 pt-10 text-neutral-500 text-sm flex flex-col md:flex-row justify-between items-center gap-6">
            <p>&copy; {new Date().getFullYear()} Bregas S. Wicaksono. All rights reserved.</p>

          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
