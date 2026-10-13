import React from 'react';
export interface SkillIconProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string; label: string; size?: number;
}
export function SkillIcon(props: SkillIconProps): JSX.Element;
