import { watch } from "vue";

export default function useLogger(ref, name = "ref(" + ref.value + ")") {
  if (!import.meta.env.DEV) return;
  console.log("watching " + name);
  watch(ref, () => console.log(name + " changed to ", ref.value));
}
