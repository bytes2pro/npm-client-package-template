<script lang="ts">
  export let variant: 'primary' | 'secondary' = 'primary';

  const base = {
    borderRadius: '6px',
    padding: '8px 12px',
    fontSize: '14px',
    cursor: 'pointer',
    border: '1px solid transparent',
  } as const;

  const theme = {
    primary: { background: '#111827', color: 'white' },
    secondary: { background: '#F3F4F6', color: '#111827', borderColor: '#D1D5DB' },
  } as const;

  $: style = { ...base, ...theme[variant] };
</script>

<button style={style}><slot /></button>


