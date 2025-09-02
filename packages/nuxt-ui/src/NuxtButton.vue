<script setup lang="ts">
import { computed } from 'vue';

const props = withDefaults(defineProps<{ variant?: 'primary' | 'secondary' }>(), {
  variant: 'primary',
});

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

const computedStyle = computed(() => ({
  ...base,
  ...theme[props.variant],
}));
</script>

<template>
  <button :style="computedStyle"><slot /></button>
  <!-- Wrap in <ClientOnly> in Nuxt if the child uses browser-only APIs -->
  <!-- <ClientOnly><button :style="computedStyle"><slot /></button></ClientOnly> -->
</template>
