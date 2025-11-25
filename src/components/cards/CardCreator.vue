<script setup lang="ts">
type CardCreatorProps = {
  avatar: string
  name: string
  totalSales: number
}

defineProps<CardCreatorProps>()
</script>

<template>
  <article class="card">
    <div class="card__avatar">
      <img :src="avatar" :alt="`${name} main image`" />
    </div>

    <div class="card__info">
      <p class="card__info-name">{{ name }}</p>
      <p class="card__info-total">{{ totalSales }}</p>
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

.card__avatar {
    width: 60px;
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

.card__info {
    .card__info-name {
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 5px;
    }
}

@include respond-to(lg) {
    
}
</style>
