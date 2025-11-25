<template>
  <button class="burger-menu">
    <span></span>
    <span></span>
  </button>
</template>

<style scoped lang="scss">
.burger-menu {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22px;
  height: 10px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  span {
    width: 100%;
    height: 1px;
    background-color: var(--dark-color);
  }
}
</style>
