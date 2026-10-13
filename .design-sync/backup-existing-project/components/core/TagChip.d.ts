import React from 'react';

export interface TagChipProps extends React.HTMLAttributes<HTMLSpanElement> {
  children?: React.ReactNode;
}

/**
 * Small cyan-outlined pill for tech-stack / category labels.
 *
 * @startingPoint section="Data Display" subtitle="Tech tag chip" viewport="320x90"
 */
export function TagChip(props: TagChipProps): JSX.Element;
