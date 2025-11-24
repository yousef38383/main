
import React from 'react';
import { cn } from '@/lib/utils';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  link: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  link,
  index
}) => {
  return (
    <div 
      className={cn(
        "cosmic-card group p-8 overflow-hidden card-3d border-gradient",
        "bg-gradient-to-br from-cosmic-navy/80 via-cosmic-navy/60 to-cosmic-navy/40 animated-gradient",
        "opacity-0 translate-y-4",
        "data-[loaded=true]:opacity-100 data-[loaded=true]:translate-y-0",
        "transition-all duration-700 ease-out",
        "hover:shadow-2xl hover:-translate-y-3 hover:shadow-cosmic-purple/30",
        "border border-cosmic-purple/10 hover:border-cosmic-purple/50",
        "relative before:absolute before:inset-0 before:bg-gradient-to-br before:from-cosmic-purple/5 before:to-cosmic-pink/5 before:opacity-0 before:transition-opacity hover:before:opacity-100"
      )}
      style={{ transitionDelay: `${100 * index}ms` }}
      data-loaded="false"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cosmic-purple/30 to-cosmic-pink/30 rounded-bl-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 -z-10" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-cosmic-lavender/20 to-cosmic-purple/20 rounded-tr-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500 -z-10" />
      
      {/* Floating particles */}
      <div className="absolute top-4 left-4 w-2 h-2 bg-cosmic-lavender/40 rounded-full blur-sm animate-float" />
      <div className="absolute top-1/2 right-8 w-1.5 h-1.5 bg-cosmic-pink/40 rounded-full blur-sm animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute bottom-8 left-1/3 w-2 h-2 bg-cosmic-purple/40 rounded-full blur-sm animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10">        
        <h3 dir="rtl" className="text-2xl md:text-3xl font-bold text-cosmic-white mb-4 text-gradient group-hover:scale-105 transition-transform duration-300 leading-normal lg:leading-relaxed py-2 overflow-visible">{title}</h3>
        
        <p dir="rtl" className="text-cosmic-silver text-base mb-8 leading-relaxed group-hover:text-cosmic-white/90 transition-colors duration-300">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map((tag) => (
            <span 
              key={tag} 
              className="cosmic-glass text-xs px-3 py-1.5 rounded-full text-cosmic-lavender border border-cosmic-lavender/30 backdrop-blur-lg hover:border-cosmic-lavender/60 hover:bg-cosmic-lavender/10 hover:scale-105 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <a 
          href={link}
          className="inline-flex items-center justify-center w-full cosmic-glass bg-cosmic-purple/10 hover:bg-cosmic-purple/30 text-cosmic-white px-6 py-3.5 rounded-full text-sm font-medium transition-all duration-300 ease-in-out border border-cosmic-lavender/30 group-hover:border-cosmic-lavender/60 hover:scale-105 relative overflow-hidden glow-pulse"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 flex items-center">
            View Project
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" />
          </span>
          <span className="absolute inset-0 scale-x-0 group-hover:scale-x-100 bg-gradient-to-r from-cosmic-purple/40 to-cosmic-pink/40 origin-left transition-transform duration-500 ease-out -z-10"></span>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
