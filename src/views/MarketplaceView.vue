<template>
  <section class="marketplace container">
    <header class="marketplace__header">
      <div>
        <h1 class="marketplace__title">Browse Marketplace</h1>
      </div>
      <select class="marketplace__filter" aria-label="Сортировать коллекции">
        <option value="trending">В тренде</option>
        <option value="new">Новые</option>
        <option value="volume">По объему</option>
      </select>
    </header>
    <div class="marketplace__list">
      <article class="marketplace-card" v-for="collection in collections" :key="collection.title">
        <div class="marketplace-card__body">
          <h2 class="marketplace-card__title">{{ collection.title }}</h2>
          <p class="marketplace-card__desc">{{ collection.description }}</p>
        </div>
        <span class="marketplace-card__tag">Floor: {{ collection.floor }}</span>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
const collections = [
  {
    title: 'Aurora Lights',
    description: 'Aurora Lights',
    floor: '1.2 ETH',
  },
  {
    title: 'Concrete Dreams',
    description: 'Concrete Dreams',
    floor: '0.8 ETH',
  },
  {
    title: 'Sonic Bloom',
    description: 'Sonic Bloom',
    floor: '2.4 ETH',
  },
]
</script>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.marketplace {
  padding: 2rem 0 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.marketplace__header {
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @include respond-to(md) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.marketplace__title {
  margin: 0;
}

.marketplace__filter {
  border-radius: 0.5rem;
  border: 1px solid var(--color-border);
  background-color: var(--color-surface);
  color: var(--color-text);
  padding: 0.6rem 0.85rem;
}

.marketplace__list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.marketplace-card {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: 1rem;
  padding: 1.25rem;
  background-color: var(--color-surface);

  @include respond-to(md) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
}

.marketplace-card__title {
  margin: 0 0 0.35rem;
}

.marketplace-card__desc {
  margin: 0;
  color: var(--color-text-muted);
}

.marketplace-card__tag {
  font-weight: 600;
}
</style>
