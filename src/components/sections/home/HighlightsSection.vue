<template>
  <section class="highlights">
    <div class="container highlights__grid">
      <article class="highlights__card">
        <span class="highlights__value">240k+</span>
        <span class="highlights__label">Total Sale</span>
      </article>
      <article class="highlights__card">
        <span class="highlights__value">100k+</span>
        <span class="highlights__label">Auctions</span>
      </article>
      <article class="highlights__card">
        <span class="highlights__value">240k+</span>
        <span class="highlights__label">Artists</span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.highlights {
  padding: 1rem 0 3rem;
}

.highlights__grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1rem;
}

.highlights__card {
  border: 1px solid var(--color-border);
  border-radius: 0.75rem;
  padding: 1.5rem;
  background-color: var(--color-surface);
}

.highlights__value {
  font-size: 1.5rem;
  font-weight: 600;
  font-family: var(--font-accent);
}

.highlights__label {
  display: block;
  color: var(--color-text-muted);
}
</style>
