import React from 'react';
export interface FactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string;
}
export function FactCard(props: FactCardProps): JSX.Element;
