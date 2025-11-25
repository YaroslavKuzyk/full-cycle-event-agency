<template>
  <div class="layout">
    <Header />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
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
</style>
