<script setup lang="ts">
import { computed } from 'vue'
import type { ButtonHTMLAttributes } from 'vue'
import { getButtonIcon, type ButtonIconName } from './buttonIcons'

type ButtonVariant = 'accent' | 'outline' | 'white'

interface ButtonProps {
  label: string
  icon?: ButtonIconName
  variant?: ButtonVariant
  type?: ButtonHTMLAttributes['type']
}

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'accent',
  type: 'button',
})

const emit = defineEmits<{ click: [MouseEvent] }>()

const iconSrc = computed(() => (props.icon ? getButtonIcon(props.icon) : ''))

const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <button
    class="button"
    :class="`button--${props.variant}`"
    :type="props.type"
    @click="handleClick"
  >
    <img v-if="iconSrc" :src="iconSrc" alt="" aria-hidden="true" />
    <span>{{ props.label }}</span>
  </button>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 20px;
  border-radius: 20px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--color-text);
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
}

.button img {
  width: 16px;
  height: 16px;
}

.button--accent {
  background-color: var(--color-accent);
  border-color: var(--color-accent);
  color: #fff;
}

.button--outline {
  border-color: var(--color-border);
  color: var(--color-text);
}

.button--white {
  background-color: #fff;
  border-color: #fff;
  color: #070416;
}

// .button:focus-visible {
//   outline: 2px solid var(--color-accent);
//   outline-offset: 3px;
// }

@include respond-to(lg) {
  .button {
    gap: 12px;
    font-size: 16px;
    padding: 16px 30px;
  }
}
</style>
