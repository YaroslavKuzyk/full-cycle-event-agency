import { ref, onMounted, onUnmounted } from "vue";

export const useWindowSize = () => {
  const width = ref(1024);
  const height = ref(768);

  const update = () => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  onMounted(() => {
    update();
    window.addEventListener("resize", update);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", update);
  });

  return { width, height };
};
