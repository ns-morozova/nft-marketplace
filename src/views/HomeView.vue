<template>
  <section class="hero">
    <div class="container">
      <p class="hero__eyebrow">digital art drops</p>
      <h1 class="hero__title">Discover digital art & Collect NFTs</h1>
      <p class="hero__subtitle">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
      </p>
      <div class="hero__actions">
        <button class="hero__cta">Get Started</button>
        <RouterLink to="/marketplace" class="hero__link">Marketplace</RouterLink>
      </div>
    </div>
  </section>
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

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.hero {
  padding: 3rem 0 2rem;
}

.hero__eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.3em;
  font-size: 0.75rem;
  color: var(--color-text-muted);
  margin-bottom: 1rem;
}

.hero__title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin: 0 0 1rem;
}

.hero__subtitle {
  margin: 0 0 1.5rem;
  color: var(--color-text-muted);
  max-width: 520px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__cta {
  border: none;
  background-color: var(--color-accent);
  color: #fff;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
}

.hero__link {
  border-radius: 999px;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--color-border);
  color: var(--color-text);
}

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

@include respond-to(md) {
  .hero {
    padding-top: 4rem;
  }

  .hero__title {
    max-width: 640px;
  }
}
</style>
