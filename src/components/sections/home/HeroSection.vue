<template>
  <section class="hero">
    <div class="hero__content">
      <div>
        <h1 class="hero__title">Discover digital art & Collect NFTs</h1>
        <p class="hero__description">
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>
      </div>
      <div class="hero__actions hero__actions--desktop">
        <Button label="Get Started" icon="user" variant="accent" />
        <!-- <RouterLink to="/marketplace" class="hero__link">Marketplace</RouterLink> -->
        
        <div class="highlights">
          <div class="highlights__item">
            <span>240k+</span>
            <p>Total Sale</p>
          </div>
          <div class="highlights__item">
            <span>100k+</span>
            <p>Auctions</p>
          </div>
          <div class="highlights__item">
            <span>240k+</span>
            <p>Artists</p>
          </div>
        </div>
      </div>
    </div>

    <article class="hero__card">
      <div class="hero__card-content">
        <h3>Space Walking</h3>
        <div class="hero__card-user">
          <div class="hero__card-avatar">
            <img src="/images/avatarDefault.png" alt="Avatar" />
          </div>
          <span>Animakid</span>
        </div>
      </div>
    </article>

    <div class="hero__actions hero__actions--mobile">
      <Button label="Get Started" icon="user" variant="accent" />
      <!-- <RouterLink to="/marketplace" class="hero__link">Marketplace</RouterLink> -->

      <div class="highlights">
        <div class="highlights__item">
          <span>240k+</span>
          <p>Total Sale</p>
        </div>
        <div class="highlights__item">
          <span>100k+</span>
          <p>Auctions</p>
        </div>
        <div class="highlights__item">
          <span>240k+</span>
          <p>Artists</p>
        </div>
      </div>
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
  margin-bottom: 10px;
}

.hero__description {
  color: var(--color-text-muted);
}

.hero__actions {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.hero__actions--desktop {
  display: none;
}

.highlights {
  display: flex;
  justify-content: space-between;
}

.highlights__item {
  span {
    font-size: 22px;
    font-weight: 700;
  }

  p {
    font-size: 16px;
  }
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
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #3b3b3b;
  padding: 22px 20px;

  h3 {
    font-size: 22px;
    font-weight: 600;
  }
}

.hero__card-user {
  display: flex;
  align-items: center;
  gap: 12px;
}

.hero__card-avatar {
  width: 24px;
  aspect-ratio: 1;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
    justify-content: space-between;
    gap: 20px;
    padding-bottom: 14px;
  }

  .hero__title {
    font-size: 38px;
    margin-bottom: 20px;
  }

  .hero__description {
    width: 85%;
    font-size: 22px;
  }

  .hero__actions--desktop {
    display: flex;
    align-items: start;
    gap: 30px;
  }

  .hero__actions--mobile {
    display: none;
  }

  .highlights {
    justify-content: start;
    gap: 70px;
  }

  .highlights__item {
    span {
      font-size: 28px;
    }

    p {
      font-size: 24px;
    }
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
