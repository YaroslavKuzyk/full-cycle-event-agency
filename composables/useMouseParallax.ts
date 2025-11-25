import { ref, computed } from "vue";

export const useMouseParallax = (sensitivity = 50) => {
  const mouseX = ref(0);
  const mouseY = ref(0);

  const onMouseMove = (e: MouseEvent) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    mouseX.value = (e.clientX - centerX) / sensitivity;
    mouseY.value = (e.clientY - centerY) / sensitivity;
  };

  const offsetX = computed(() => mouseX.value);
  const offsetY = computed(() => mouseY.value);

  return { offsetX, offsetY, onMouseMove };
};
