import React from 'react';
export interface SectionTitleProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode; accent?: React.ReactNode;
}
export function SectionTitle(props: SectionTitleProps): JSX.Element;
