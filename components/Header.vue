<template>
  <header class="header">
    <LangDropdown />
    <IconLogo />
    <BurgerMenu class="header__burger-menu" />
  </header>
</template>

<script setup lang="ts">
import IconLogo from "~/components/icons/IconLogo.vue";
import LangDropdown from "~/components/LangDropdown.vue";
import BurgerMenu from "~/components/BurgerMenu.vue";
</script>

<style scoped lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 24px 0 24px;

  @media (max-width: 430px) {
    padding: 16px 16px 0 16px;
  }

  &__burger-menu {
    opacity: 0;
    pointer-events: none;

    @media (max-width: 430px) {
      opacity: 1;
      pointer-events: all;
    }
  }
}
</style>
