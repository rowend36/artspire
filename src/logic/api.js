import useSWRV from "swrv";
import image from "@/assets/profile.png";
import { computed, ref } from "vue";
import delay from "../utils/delay";

const ROOT = "https://reelest.pythoanywhere.com";

const fetcher = (url, init) => {
  return fetch(`${ROOT}/${url}`, init);
};
const store = ref();
/**
 * @typedef {("UI/UX"|"Brand"|"Art & Illustration")} ProjectType
 */
export const useProjectsAPI = function () {
  return computed(() =>
    store.value?.map?.(({ id, title, image, types, type }) => ({
      id,
      title,
      image,
      types,
      type,
    }))
  );
};

export const useProjectInfoAPI = function (id) {
  return computed(() => store.value?.find?.((e) => e.id === id));
};

(async () => {
  await delay(1000);
  store.value = [
    {
      id: "0",
      title: "Built a nice API",
      image: image,
      sections: [
        {
          image: image,
          description: "The image is awesome",
        },
      ],
      footer: image,
      types: ["UI/UX", "Brand", "Art & Illustration"],
    },
    {
      id: "0",
      title: "Built a nice API",
      image: image,
      images: [],
      footer: image,
      types: ["UI/UX", "Brand", "Art & Illustration"],
    },
    {
      id: "0",
      title: "Built a nice API",
      image: image,
      images: [],
      footer: image,
      types: ["UI/UX", "Brand", "Art & Illustration"],
    },
    {
      id: "0",
      title: "Built a nice API",
      image: image,
      images: [],
      footer: image,
      types: ["UI/UX", "Brand", "Art & Illustration"],
    },
    {
      id: "0",
      title: "Built a nice API",
      image: image,
      images: [],
      footer: image,
      types: ["UI/UX", "Brand", "Art & Illustration"],
    },
    {
      id: "0",
      title: "Built a nice API",
      image: image,
      images: [],
      footer: image,
      types: ["UI/UX", "Brand", "Art & Illustration"],
    },
  ];
})();
