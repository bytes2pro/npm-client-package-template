import type { JSX } from 'preact/jsx-runtime';

export type PButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function PButton({ variant = 'primary', style, children, ...rest }: PButtonProps) {
  const base: JSX.CSSProperties = {
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    border: '1px solid transparent',
  };
  const theme: Record<'primary' | 'secondary', JSX.CSSProperties> = {
    primary: { background: '#111827', color: 'white' },
    secondary: { background: '#F3F4F6', color: '#111827', border: '1px solid #D1D5DB' },
  };
  return (
    <button style={{ ...base, ...theme[variant], ...(style as JSX.CSSProperties) }} {...rest}>
      {children}
    </button>
  );
}
