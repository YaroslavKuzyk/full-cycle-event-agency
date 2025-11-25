<template>
  <button
    ref="buttonRef"
    class="showreel-button"
    @mouseenter="startRotation"
    @mouseleave="stopRotation"
  >
    <IconShowreel />
  </button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import IconShowreel from "~/components/icons/IconShowreel.vue";

const buttonRef = ref<HTMLButtonElement | null>(null);
let rotation = 0;
let animationId: number | null = null;
let isHovering = false;

const animate = () => {
  if (!buttonRef.value) return;

  const targetRotation = Math.round(rotation / 360) * 360;

  if (isHovering || Math.abs(targetRotation - rotation) > 1) {
    rotation -= 2;
    buttonRef.value.style.transform = `rotate(${rotation}deg)`;
    animationId = requestAnimationFrame(animate);
  } else {
    rotation = targetRotation;
    buttonRef.value.style.transform = `rotate(${rotation}deg)`;
    animationId = null;
  }
};

const startRotation = () => {
  isHovering = true;
  if (!animationId) {
    animate();
  }
};

const stopRotation = () => {
  isHovering = false;
};
</script>

<style scoped lang="scss">
.showreel-button {
  background: transparent;
  border: none;
  cursor: pointer;
}
</style>
