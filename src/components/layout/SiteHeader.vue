<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoSunnySharp } from 'oh-vue-icons/icons'
import Button from '@/components/ui/Button.vue'

addIcons(IoSunnySharp)

const LG_BREAKPOINT = 1024

type Theme = 'dark' | 'light'

const props = defineProps<{ theme: Theme }>()
const emit = defineEmits<{ toggleTheme: [] }>()

const route = useRoute()

const isActive = (name: string) => route.name === name

const handleToggle = () => emit('toggleTheme')

const isMenuOpen = ref(false)

const closeMenu = () => {
  isMenuOpen.value = false
}

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

watch(
  () => route.fullPath,
  () => {
    closeMenu()
  }
)

const lockScroll = (locked: boolean) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = locked ? 'hidden' : ''
}

watch(isMenuOpen, (value) => {
  lockScroll(value)
})

let desktopQuery: MediaQueryList | null = null

const handleDesktopChange = (event: MediaQueryListEvent) => {
  if (event.matches) {
    closeMenu()
  }
}

if (typeof window !== 'undefined') {
  desktopQuery = window.matchMedia(`(min-width: ${LG_BREAKPOINT}px)`)
  if (typeof desktopQuery.addEventListener === 'function') {
    desktopQuery.addEventListener('change', handleDesktopChange)
  } else if (typeof desktopQuery.addListener === 'function') {
    desktopQuery.addListener(handleDesktopChange)
  }

  if (desktopQuery.matches) {
    closeMenu()
  }
}

onBeforeUnmount(() => {
  lockScroll(false)
  if (!desktopQuery) return

  if (typeof desktopQuery.removeEventListener === 'function') {
    desktopQuery.removeEventListener('change', handleDesktopChange)
  } else if (typeof desktopQuery.removeListener === 'function') {
    desktopQuery.removeListener(handleDesktopChange)
  }
})
</script>

<template>
  <header class="site-header">
    <div class="site-header__inner">
      <RouterLink to="/" class="site-header__brand">
        <img src="/public/logo.svg" />
        <span>NFT Marketplace</span>
      </RouterLink>
      
      <button
        class="site-header__menu-toggle"
        type="button"
        :class="{ 'site-header__menu-toggle--open': isMenuOpen }"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Toggle navigation"
        aria-controls="site-menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        id="site-menu"
        class="site-header__menu-panel"
        :class="{ 'site-header__menu-panel--open': isMenuOpen }"
      >
        <nav class="site-header__nav" aria-label="Основное меню">
          <RouterLink
            to="/marketplace"
            class="site-header__nav-link"
            :class="{ 'site-header__nav-link--active': isActive('marketplace') }"
          >
            Marketplace
          </RouterLink>
          <RouterLink
            to="/rankings"
            class="site-header__nav-link"
            :class="{ 'site-header__nav-link--active': isActive('rankings') }"
          >
            Rankings
          </RouterLink>
          <RouterLink
            to="/connect-wallet"
            class="site-header__nav-link"
            :class="{ 'site-header__nav-link--active': isActive('connect-wallet') }"
          >
            Connect a wallet
          </RouterLink>
        </nav>
        <Button label="Sign Up" icon="user" variant="accent" />
        <button
          class="site-header__theme-btn"
          type="button"
          :aria-pressed="props.theme === 'light' ? 'true' : 'false'"
          @click="handleToggle"
        >
          <OhVueIcon name="io-sunny-sharp" class="site-header__theme-icon" aria-hidden="true" />
        </button>
      </div>
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
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px;
}

.site-header__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.site-header__menu-toggle {
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 21;
}

.site-header__menu-toggle span {
  width: 18px;
  height: 1px;
  border-radius: 999px;
  background-color: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.site-header__menu-toggle--open span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.site-header__menu-toggle--open span:nth-child(2) {
  opacity: 0;
}

.site-header__menu-toggle--open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.site-header__menu-panel {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease, visibility 0.3s ease;
  z-index: 20;
}

.site-header__menu-panel--open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

.site-header__nav {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-bottom: 45px;
}

.site-header__nav-link {
  color: var(--color-text-muted);
  font-size: 14px;
  transition: color 0.3s ease;

  &.site-header__nav-link--active {
    color: var(--color-text);
  }

  &:hover {
    color: var(--color-text);
  }
}

.site-header__theme-btn {
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
  margin-top: 10px;
  // margin-left: 0;

  // &:hover {
  //   background-color: var(--color-accent);
  //   border-color: var(--color-accent);
  //   color: #fff;
  // }
}

.site-header__theme-icon {
  width: 16px;
  height: 16px;
  transition: transform 0.25s ease;
}

:global([data-theme='light']) .site-header {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

@include respond-to(lg) {
  .site-header__inner {
    padding: 20px 48px;
  }

  .site-header__brand {
    font-size: 16px;
  }

  .site-header__menu-toggle {
    display: none;
  }

  .site-header__menu-panel {
    position: static;
    width: auto;
    height: auto;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
    transform: none;
  }

  .site-header__nav {
    flex-direction: row;
    gap: 50px;
    margin-right: 50px;
    margin-bottom: 0;
  }

  .site-header__nav-link {
    font-size: 16px;
  }

  .site-header__theme-btn {
    margin-left: 20px;
    margin-top: 0;
  }
}

@include respond-to(xl) {
  .site-header__inner {
    padding: 20px 8px;
  }
}
</style>
