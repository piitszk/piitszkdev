import { Box, CloudLightning, Combine, Home } from 'lucide-react';
import { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: "Pendings",
    description: "Permite que a equipe administrativa realize devoluções ao player mesmo que ele esteja desconectado do servidor.",
    icon: <Box className="w-12 h-12 text-indigo-500" />,
    tech: ["Lua","TypeScript","React","MySQL"],
    isOpenSource: false,
    github: "",
    // demo: "demo"
  },{
    title: "Weather",
    description: "Gerenciamento de clima feito exclusivamente para streamers com intuito de mudar localmente o horário e clima.",
    icon: <CloudLightning className="w-12 h-12 text-purple-500" />,
    tech: ["Lua","TypeScript","React"],
    isOpenSource: false,
    github: "",
    demo: "pz-weather"
  },{
    title: "Collectible",
    description: "Colecionáveis que podem ser adquiridos em eventos ou em ocasiões específicas definidas pela equipe administrativa, os colecionáveis podem ser segurados na mão ao utilizar e/ou trocados com outros jogadores.",
    icon: <Combine className="w-12 h-12 text-purple-500" />,
    tech: ["Lua","TypeScript","React"],
    isOpenSource: false,
    github: "",
    // demo: "demo"
  },{
    title: "Residents",
    description: "Permite aos jogadores gerenciem os residentes de suas próprias residências, adicionando e/ou removendo um novo morador ou pagando as taxas, promovendo maior controle.",
    icon: <Home className="w-12 h-12 text-purple-500" />,
    tech: ["Lua", "TypeScript", "React"],
    isOpenSource: false,
    github: "",
    demo: "pz-residents"
  }  
  // {
  //   title: "Perimeter",
  //   description: "Lugares pré-definidos que podem ser acionados pela policia do servidor, informando se o local está com o perímetro fechado ou aberto, notificando a todos.",
  //   icon: <ShieldAlert className="w-12 h-12 text-purple-500" />,
  //   tech: ["Lua"],
  //   isOpenSource: false,
  //   github: "",
  //   // demo: "demo"
  // },
]