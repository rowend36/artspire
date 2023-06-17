import { computed } from "vue";
/**
 * @typedef {import("vue").Ref} Ref
 * @template {[]} T
 * @template V
 * @typedef {(...args:T)=>V} Callback
 */
/**
 * @template W
 * @param {Callback<[], W>} getter
 * @returns {W} Unwrapped ref where each property is reactive
 */
export default function useDeep(getter) {
  if (typeof getter == "function") getter = computed(getter);
  const ref = getter;
  const res = {};
  for (let key of Object.keys(ref.value)) {
    res[key] = computed(() => ref.value[key]);
  }
  return res;
}
