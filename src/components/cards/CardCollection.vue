<script setup lang="ts">
type CardCollectionProps = {
  mainImage: string
  thumbImages: [string, string]
  moreText: string
  title: string
  avatarImage: string
  authorName: string
}

defineProps<CardCollectionProps>()
</script>

<template>
  <article class="card">
    <div class="card__main-img">
      <img :src="mainImage" :alt="`${title} main image`" />
    </div>

    <div class="card__thumbs">
      <img
        v-for="(thumbImage, index) in thumbImages"
        :key="`${thumbImage}-${index}`"
        :src="thumbImage"
        :alt="`${title} thumbnail ${index + 1}`"
      />
      <div class="card__more">{{ moreText }}</div>
    </div>

    <div class="card__info">
      <h3>{{ title }}</h3>
      <div class="card__author">
        <div class="card__author-avatar">
          <img :src="avatarImage" :alt="authorName" />
        </div>
        <span>{{ authorName }}</span>
      </div>
    </div>
  </article>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.card {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.card__main-img {
    border-radius: 20px;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.card__thumbs {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;

    img {
        border-radius: 20px;
    }

    .card__more {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-accent);
        border-radius: 20px;
        font-family: var(--font-accent);
    }
}

.card__info {
    h3 {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 10px;
    }

    .card__author {
        display: flex;
        align-items: center;
        gap: 12px;
    }

    .card__author-avatar {
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
}

@include respond-to(lg) {
    .card__more {
        font-size: 22px;
    }
}
</style>
