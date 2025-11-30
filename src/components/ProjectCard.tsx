import React from "react";
import { ArrowUpRight } from "lucide-react";
import { Project } from "@/types";


interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const accentColor = project.accentColor || '#10b981'; // Default to emerald-500

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative rounded-3xl overflow-hidden bg-neutral-900 border transition-all duration-500 hover:-translate-y-2 cursor-pointer shadow-lg flex flex-col h-full"
      style={{
        borderColor: isHovered ? `${accentColor}50` : 'rgba(255,255,255,0.05)',
        boxShadow: isHovered ? `0 10px 40px -10px ${accentColor}20` : '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
      }}
    >
      {/* Status Badge - Floating */}
      <div className="absolute top-4 left-4 z-20">
        <span
          className="px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md shadow-lg"
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            color: accentColor,
            borderColor: `${accentColor}40`
          }}
        >
          {project.status}
        </span>
      </div>

      {/* Image Container */}
      <div className="h-56 relative overflow-hidden bg-neutral-800">
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent z-10 opacity-80" />
        {project.cardImage ? (
          <img
            src={project.cardImage}
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900">
            <div className="transform group-hover:scale-110 transition-transform duration-500">
              <img src={project.appLogo} alt={project.title} className="w-16 h-16 object-contain" />
            </div>
          </div>
        )}

        {/* Floating Icon Overlay */}
        <div className="absolute bottom-4 right-4 z-20 w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-lg transition-all duration-300">
          <img src={project.appLogo} alt="Logo" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col relative">
        <div className="flex justify-between items-start mb-3">
          <h3
            className="text-2xl font-bold text-white transition-colors"
            style={{ color: isHovered ? accentColor : 'white' }}
          >
            {project.title}
          </h3>
          <ArrowUpRight
            size={20}
            className="text-neutral-600 transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
            style={{ color: isHovered ? accentColor : undefined }}
          />
        </div>

        <p className="text-neutral-400 mb-6 leading-relaxed line-clamp-3 text-sm flex-1">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {project.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md border"
              style={{
                backgroundColor: `${accentColor}10`,
                color: accentColor,
                borderColor: `${accentColor}20`
              }}
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="text-xs font-medium text-neutral-500 px-2 py-1">+{project.tags.length - 3}</span>
          )}
        </div>
      </div>
    </div>
  );
};
