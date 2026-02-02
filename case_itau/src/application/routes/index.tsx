import type { JSX } from "react";
import ArquiteturaDeSoftware from "../../interfaces/pages/ArquiteturaDeSoftware";
import CanalDeReclamacao from "../../interfaces/pages/CanalDeReclamacao";
import Componentizacao from "../../interfaces/pages/Componentizacao";
import Fluxos from "../../interfaces/pages/Fluxos";
import HardSkills from "../../interfaces/pages/HardSkills";
import Ia from "../../interfaces/pages/Ia";

export interface PageRoute {
  path: string;
  title: string;
  element: JSX.Element;
}

export const pages: PageRoute[] = [
  // desafio central
  { path: "/", title: "Canal de Reclamação", element: <CanalDeReclamacao /> },
  // { path: "/visualizacao", title: "Visualização das Reclamações", element: <VisualizacaoDasReclamacoes /> },

  // partes estruturadas e explicação do desafio
  // aqui iremos disponibilizar o fluxo da interação, o banco de dados e o fluxo da lógica do backend
  { path: "/fluxos", title: "Fluxos do Sistema", element: <Fluxos /> },

  // explicação de qual arquitetura eu escolhi alem da explicação de forma central de como ela funciona
  { path: "/arquitetura", title: "Arquitetura de Software", element: <ArquiteturaDeSoftware /> },

  // escolha do componente e demostração de como o mesmo funciona com base na arquitetura escolhida
  { path: "/componente", title: "Componentização", element: <Componentizacao /> },

  // explicação de qual linguagem banco de dados e tecnolog   ias foram usadas no decorrer do projeto
  // frontend
  // react-router-dom
  // react
  // backend
  { path: "/hardskills", title: "Hard Skills", element: <HardSkills /> },

  // como a ia poderia vir nos auziliar explicação e demonstração
  { path: "/ia", title: "Inteligência Artificial", element: <Ia /> },
];
