import { defineStore } from "pinia";
import {
  activityFeed,
  financialReports,
  overviewStats,
  providers,
  revenueSeries,
  riskAlerts,
  suspiciousActivities,
  topGames,
  transactions,
  users
} from "../data/mockData";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    overviewStats,
    activityFeed,
    revenueSeries,
    topGames,
    suspiciousActivities,
    users,
    transactions,
    riskAlerts,
    financialReports,
    providers
  }),
  actions: {
    addActivity(item: typeof activityFeed[number]) {
      this.activityFeed = [item, ...this.activityFeed].slice(0, 6);
    }
  }
});
