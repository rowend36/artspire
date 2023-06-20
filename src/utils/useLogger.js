import { watch } from "vue";

let i = 0;
export default function useLogger(ref, name = "ref(" + ref.value + ")") {
  console.log("watching " + name);
  watch(ref, () => console.log(name + " changed to ", ref.value));
}
