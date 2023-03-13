import { ref } from "vue";
import "./tab_controller.css"

const useTabController = (tabs) => {
  const activeTab = ref(tabs[0]);
  const setActiveTab = (tab) => {
    activeTab.value = tab;
  };
  return { activeTab, setActiveTab, tabs };
};

export default useTabController;
