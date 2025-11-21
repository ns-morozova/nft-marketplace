<template>
  <section class="trending">
    <div class="trending__heading">
      <HeadingH2 text="Trending Collection" />
      <Text value="Checkout our weekly updated trending collection." />
    </div>

    <CardCollection />
    
  </section>
</template>

<script setup lang="ts">
import HeadingH2 from '@/components/ui/HeadingH2.vue'
import Text from '@/components/ui/Text.vue'
import CardCollection from '@/components/cards/CardCollection.vue'
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

// .trending__title {
//   margin-bottom: 10px;
// }

@include respond-to(lg) {
  .trending {
    padding: 80px 0;
  }
}
</style>
