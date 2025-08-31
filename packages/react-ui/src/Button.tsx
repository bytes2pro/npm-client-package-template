import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function Button({ variant = 'primary', style, children, ...rest }: ButtonProps) {
  const base: React.CSSProperties = {
    borderRadius: 6,
    padding: '8px 12px',
    fontSize: 14,
    cursor: 'pointer',
    border: '1px solid transparent',
  };
  const theme: Record<string, React.CSSProperties> = {
    primary: { background: '#111827', color: 'white' },
    secondary: { background: '#F3F4F6', color: '#111827', borderColor: '#D1D5DB' },
  };
  return (
    <button style={{ ...base, ...theme[variant], ...style }} {...rest}>
      {children}
    </button>
  );
}
