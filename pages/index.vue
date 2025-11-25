<template>
  <div class="page page-home" @mousemove="onMouseMove">
    <div class="page-home__content">
      <div class="page-home__title-wrapper" :style="titleStyle">
        <MarqueeText />
      </div>

      <div class="page-home__decoration">
        <div class="page-home__decoration-inner">
          <ShowreelButton class="page-home__showreel" />
        </div>
      </div>

      <HomeNavLinks />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useWindowSize } from "~/composables/useWindowSize";
import { useMouseParallax } from "~/composables/useMouseParallax";
import MarqueeText from "~/components/MarqueeText.vue";
import ShowreelButton from "~/components/ShowreelButton.vue";
import HomeNavLinks from "~/components/HomeNavLinks.vue";

const { width } = useWindowSize();
const { offsetX, offsetY, onMouseMove } = useMouseParallax(50);

const rotationAngle = computed(() => (width.value <= 768 ? -30 : -20));

const titleStyle = computed(() => ({
  transform: `translate(calc(-50% + ${offsetX.value}px), calc(-50% + ${offsetY.value}px)) rotate(${rotationAngle.value}deg)`,
}));
</script>

<style scoped lang="scss">
.page-home {
  box-sizing: border-box;
  padding: 20px 24px;
  height: 100%;
  overflow: hidden;

  @media (max-width: 430px) {
    padding: 16px;
  }

  &__content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &__title-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200%;
    transform: translate(-50%, -50%) rotate(-20deg);
    z-index: 2;
    transition: transform 0.3s ease-out;
  }

  &__decoration {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 578px;
    height: 578px;
    z-index: 1;
    transform: translate(-50%, -50%);

    @media (max-width: 1024px), (max-height: 900px) {
      width: 482px;
      height: 482px;
    }

    @media (max-width: 430px) {
      width: 294px;
      height: 294px;
    }
  }

  &__decoration-inner {
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

      @media (max-width: 1024px), (max-height: 900px) {
        width: 482px;
        height: 482px;
      }

      @media (max-width: 430px) {
        width: 294px;
        height: 294px;
        filter: blur(46px);
      }
    }
  }

  &__showreel {
    position: absolute;
    bottom: 23px;
    right: 23px;
    z-index: 2;

    @media (max-width: 430px) {
      bottom: -21px;
      right: 32px;
    }
  }
}
</style>
