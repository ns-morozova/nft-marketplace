<template>
  <section class="trending">
    <div class="trending__heading">
      <HeadingH2 text="Trending Collection" />
      <Text value="Checkout our weekly updated trending collection." />
    </div>

    <div class="trending__cards">
      <CardCollection
        v-for="collection in trendingCollections"
        :key="collection.id"
        :main-image="collection.mainImage"
        :thumb-images="collection.thumbImages"
        :more-text="collection.moreText"
        :title="collection.title"
        :avatar-image="collection.avatarImage"
        :author-name="collection.authorName"
      />
    </div>
    
  </section>
</template>

<script setup lang="ts">
import HeadingH2 from '@/components/ui/HeadingH2.vue'
import Text from '@/components/ui/Text.vue'
import CardCollection from '@/components/cards/CardCollection.vue'

interface TrendingCollectionCard {
  id: string
  mainImage: string
  thumbImages: [string, string]
  moreText: string
  title: string
  avatarImage: string
  authorName: string
}

const trendingCollections: TrendingCollectionCard[] = [
  {
    id: 'dsgn-animals',
    mainImage: '/images/cardCollectionMain1.png',
    thumbImages: ['/images/cardCollectionExtra1_1.png', '/images/cardCollectionExtra1_2.png'],
    moreText: '1025+',
    title: 'DSGN Animals',
    avatarImage: '/images/avatarCardCollectionDefault1.png',
    authorName: 'MrFox'
  },
  {
    id: 'magic-mushrooms',
    mainImage: '/images/cardCollectionMain2.png',
    thumbImages: ['/images/cardCollectionExtra2_1.png', '/images/cardCollectionExtra2_2.png'],
    moreText: '100+',
    title: 'Magic Mushrooms',
    avatarImage: '/images/avatarCardCollectionDefault2.png',
    authorName: 'Shroomie'
  },
  {
    id: 'disco-machines',
    mainImage: '/images/cardCollectionMain3.png',
    thumbImages: ['/images/cardCollectionExtra3_1.png', '/images/cardCollectionExtra3_2.png'],
    moreText: '600+',
    title: 'Disco Machines',
    avatarImage: '/images/avatarCardCollectionDefault3.png',
    authorName: 'BeKind2Robots'
  }
]
</script>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.trending {
  padding: 40px 0;
}

.trending__heading {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 40px;
}

.trending__cards {
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(1, 1fr);
}

@include respond-to(md) {
  .trending {
    padding: 80px 0;
  }

  .trending__cards {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include respond-to(xl) {
  .trending__cards {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
