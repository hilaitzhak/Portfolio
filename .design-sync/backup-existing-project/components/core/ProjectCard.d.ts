import React from 'react';
export interface ProjectCardProps {
  title: string; image?: string; description: string;
  tags?: string[]; githubUrl?: string; demoUrl?: string;
  style?: React.CSSProperties;
}
export function ProjectCard(props: ProjectCardProps): JSX.Element;
