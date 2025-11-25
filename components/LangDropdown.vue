<template>
  <div
    class="lang-dropdown"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <button class="lang-dropdown__button">
      <IconLang class="lang-dropdown__icon" />
    </button>

    <div class="lang-dropdown__menu" :class="{ 'is-open': isOpen }">
      <button
        v-for="(lang, index) in languages"
        :key="lang.code"
        class="lang-dropdown__item"
        :class="{ 'is-active': currentLang === lang.code }"
        :style="{ transitionDelay: isOpen ? `${index * 100}ms` : '0ms' }"
        @click="setLang(lang.code)"
      >
        {{ lang.label }}
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconLang from "~/components/icons/IconLang.vue";

interface Language {
  code: string;
  label: string;
}

const isOpen = ref(false);
const currentLang = ref("ua");

const languages: Language[] = [
  { code: "eng", label: "ENG" },
  { code: "ua", label: "UA" },
];

const setLang = (code: string) => {
  currentLang.value = code;
};
</script>

<style scoped lang="scss">
.lang-dropdown {
  position: relative;

  &__button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border: 1px solid var(--light-color);
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }

  &__icon {
    width: 15px;
    height: 21px;
  }

  &__menu {
    position: absolute;
    top: 50%;
    left: 100%;
    transform: translateY(-50%);
    display: flex;
    gap: 8px;
    padding-left: 12px;
    pointer-events: none;

    &.is-open {
      pointer-events: auto;
    }

    @media (max-width: 430px) {
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      flex-direction: column;
      align-items: center;
      padding-left: 0;
      padding-top: 12px;
    }
  }

  &__item {
    position: relative;
    opacity: 0;
    transform: translateX(-20px);
    transition: opacity 0.3s ease, transform 0.3s ease, color 0.5s ease;
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
    text-transform: lowercase;
    color: var(--primary-color);
    padding-bottom: 3px;
    cursor: pointer;

    @media (max-width: 430px) {
      font-size: 14px;
      transform: translateY(-10px);
    }

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

    &.is-active::after {
      width: 100%;
    }

    .is-open & {
      opacity: 1;
      transform: translateX(0);

      @media (max-width: 430px) {
        transform: translateY(0);
      }
    }
  }
}
</style>
