<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__copy">Ⓒ {{ currentYear }} NFT Market</p>
      <p class="site-footer__note">Use this template freely.</p>
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
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 30px;
  font-size: 0.9rem;
  color: var(--color-text-muted);
}

.site-footer__copy,
.site-footer__note {
  margin: 0;
}

@include respond-to(lg) {
  .site-footer__inner {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 52px;
  }
}

// @include respond-to(lg) {
//   .site-footer__inner {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding: 20px 52px;

//   }
// }
</style>
