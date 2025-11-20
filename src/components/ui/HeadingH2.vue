<script setup lang="ts">
interface UiHeadingH2Props {
  text: string
  extraClass?: string | string[]
}

const props = defineProps<UiHeadingH2Props>()
</script>

<template>
  <h2
    :class="[
      'ui-heading',
      'ui-heading--level-2',
      props.extraClass
    ]"
  >
    {{ props.text }}
  </h2>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.ui-heading {
  font-weight: 600;
}

.ui-heading--level-2 {
  font-size: 28px;
  line-height: 1.4;
}

@include respond-to(lg) {
  .ui-heading--level-2 {
    font-size: 38px;
    line-height: 1.2;
  }
}
</style>
