<template>
  <nav class="home-nav">
    <div class="home-nav__item home-nav__item--left">
      <NuxtLink class="home-nav__link" :to="{ name: 'test' }">Where ?</NuxtLink>
    </div>
    <div class="home-nav__item home-nav__item--right">
      <NuxtLink class="home-nav__link" :to="{ name: 'test' }">What ?</NuxtLink>
    </div>
    <div class="home-nav__item home-nav__item--bottom">
      <NuxtLink class="home-nav__link" :to="{ name: 'test' }">Who ?</NuxtLink>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.home-nav {
  &__item {
    position: absolute;
    z-index: 1;

    &--left {
      left: -43px;
      transform: rotate(-90deg);
    }

    &--right {
      right: -36px;
      transform: rotate(90deg);
    }

    &--bottom {
      bottom: 0;
    }

    @media (max-width: 430px) {
      display: none;
    }
  }

  &__link {
    position: relative;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-transform: lowercase;
    text-decoration: none;
    color: var(--primary-color);
    padding-bottom: 3px;
    transition: color 0.5s ease;

    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 1px;
      background-color: var(--primary-color);
      transition: width 0.5s ease;
    }

    &:hover {
      color: var(--light-color);

      &::after {
        width: 100%;
        background-color: var(--light-color);
      }
    }
  }
}
</style>
