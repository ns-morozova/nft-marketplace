<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner container">
      <p class="site-footer__copy">© {{ currentYear }} NFT Market</p>
      <p class="site-footer__note">Следи за обновлениями и релизами коллекций.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.site-footer {
  border-top: 1px solid var(--color-border);
  background-color: var(--color-surface);
}

.site-footer__inner {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.25rem 1.5rem;
  font-size: 0.9rem;
  color: var(--color-text-muted);

  @include respond-to(md) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.site-footer__copy,
.site-footer__note {
  margin: 0;
}
</style>
