<template>
  <div class="layout">
    <Header />
    <main>
      <NuxtPage />
    </main>
    <div class="page-transition-overlay" :class="transitionClass"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import Header from "~/components/Header.vue";

const transitionClass = ref("");
const router = useRouter();

router.beforeEach((_to, from, next) => {
  if (from.name) {
    transitionClass.value = "entering";
    setTimeout(() => {
      next();
    }, 600);
  } else {
    next();
  }
});

router.afterEach(() => {
  if (transitionClass.value === "entering") {
    transitionClass.value = "leaving";
    setTimeout(() => {
      transitionClass.value = "";
    }, 600);
  }
});
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  min-height: 768px;
  background: var(--secondary-color);

  main {
    flex: 1;
  }
}

.page-transition-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primary-color);
  z-index: 9999;
  transform: translateX(-100%);
  pointer-events: none;

  &.entering {
    animation: slideIn 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }

  &.leaving {
    animation: slideOut 0.6s cubic-bezier(0.77, 0, 0.175, 1) forwards;
  }
}

@keyframes slideIn {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes slideOut {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
}
</style>
