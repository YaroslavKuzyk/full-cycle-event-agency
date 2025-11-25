<template>
  <div class="page page-home">
    <div class="page-home__content">
      <div class="page-home__title-wrapper">
        <h1 class="page-home__title">FULL-CYCLE EVENT AGENCY</h1>
      </div>

      <div class="page-home__title-decoration">
        <div class="page-home__title-decoration__inner">
          <button class="page-home__showreel-button">
            <IconShowreel />
          </button>
        </div>
      </div>

      <div class="page-home__nav page-home__nav--left">
        <NuxtLink class="page-home__nav-link" to="/">Where ?</NuxtLink>
      </div>

      <div class="page-home__nav page-home__nav--right">
        <NuxtLink class="page-home__nav-link" to="/">What ?</NuxtLink>
      </div>

      <div class="page-home__nav page-home__nav--bottom">
        <NuxtLink class="page-home__nav-link" to="/">Who ?</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconShowreel from "~/components/icons/IconShowreel.vue";
</script>

<style scoped lang="scss">
.page-home {
  box-sizing: border-box;
  padding: 20px 24px;
  height: 100%;

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__title-wrapper {
    position: relative;
  }

  &__title {
    position: relative;
    z-index: 2;
    font-size: 82px;
    font-weight: 700;
    line-height: 110%;
    text-align: center;
    text-transform: uppercase;
    max-width: 1024px;
  }

  &__nav {
    position: absolute;
    z-index: 1;

    &--left {
      left: 0;
      transform: rotate(-90deg);
    }

    &--right {
      right: 0;
      transform: rotate(90deg);
    }

    &--bottom {
      bottom: 0;
    }
  }

  &__title-decoration {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 578px;
    height: 578px;
    z-index: 1;
    transform: translate(-50%, -50%);
  }

  &__title-decoration__inner {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;

    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 578px;
      height: 578px;
      background-color: var(--warning-color);
      transform: translate(-50%, -50%);
      border-radius: 50%;
      z-index: 1;
      filter: blur(76px);
    }
  }

  &__showreel-button {
    position: absolute;
    bottom: 23px;
    right: 23px;
    z-index: 2;

    background: transparent;
    border: none;

    &:hover {
      animation: infiniteBackwardRotate 5s linear infinite;
    }
  }

  &__nav-link {
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
