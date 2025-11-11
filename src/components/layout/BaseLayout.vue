<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import SiteFooter from './SiteFooter.vue'
import SiteHeader from './SiteHeader.vue'

type Theme = 'dark' | 'light'

const theme = ref<Theme>('dark')

const applyTheme = (value: Theme) => {
  if (typeof document === 'undefined') return
  document.documentElement.setAttribute('data-theme', value)
}

onMounted(() => {
  applyTheme(theme.value)
})

watch(theme, (value) => applyTheme(value))

const toggleTheme = () => {
  theme.value = theme.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <div class="layout">
    <SiteHeader :theme="theme" @toggle-theme="toggleTheme" />
    <main class="layoutContent">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-bg);
  color: var(--color-text);
  transition: background-color 0.3s ease, color 0.3s ease;
}

.layoutContent {
  flex: 1;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px;
}

@include respond-to(lg) {
  .layoutContent {
    padding: 0 52px;
  }
}
</style>
