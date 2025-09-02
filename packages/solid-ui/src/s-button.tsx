import type { JSX } from 'solid-js';
import { mergeProps, splitProps } from 'solid-js';

export type SButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

export function SButton(allProps: SButtonProps) {
  const props = mergeProps({ variant: 'primary' as const }, allProps);
  const [local, rest] = splitProps(props, ['variant', 'style', 'children']);

  const base: JSX.CSSProperties = {
    'border-radius': '6px',
    padding: '8px 12px',
    'font-size': '14px',
    cursor: 'pointer',
    border: '1px solid transparent',
  };

  const theme: Record<'primary' | 'secondary', JSX.CSSProperties> = {
    primary: { background: '#111827', color: 'white' },
    secondary: { background: '#F3F4F6', color: '#111827', border: '1px solid #D1D5DB' },
  };

  const userStyle =
    typeof local.style === 'object' && local.style !== null
      ? (local.style as JSX.CSSProperties)
      : {};

  return (
    <button style={{ ...base, ...theme[local.variant], ...userStyle }} {...rest}>
      {local.children}
    </button>
  );
}
