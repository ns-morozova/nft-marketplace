<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

type Theme = 'dark' | 'light'

const props = defineProps<{ theme: Theme }>()
const emit = defineEmits<{ toggleTheme: [] }>()

const route = useRoute()

const themeLabel = computed(() => (props.theme === 'dark' ? 'Light mode' : 'Dark mode'))

const isActive = (name: string) => route.name === name

const handleToggle = () => emit('toggleTheme')
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner container">
      <RouterLink to="/" class="site-header__brand">NFT Marketplace</RouterLink>
      <nav class="site-header__nav" aria-label="Основное меню">
        <RouterLink to="/" class="site-header__link" :class="{ 'is-active': isActive('home') }">
          Main
        </RouterLink>
        <RouterLink to="/marketplace" class="site-header__link" :class="{ 'is-active': isActive('marketplace') }">
          Marketplace
        </RouterLink>
      </nav>
      <button class="site-header__theme-btn" type="button" :aria-pressed="props.theme === 'light'" @click="handleToggle">
        {{ themeLabel }}
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.site-header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.site-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
}

.site-header__brand {
  font-weight: 600;
  letter-spacing: 0.08em;
}

.site-header__nav {
  display: none;
  gap: 1.25rem;

  @include respond-to(md) {
    display: inline-flex;
  }
}

.site-header__link {
  color: var(--color-text-muted);
  font-size: 0.95rem;
  transition: color 0.2s ease;

  &.is-active {
    color: var(--color-text);
  }

  &:hover {
    color: var(--color-text);
  }
}

.site-header__theme-btn {
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  padding: 0.45rem 1rem;
  border-radius: 999px;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:hover {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: #fff;
  }
}

:global([data-theme='light']) .site-header {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
</style>
