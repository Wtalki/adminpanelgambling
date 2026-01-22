<script setup lang="ts">
import DataTable from "../components/DataTable.vue";
import { useDashboardStore } from "../stores/dashboard";

const store = useDashboardStore();

const alertsColumns = [
  { key: "id", label: "Alert" },
  { key: "title", label: "Trigger" },
  { key: "detail", label: "Detail" },
  { key: "severity", label: "Severity" }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">Risk & Compliance</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Monitor player behavior and AML compliance in real time.</p>
        </div>
        <div class="flex gap-2">
          <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Run AML Check</button>
          <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700" type="button">Configure Rules</button>
        </div>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-4">
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Real-time risk score</p>
          <p class="text-2xl font-semibold text-amber-500">71 / 100</p>
          <p class="text-xs text-slate-500">Elevated</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Suspicious sessions</p>
          <p class="text-2xl font-semibold">34</p>
          <p class="text-xs text-slate-500">Last 24h</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Responsible gaming flags</p>
          <p class="text-2xl font-semibold">12</p>
          <p class="text-xs text-slate-500">6 self-exclusions</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">KYC in review</p>
          <p class="text-2xl font-semibold">18</p>
          <p class="text-xs text-slate-500">Avg SLA 2h</p>
        </div>
      </div>
    </div>

    <DataTable title="Suspicious Activity Alerts" :columns="alertsColumns" :rows="store.riskAlerts" :page-size="5" />
  </section>
</template>
