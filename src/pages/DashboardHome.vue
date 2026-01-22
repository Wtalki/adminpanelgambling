<script setup lang="ts">
import ActivityFeed from "../components/ActivityFeed.vue";
import RevenueChart from "../components/RevenueChart.vue";
import StatCard from "../components/StatCard.vue";
import DataTable from "../components/DataTable.vue";
import { useDashboardStore } from "../stores/dashboard";
import { useRealtime } from "../composables/useRealtime";

const store = useDashboardStore();
useRealtime();

const topGamesColumns = [
  { key: "name", label: "Game" },
  { key: "provider", label: "Provider" },
  { key: "bets", label: "Total Bets" },
  { key: "revenue", label: "Revenue" },
  { key: "rtp", label: "RTP" }
];

const suspiciousColumns = [
  { key: "id", label: "Alert ID" },
  { key: "player", label: "Player" },
  { key: "risk", label: "Risk" },
  { key: "reason", label: "Reason" },
  { key: "status", label: "Status" }
];
</script>

<template>
  <section class="space-y-6">
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      <StatCard
        v-for="stat in store.overviewStats"
        :key="stat.label"
        :label="stat.label"
        :value="stat.value"
        :delta="stat.delta"
        :trend="stat.trend"
        :description="stat.description"
      />
    </div>

    <div class="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
      <RevenueChart :series="store.revenueSeries" />
      <ActivityFeed :items="store.activityFeed" />
    </div>

    <div class="grid gap-6 xl:grid-cols-2">
      <DataTable title="Top Performing Games" :columns="topGamesColumns" :rows="store.topGames" :page-size="4" />
      <DataTable title="Recent Suspicious Activities" :columns="suspiciousColumns" :rows="store.suspiciousActivities" :page-size="4" />
    </div>
  </section>
</template>
