<template>
    <section class="creators">
      <div class="creators__heading">
        <HeadingH2 text="Top creators" />
        <Text value="Checkout Top Rated Creators on the NFT Marketplace" />
      </div>
      <div class="creators__cards"></div>
    </section>
  </template>
  
  <script setup lang="ts">
  import HeadingH2 from '@/components/ui/HeadingH2.vue'
  import Text from '@/components/ui/Text.vue'
//   import CardCreator from '@/components/cards/CardCreator.vue';
  </script>
  
  <style scoped lang="scss">
  @use '@/styles/mixins' as *;
  
  .creators {
    padding: 40px 0;
  }
  
  .creators__heading {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 40px;
  }
  
  @include respond-to(md) {
    .creators {
      padding: 80px 0;
    }
  }
  </style>
  