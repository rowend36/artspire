import { ref, unref, watch } from "vue";
import "./tab_controller.css";
import { useRoute, useRouter } from "vue-router";

const useTabController = (tabs, href) => {
  const activeTab = ref(tabs[0]);
  const key = "active-" + href.replace(/[^A-Za-z0-9]/g, "-");
  const setActiveTab = (tab) => {
    activeTab.value = tab;
  };
  const router = useRouter();
  const route = useRoute();
  watch(activeTab, () => {
    router.replace(`${href}?${key}=${encodeURIComponent(unref(activeTab))}`);
  });
  watch(
    route,
    () => {
      if (route.path == href && tabs.includes(route.query[key])) {
        setActiveTab(route.query[key]);
      }
    },
    { immediate: true }
  );

  return { activeTab, setActiveTab, tabs };
};

export default useTabController;
