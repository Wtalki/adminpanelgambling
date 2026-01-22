import { computed, ref } from "vue";

const translations = {
  en: {
    dashboard: "Admin Dashboard",
    quickAction: "Quick Action",
    searchPlaceholder: "Search players, bets, transactions"
  },
  es: {
    dashboard: "Panel de Administración",
    quickAction: "Acción Rápida",
    searchPlaceholder: "Buscar jugadores, apuestas, transacciones"
  },
  fr: {
    dashboard: "Tableau de Bord",
    quickAction: "Action Rapide",
    searchPlaceholder: "Rechercher joueurs, mises, transactions"
  }
};

const locale = ref<keyof typeof translations>("en");

export const useI18n = () => {
  const t = computed(() => (key: keyof (typeof translations)["en"]) => translations[locale.value][key]);

  return {
    locale,
    t
  };
};
