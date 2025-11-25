<template>
  <div class="lang-dropdown">
    <button class="lang-dropdown__button">
      <IconLang class="lang-dropdown__icon" />
    </button>
  </div>
</template>

<script setup lang="ts">
import IconLang from "@/components/icons/IconLang.vue";
</script>

<style scoped lang="scss">
.lang-dropdown {
  &__button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 38px;
    height: 38px;

    border: 1px solid var(--light-color);
    border-radius: 50%;

    background: transparent;
  }

  &__icon {
    width: 15px;
    height: 21px;
  }
}
</style>
