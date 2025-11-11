<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { IoSunnySharp } from 'oh-vue-icons/icons'

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
  <header class="header">
    <div class="headerInner">
      <RouterLink to="/" class="brand">
        <img src="/public/logo.svg" />
        <span>NFT Marketplace</span>
      </RouterLink>
      
      <button
        class="menuToggle"
        type="button"
        :class="{ 'is-open': isMenuOpen }"
        :aria-expanded="isMenuOpen ? 'true' : 'false'"
        aria-label="Toggle navigation"
        aria-controls="site-menu"
        @click="toggleMenu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div id="site-menu" class="menuPanel" :class="{ 'is-open': isMenuOpen }">
        <nav class="navItems" aria-label="Main Menu">
          <RouterLink to="/marketplace" class="navLink" :class="{ 'is-active': isActive('marketplace') }">
            Marketplace
          </RouterLink>
          <RouterLink to="/rankings" class="navLink" :class="{ 'is-active': isActive('rankings') }">
            Rankings
          </RouterLink>
          <RouterLink
            to="/connect-wallet"
            class="navLink"
            :class="{ 'is-active': isActive('connect-wallet') }"
          >
            Connect a wallet
          </RouterLink>
        </nav>
        <button class="btnSign">
          <img src="/icons/user.svg" />
          <span>Sign Up</span>
        </button>
        <button
          class="btnTheme"
          type="button"
          :aria-pressed="props.theme === 'light' ? 'true' : 'false'"
          @click="handleToggle"
        >
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
  padding: 15px 24px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.08em;
}

.menuToggle {
  border: none;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: all 0.3s ease;
  position: relative;
  z-index: 21;
}

.menuToggle span {
  width: 18px;
  height: 1px;
  border-radius: 999px;
  background-color: var(--color-text);
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menuToggle.is-open span:nth-child(1) {
  transform: translateY(5px) rotate(45deg);
}

.menuToggle.is-open span:nth-child(2) {
  opacity: 0;
}

.menuToggle.is-open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

.menuPanel {
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

.menuPanel.is-open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
  transform: translateY(0);
}

.navItems {
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-bottom: 45px;
}

.navLink {
  color: var(--color-text-muted);
  font-size: 14px;
  transition: color 0.3s ease;

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
  padding: 14px 20px;
  font-size: 14px;
  margin-bottom: 10px;
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
  margin-left: 0;

  // &:hover {
  //   background-color: var(--color-accent);
  //   border-color: var(--color-accent);
  //   color: #fff;
  // }
}

.iconTheme {
  width: 16px;
  height: 16px;
  transition: transform 0.25s ease;
}

:global([data-theme='light']) .header {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.06);
}

@include respond-to(lg) {
  .headerInner {
    padding: 20px 48px;
  }

  .brand {
    font-size: 16px;
  }

  .menuToggle {
    display: none;
  }

  .menuPanel {
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

  .navItems {
    flex-direction: row;
    gap: 50px;
    margin-right: 50px;
    margin-bottom: 0;
  }

  .navLink {
    font-size: 16px;
  }

  .btnSign {
    padding: 18px 30px;
    font-size: 16px;
    margin-bottom: 0;
  }

  .btnTheme {
    margin-left: 20px;
  }
}
</style>
