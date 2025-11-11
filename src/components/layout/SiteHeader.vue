<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoSunnySharp } from 'oh-vue-icons/icons'

addIcons(IoSunnySharp)

type Theme = 'dark' | 'light'

const props = defineProps<{ theme: Theme }>()
const emit = defineEmits<{ toggleTheme: [] }>()

const route = useRoute()

const isActive = (name: string) => route.name === name

const handleToggle = () => emit('toggleTheme')
</script>

<template>
  <header class="header">
    <div class="headerInner container">
      <RouterLink to="/" class="brand">
        <img src="/public/logo.svg" />
        <span>NFT Marketplace</span>
      </RouterLink>
      <div class="mainMenu">
        <nav class="navItems" aria-label="Основное меню">
          <RouterLink to="/marketplace" class="navLink" :class="{ 'is-active': isActive('marketplace') }">
            Marketplace
          </RouterLink>
          <RouterLink to="/rankings" class="navLink" :class="{ 'is-active': isActive('rankings') }">
            Rankings
          </RouterLink>
          <RouterLink to="/connect-wallet" class="navLink" :class="{ 'is-active': isActive('connect-wallet') }">
            Connect a wallet
          </RouterLink>
        </nav>
        <button class="btnSign">
          <img src="/icons/user.svg" />
          <span>Sign Up</span>
        </button>
        <button class="btnTheme" type="button" :aria-pressed="props.theme === 'light'" @click="handleToggle">
          <OhVueIcon name="io-sunny-sharp" class="iconTheme" aria-hidden="true" />
        </button>
      </div>
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

.headerInner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem 1.5rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.mainMenu {
  display: flex;
  align-items: center;
  // gap: 50px;
}

.navItems {
  display: none;
  gap: 50px;
  margin-right: 50px;

  @include respond-to(md) {
    display: flex;
  }
}

.navLink {
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

.btnSign {
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: var(--color-accent);
  border: none;
  border-radius: 20px;
  padding: 18px 30px;
}

.btnTheme {
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
  margin-left: 20px;

  // &:hover {
  //   background-color: var(--color-accent);
  //   border-color: var(--color-accent);
  //   color: #fff;
  // }
}

.iconTheme {
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
