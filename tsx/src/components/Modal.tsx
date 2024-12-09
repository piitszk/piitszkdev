import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  demoUrl: string;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, demoUrl }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center select-none">
      <div
        className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        onClick={onClose}
      />
      <div
        className="relative w-full max-w-5xl mx-4 animated-border"
        data-aos="zoom-in"
        data-aos-duration="500"
      >
        <div className="animated-border-content">
          <div className="flex items-center justify-between p-4 border-b border-zinc-800">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">Preview do Projeto</h3>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800/50 transition-colors text-zinc-900 dark:text-white"
            >
              <X size={20} />
            </button>
          </div>
          <div className="relative aspect-video bg-zinc-100 dark:bg-zinc-900">
            {demoUrl ? (
              <video
                className="w-full h-full"
                controls
                autoPlay
                muted
                src={`/demos/${demoUrl}.mp4`}
              >
                <source src={`/demos/${demoUrl}.mp4`} type="video/mp4" />
                Seu navegador não suporta a reprodução de vídeos.
              </video>
            ) : (
              <div className="flex items-center justify-center h-full text-zinc-600 dark:text-zinc-400 p-8 text-center">
                <p>Este projeto ainda não possui um vídeo de demonstração disponível.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};