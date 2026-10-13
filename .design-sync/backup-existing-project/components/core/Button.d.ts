import React from 'react';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md';

export interface ButtonProps extends React.HTMLAttributes<HTMLElement> {
  /** Visual treatment. primary = solid cyan, secondary = cyan outline. */
  variant?: ButtonVariant;
  /** md (default 12×26) or sm (10×20). */
  size?: ButtonSize;
  /** Render as a different element, e.g. 'a' for a link. */
  as?: keyof JSX.IntrinsicElements;
  /** Optional leading icon node. */
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Signature pill CTA. Primary fills cyan and inverts to outline on hover;
 * secondary is an outline that fills on hover. Both lift -2px.
 *
 * @startingPoint section="Actions" subtitle="Pill CTA — primary & secondary" viewport="420x120"
 */
export function Button(props: ButtonProps): JSX.Element;
