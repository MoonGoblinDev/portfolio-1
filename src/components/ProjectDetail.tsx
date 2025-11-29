import React, { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  CheckCircle2,
  Layers,
  ExternalLink,
  Users,
  ChevronRight,
  ChevronLeft
} from "lucide-react";
import { Project } from "@/types";


interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const galleryRef = useRef<HTMLDivElement>(null);
  const [showRightIndicator, setShowRightIndicator] = useState(false);
  const [showLeftIndicator, setShowLeftIndicator] = useState(false);
  const accentColor = project.accentColor || '#10b981'; // Default to emerald-500

  useEffect(() => {
    window.scrollTo(0, 0);
    if (galleryRef.current) {
      galleryRef.current.scrollLeft = 0;
      checkScroll();
    }
  }, [project]);

  const checkScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setShowRightIndicator(scrollLeft + clientWidth < scrollWidth - 10);
      setShowLeftIndicator(scrollLeft > 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, [project]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Navbar */}
      <nav className="fixed w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5 py-4">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors text-sm font-medium group bg-white/5 px-4 py-2 rounded-full hover:bg-white/10"
            style={{ '--hover-color': accentColor } as React.CSSProperties}
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Projects
          </button>

          <span className="text-sm font-bold text-white hidden md:block">{project.title}</span>
        </div>
      </nav>

      {/* Hero Banner with Parallax-like effect */}
      <div className="relative h-[60vh] min-h-[400px] w-full overflow-hidden">
        <div className="absolute inset-0 bg-neutral-900">
          {project.bannerImage ? (
            <img
              src={project.bannerImage}
              alt="Banner"
              className="w-full h-full object-cover opacity-60"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-neutral-900 to-black" style={{ background: `linear-gradient(to bottom right, ${accentColor}40, #000000)` }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 w-full p-6 pb-12">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-end">
            <div className="relative w-24 h-24 rounded-3xl overflow-hidden border border-white/10 shadow-2xl hidden md:block">
              <img
                src={project.appLogo}
                alt={`${project.title} logo`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                    borderColor: `${accentColor}30`
                  }}
                >
                  {project.status}
                </span>
                <span className="text-neutral-300 text-sm font-medium flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                  <Calendar size={14} /> {project.year || '2024'}
                </span>
                {/* Only show single Role tag if there's no team list, otherwise user can check sidebar for full credits */}
                {(!project.team || project.team.length === 0) && (
                  <span className="text-neutral-300 text-sm font-medium flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full border border-white/5">
                    <User size={14} /> {project.role || 'Developer'}
                  </span>
                )}
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">{project.title}</h1>
              <p className="text-xl text-neutral-300 max-w-2xl font-light">{project.description}</p>
            </div>

            <div className="w-full md:w-auto">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 text-white font-medium rounded-xl transition-all shadow-lg hover:shadow-xl group"
                style={{
                  backgroundColor: accentColor,
                  boxShadow: `0 0 20px ${accentColor}40`
                }}
              >
                Visit Project <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section - Full Width */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="w-full py-12 border-b border-white/5 bg-neutral-900/30 relative group/gallery">
          <div
            ref={galleryRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            style={{ paddingInline: 'max(1.5rem, calc((100% - 72rem) / 2 + 1.5rem))' }}
          >
            {project.gallery.map((img, idx) => (
              <div key={idx} className="snap-center shrink-0 relative rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 shadow-2xl group">
                <img
                  src={img}
                  alt={`Screenshot ${idx + 1}`}
                  className="h-[300px] md:h-[400px] w-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          {/* Left Scroll Indicator */}
          <div
            className={`absolute left-4 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${showLeftIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <button
              onClick={() => galleryRef.current?.scrollBy({ left: -300, behavior: 'smooth' })}
              className="p-3 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 text-white shadow-xl hover:bg-neutral-800 transition-colors"
              style={{ borderColor: `${accentColor}40` }}
            >
              <ChevronLeft size={24} style={{ color: accentColor }} />
            </button>
          </div>

          {/* Right Scroll Indicator */}
          <div
            className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-opacity duration-300 ${showRightIndicator ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <button
              onClick={() => galleryRef.current?.scrollBy({ left: 300, behavior: 'smooth' })}
              className="p-3 rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 text-white shadow-xl hover:bg-neutral-800 transition-colors"
              style={{ borderColor: `${accentColor}40` }}
            >
              <ChevronRight size={24} style={{ color: accentColor }} />
            </button>
          </div>
        </div>
      )}

      {/* Content Grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">

          {/* Main Content Column */}
          <div className="md:col-span-2 space-y-16">


            {/* About / Story */}
            <section>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-1 h-8 rounded-full" style={{ backgroundColor: accentColor }}></span>
                The Story
              </h3>
              <div className="prose prose-invert prose-lg text-neutral-300 leading-relaxed font-light">
                <p className="whitespace-pre-line">{project.fullDescription || project.description}</p>
              </div>
            </section>

            {/* Key Features */}
            {project.features && (
              <section>
                <h3 className="text-2xl font-bold text-white mb-6">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
                      <div className="p-1.5 rounded-full mt-0.5 shadow-sm" style={{ backgroundColor: `${accentColor}20`, color: accentColor }}>
                        <CheckCircle2 size={16} />
                      </div>
                      <span className="text-neutral-300 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* Sidebar Column */}
          <div className="space-y-8">

            {/* Tech Stack */}
            <div className="p-8 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm sticky top-24">
              <h4 className="text-white font-bold mb-6 flex items-center gap-2 text-lg">
                <Layers size={20} style={{ color: accentColor }} />
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span
                    key={tag}
                    className="text-sm font-medium px-4 py-2 rounded-lg transition-colors cursor-default border"
                    style={{
                      backgroundColor: `${accentColor}10`,
                      color: accentColor,
                      borderColor: `${accentColor}20`
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Team Section */}
              {project.team && project.team.length > 0 && (
                <div className="mt-8 pt-8 border-t border-white/5">
                  <h4 className="text-white font-bold mb-4 flex items-center gap-2 text-lg">
                    <Users size={20} style={{ color: accentColor }} />
                    Team
                  </h4>
                  <div className="space-y-4">
                    {project.team.map((member, idx) => (
                      <div key={idx} className="flex justify-between items-start">
                        <span className="text-white font-medium">{member.name}</span>
                        <span className="text-neutral-500 text-sm text-right">{member.role}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-white/5 space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-500">Platform</span>
                  <span className="text-white font-medium">{project.category === 'App' ? 'iOS / macOS' : 'Unity / C#'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-500">License</span>
                  <span className="text-white font-medium">Proprietary</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
