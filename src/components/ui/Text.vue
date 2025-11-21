<script setup lang="ts">
interface UiHeadingH2Props {
  value: string
  extraClass?: string | string[]
}

const props = defineProps<UiHeadingH2Props>()
</script>

<template>
  <p
    :class="[
      'ui-text',
      props.extraClass
    ]"
  >
    {{ props.value }}
  </p>
</template>

<style scoped lang="scss">
@use '@/styles/mixins' as *;

.ui-text {
    line-height: 1.4;
}

@include respond-to(lg) {
  .ui-text {
    font-size: 22px;
    line-height: 1.6;
  }
}
</style>
