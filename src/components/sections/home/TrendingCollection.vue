<template>
  <section class="trending">
    <HeadingH2
      text="Trending Collection"
      extra-class="trending__title"
    />
    <Text
      value="Checkout our weekly updated trending collection."
    />
  </section>
</template>

<script setup lang="ts">
import HeadingH2 from '@/components/ui/HeadingH2.vue'
import Text from '@/components/ui/Text.vue'
</script>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.trending {
  padding: 40px 0;
}

.trending__title {
  margin-bottom: 10px;
}

@include respond-to(lg) {
  .trending {
    padding: 80px 0;
  }
}
</style>
