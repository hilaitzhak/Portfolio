import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  multiline?: boolean; rows?: number;
}
export function Input(props: InputProps): JSX.Element;
