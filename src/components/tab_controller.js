import { ref } from "vue";

const useTabController = (tabs) => {
  const activeTab = ref(tabs[0]);
  const setActiveTab = (tab) => {
    activeTab.value = tab;
    console.log(activeTab);
  };
  return { activeTab, setActiveTab, tabs };
};

export default useTabController;
