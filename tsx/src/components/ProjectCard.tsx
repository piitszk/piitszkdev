import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types/Project';
import { Modal } from './Modal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        className="animated-border select-none"
        data-aos="fade-up"
        data-aos-delay={index * 100}
      >
        <div className="animated-border-content p-6">
          <div className="flex flex-col h-full">
            <div className="mb-4">{project.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-zinc-900 dark:text-white">{project.title}</h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4 flex-grow">
              {project.description}
            </p>
            
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-4">
                {project.isOpenSource && project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-700 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400 transition-colors"
                  >
                    <Github size={16} />
                    Código
                  </a>
                )}
                {!project.isOpenSource && (
                  <span className="flex items-center gap-2 text-sm text-zinc-400 dark:text-zinc-500 cursor-not-allowed">
                    <Github size={16} />
                    Privado
                  </span>
                )}
                {project.demo && (
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 text-sm text-zinc-700 hover:text-indigo-500 dark:text-zinc-300 dark:hover:text-indigo-400 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Visualizar
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        demoUrl={project.demo || ''}
      />
    </>
  );
};