export interface Project {
  title: string;
  description: string;
  icon: JSX.Element;
  tech: string[];
  isOpenSource: boolean;
  github?: string;
  demo?: string;
}