<template>
  <section class="hero">
    <div class="hero__content">
      <h1 class="hero__title">Discover digital art & Collect NFTs</h1>
      <p class="hero__description">
        NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
      </p>
      <div class="hero__actions hero__actions--desktop">
        <Button label="Get Started" icon="user" variant="accent" />
        <!-- <RouterLink to="/marketplace" class="hero__link">Marketplace</RouterLink> -->
      </div>
    </div>

    <article class="hero__card">
      <!-- <img src="/images/spaceWalking.png" /> -->
      <div class="hero__card-content">
        <h3>Space Walking</h3>
        <span>Animakid</span>
      </div>
    </article>

    <div class="hero__actions hero__actions--mobile">
      <Button label="Get Started" icon="user" variant="accent" />
      <!-- <RouterLink to="/marketplace" class="hero__link">Marketplace</RouterLink> -->
    </div>
  </section>
</template>

<script setup lang="ts">
// import { RouterLink } from 'vue-router'
import Button from '@/components/ui/Button.vue';
</script>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.hero {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px 0;
}

.hero__content {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hero__title {
  font-size: 28px;
  font-weight: 600;
  line-height: 1.4;
  text-transform: capitalize;
}

.hero__description {
  color: var(--color-text-muted);
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.hero__actions--desktop {
  display: none;
}

.hero__card {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  flex-direction: column;
  justify-content: end;
  background-image: url("/images/spaceWalking.png");
  background-repeat: no-repeat;
  background-position: 0 -50px;
  background-size: cover;
  border-radius: 20px;
  overflow: hidden;

}

.hero__card-content {
  background-color: #3b3b3b;
  padding: 22px 20px;
}

// .hero__link {
//   border-radius: 999px;
//   padding: 0.75rem 1.5rem;
//   border: 1px solid var(--color-border);
//   color: var(--color-text);
// }

@include respond-to(lg) {
  .hero {
    flex-direction: row;
    gap: 30px;
    padding: 80px 0;
  }

  .hero__content {
    width: 50%;
    gap: 20px;
  }

  .hero__title {
    font-size: 38px;
  }

  .hero__actions--desktop {
    display: block;
  }

  .hero__actions--mobile {
    display: none;
  }

  .hero__card {
    width: 50%;
  }
}

@include respond-to(xl) {
  .hero__title {
    font-size: 68px;
    line-height: 1.1;
  }
}
</style>
