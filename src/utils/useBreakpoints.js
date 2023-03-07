import {computed, onMounted, onUnmounted, ref} from "vue";

export function useWindowWidth() {
    let windowWidth = ref(window.innerWidth);

    const onWidthChange = () => (windowWidth.value = window.innerWidth);
    onMounted(() => window.addEventListener("resize", onWidthChange));
    onUnmounted(() => window.removeEventListener("resize", onWidthChange));

    return windowWidth;
}

export default function useBreakpoints() {
    const windowWidth = useWindowWidth();
    return {
        isMobile: windowWidth.value < 600,
        isTablet: windowWidth.value < 1280 && windowWidth.value >= 600,
        isDesktop: windowWidth.value >= 1280,
        isWideScreen: windowWidth.value >= 600,
        stop: ["xs", "sm", "md", "lg", "xl"][
            [600, 768, 1280, 1536, Infinity].findIndex(
                (e) => windowWidth.value < e
            )
        ],
    };
}
