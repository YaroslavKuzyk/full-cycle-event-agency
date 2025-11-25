<template>
  <header class="header">
    <LangDropdown />

    <IconLogo />

    <BurgerMenu class="header__burger-menu" />
  </header>
</template>

<script setup lang="ts">
import IconLogo from "@/components/icons/IconLogo.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 24px;

  &__burger-menu {
    opacity: 0;
    pointer-events: none;
  }
}
</style>
