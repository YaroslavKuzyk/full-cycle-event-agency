<template>
  <div class="burger-menu">
    <button class="burger-menu__button">
      <span></span>
      <span></span>
    </button>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.burger-menu {
  &__button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 22px;
    height: 10px;

    background: transparent;
    border: none;
    padding: 0;

    span {
      width: 100%;
      height: 1px;

      background-color: var(--dark-color);
    }
  }
}
</style>
