<script setup lang="ts">
// import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoSunnySharp } from 'oh-vue-icons/icons'

addIcons(IoSunnySharp)

type Theme = 'dark' | 'light'

const props = defineProps<{ theme: Theme }>()
const emit = defineEmits<{ toggleTheme: [] }>()

const route = useRoute()

// const themeLabel = computed(() => (props.theme === 'dark' ? 'Light mode' : 'Dark mode'))

const isActive = (name: string) => route.name === name

const handleToggle = () => emit('toggleTheme')
</script>

<template>
  <header class="header">
    <div class="header__inner container">
      <RouterLink to="/" class="header__brand">
        <img src="/public/logo.svg" />
        <span>NFT Marketplace</span>
      </RouterLink>
      <nav class="header__nav" aria-label="Основное меню">
        <!-- <RouterLink to="/" class="header__link" :class="{ 'is-active': isActive('home') }">
          Main
        </RouterLink> -->
        <RouterLink to="/marketplace" class="header__link" :class="{ 'is-active': isActive('marketplace') }">
          Marketplace
        </RouterLink>
        <RouterLink to="/rankings" class="header__link" :class="{ 'is-active': isActive('rankings') }">
          Rankings
        </RouterLink>
        <RouterLink to="/connect-wallet" class="header__link" :class="{ 'is-active': isActive('connect-wallet') }">
          Connect a wallet
        </RouterLink>
      </nav>
      <button class="header__theme-btn" type="button" :aria-pressed="props.theme === 'light'" @click="handleToggle">
        <!-- {{ themeLabel }} -->
        <OhVueIcon name="io-sunny-sharp" class="header__theme-icon" aria-hidden="true" />
      </button>
    </div>
  </header>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.header {
  background-color: var(--color-surface);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 10;
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
}

.header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.header__nav {
  display: none;
  gap: 1.25rem;

  @include respond-to(md) {
    display: inline-flex;
  }
}

.header__link {
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

.header__theme-btn {
  width: 28px;
  aspect-ratio: 1;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--color-border);
  background-color: transparent;
  color: var(--color-text);
  border-radius: 999px;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  // &:hover {
  //   background-color: var(--color-accent);
  //   border-color: var(--color-accent);
  //   color: #fff;
  // }
}

.header__theme-icon {
  width: 16px;
  height: 16px;
  // width: 1.1rem;
  // height: 1.1rem;
  // color: currentColor;
  transition: transform 0.25s ease;
}

:global([data-theme='light']) .header {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}
</style>
