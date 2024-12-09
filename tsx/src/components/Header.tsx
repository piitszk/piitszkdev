import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="select-none fixed top-0 w-full z-50 backdrop-blur-lg bg-white/50 dark:bg-zinc-950/50 border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            piitszk.dev
          </a>
          
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className="hidden md:flex items-center gap-6">
              <a href="#about" className="hover:text-purple-600 transition-colors">Sobre</a>
              <a href="#projects" className="hover:text-purple-600 transition-colors">Projetos</a>
              <a href="#contact" className="hover:text-purple-600 transition-colors">Contato</a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};