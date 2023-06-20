import { onMounted, onUnmounted } from "vue";

export default function useInterval(start, interval) {
  let i;
  onMounted(() => {
    i = setInterval(start, interval);
  });
  onUnmounted(() => {
    clearInterval(i);
  });
}
