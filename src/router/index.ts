import { createRouter, createWebHistory } from "vue-router";
import DashboardHome from "../pages/DashboardHome.vue";
import UsersPage from "../pages/UsersPage.vue";
import PlayersPage from "../pages/PlayersPage.vue";
import TransactionsPage from "../pages/TransactionsPage.vue";
import GamesPage from "../pages/GamesPage.vue";
import RiskPage from "../pages/RiskPage.vue";
import FinancialPage from "../pages/FinancialPage.vue";
import ReportsPage from "../pages/ReportsPage.vue";
import SettingsPage from "../pages/SettingsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Dashboard", component: DashboardHome },
    { path: "/users", name: "Users", component: UsersPage },
    { path: "/players", name: "Players", component: PlayersPage },
    { path: "/transactions", name: "Transactions", component: TransactionsPage },
    { path: "/games", name: "Games", component: GamesPage },
    { path: "/risk", name: "Risk", component: RiskPage },
    { path: "/financial", name: "Financial", component: FinancialPage },
    { path: "/reports", name: "Reports", component: ReportsPage },
    { path: "/settings", name: "Settings", component: SettingsPage }
  ]
});

export default router;
