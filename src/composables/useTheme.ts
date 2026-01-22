import { onMounted, ref } from "vue";

const STORAGE_KEY = "dashboard-theme";

export const useTheme = () => {
  const theme = ref<"light" | "dark">("light");

  const applyTheme = (nextTheme: "light" | "dark") => {
    theme.value = nextTheme;
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    localStorage.setItem(STORAGE_KEY, nextTheme);
  };

  const toggleTheme = () => {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  };

  onMounted(() => {
    const saved = localStorage.getItem(STORAGE_KEY) as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(saved ?? (prefersDark ? "dark" : "light"));
  });

  return { theme, toggleTheme };
};
