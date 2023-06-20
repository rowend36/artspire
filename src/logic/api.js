import useSWRV from "swrv";
import LocalStorageCache from "swrv/dist/cache/adapters/localStorage";
import { ref, watch } from "vue";
/**
 * @typedef {string} ImageRef
 * @typedef {("UI/UX"|"Brand"|"Art & Illustration")} ProjectType
 * @typedef {{
 *     id: string,
 *     title: string,
 *     previewImage: ImageRef,
 *     showPreviewImage: boolean|null,
 *     sections: Array<{
 *         image: ImageRef,
 *         description: string,
 *     }>,
 *     footer: ImageRef,
 *     types: Array<ProjectType>
 * }} Project
 */
//Could have just used Sanity client
const PROJECT_ID = "9abgiydw";
const DATASET = "production";
const USE_CDN = false;
const fetcher = (key, options) =>
  fetch(key, options).then((res) => res.json())

const cache = new LocalStorageCache("artspire")

const useSanity = (query, opts) => {
  const m = useSWRV(`https://${PROJECT_ID
    }.${USE_CDN ? "apiCdn" : "api"}.sanity.io/v2021-10-21/data/query/${DATASET
    }?query=${encodeURIComponent(query.replace(/\s{2,}/g, ' '))
    }`, fetcher, { dedupingInterval: 60000, cache });
  const response = ref(undefined);
  watch(m.data, async () => {
    if (!m.data.value) return;
    const result = m.data.value.result;
    if (opts?.single) response.value = result.length > 0 ? result[0] : null;
    else response.value = result;
  }, { immediate: true })
  return response;
}
/**
 * @returns {import('vue').Ref<Array<Partial<Project>>>}
 */
export const useProjectsAPI = function () {
  return useSanity(`*[_type=='portfolio']{
    title,
      "id":_id,
      "previewImage":previewImage.asset._ref,
      types
  }
`)
};
/**
 * 
 * @param {string} id 
 * @returns {import('vue').Ref<Project>}
 */
export const useProjectInfoAPI = function (id) {
  return useSanity(`*[_type=='portfolio' && _id=='${id.replace(/'/g, " ")}']{
    title,
      showPreviewImage,
      "id":_id,
      "previewImage":previewImage.asset._ref,
      "footer":footer.asset._ref,
      sections[]{"image":image.asset._ref,description}
  }
`, { single: true })
};
