import { Github, Mail, Code2 } from 'lucide-react';

export const Hero = () => {
	return (
		<section id="about" className="min-h-screen flex items-center justify-center pt-20 select-none">
			<div className="container mx-auto px-6">
				<div className="flex flex-col items-center text-center space-y-8">
					<div>
						<div className="p-8 flex flex-col items-center">
							{/* <div className="text-6xl mb-6"><Code2 size={24} /></div> */}
							<h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
								Luan
							</h1>
							<div className="text-xl md:text-2xl font-medium text-zinc-600 dark:text-zinc-300 mb-6">
								Desenvolvedor Backend
							</div>
							<p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
								Com 5 anos de experiência em desenvolvimento no ambiente do FiveM, especializado em desenvolvimento, correção e análise de código.
							</p>
						</div>
					</div>

					<div className="flex items-center gap-6">
						<a
							href="https://github.com/piitszk"
							target="_blank"
							rel="noopener noreferrer"
							className="p-3 rounded-lg hover:bg-zinc-200 bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors"
						>
							<Github size={24} />
						</a>
						<a
							href="mailto:contact@piitszk.dev"
							className="p-3 rounded-lg hover:bg-zinc-200 bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors"
						>
							<Mail size={24} />
						</a>
						<a
							href="#projects"
							className="p-3 rounded-lg hover:bg-zinc-200 bg-zinc-100 dark:bg-zinc-800/50 dark:hover:bg-zinc-800 transition-colors"
						>
							<Code2 size={24} />
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};