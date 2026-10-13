import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Enable the lift + cyan-border hover effect. Default true. */
  hover?: boolean;
  children?: React.ReactNode;
}

/**
 * Smoky translucent surface with subtle border; lifts -6px and gains a cyan
 * border on hover. Base container for projects, facts, and skill groups.
 *
 * @startingPoint section="Surfaces" subtitle="Smoky translucent card" viewport="380x240"
 */
export function Card(props: CardProps): JSX.Element;
