<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="footer">
    <div class="footerInner">
      <p class="footerCopy">Ⓒ {{ currentYear }} NFT Market</p>
      <p class="footerNote">Use this template freely.</p>
    </div>
  </footer>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.footer {
  border-top: 1px solid var(--color-border);
  background-color: var(--color-surface);
}

.footerInner {
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 15px 30px;
  font-size: 0.9rem;
  color: var(--color-text-muted);

  @include respond-to(lg) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px 52px;
  }
}

.footerCopy,
.footerNote {
  margin: 0;
}

// @include respond-to(lg) {
//   .footerInner {
//     flex-direction: row;
//     justify-content: space-between;
//     align-items: center;
//     padding: 20px 52px;

//   }
// }
</style>
