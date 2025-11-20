<template>
    <section class="trending">
      <h2>Trending Collection</h2>
      <p>Checkout our weekly updated trending collection.</p>
      
    </section>
  </template>
  
  <script setup lang="ts">
  // import { RouterLink } from 'vue-router'
  // import Button from '@/components/ui/Button.vue';
  </script>
  
  <style scoped lang="scss">
  @use '@/styles/mixins' as *;
  
  .trending {
    padding: 40px 0;
  }
  
  @include respond-to(lg) {
    .trending {
      padding: 80px 0;
    }
  }
  
  // @include respond-to(xl) {
  //   .hero__title {
  //     font-size: 68px;
  //     line-height: 1.1;
  //   }
  // }
  </style>
  