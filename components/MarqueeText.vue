<template>
  <div class="marquee">
    <div class="marquee__row marquee__row--left">
      <span v-for="i in repeatCount" :key="'left-' + i">{{ text }}</span>
    </div>
    <div class="marquee__row marquee__row--right">
      <span v-for="i in repeatCount" :key="'right-' + i">{{ text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  text?: string;
  repeatCount?: number;
}

withDefaults(defineProps<Props>(), {
  text: "FULL-CYCLE EVENT AGENCY",
  repeatCount: 10,
});
</script>

<style scoped lang="scss">
.marquee {
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__row {
    display: flex;
    white-space: nowrap;
    will-change: transform;

    span {
      font-size: 82px;
      font-weight: 700;
      line-height: 110%;
      text-transform: uppercase;
      padding-right: 60px;

      @media (max-width: 1024px), (max-height: 900px) {
        font-size: 58px;
      }

      @media (max-width: 430px) {
        font-size: 34px;
      }
    }

    &--left {
      animation: marqueeLeft 40s linear infinite;
    }

    &--right {
      animation: marqueeRight 40s linear infinite;
    }
  }
}
</style>
