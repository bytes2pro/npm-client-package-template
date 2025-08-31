'use client';
import * as React from 'react';

export type ClientButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ClientButton({ children, style, ...rest }: ClientButtonProps) {
  return (
    <button
      style={{
        borderRadius: 6,
        padding: '8px 12px',
        fontSize: 14,
        cursor: 'pointer',
        background: '#2563EB',
        color: 'white',
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
