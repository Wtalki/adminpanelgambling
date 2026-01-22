<script setup lang="ts">
import DataTable from "../components/DataTable.vue";
import { useDashboardStore } from "../stores/dashboard";

const store = useDashboardStore();

const gameColumns = [
  { key: "name", label: "Provider" },
  { key: "status", label: "Status" },
  { key: "games", label: "Games" },
  { key: "revenueShare", label: "Revenue Share" }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">Game Management</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Configure game odds, availability, and provider relationships.</p>
        </div>
        <div class="flex gap-2">
          <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Add Provider</button>
          <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700" type="button">Live Monitor</button>
        </div>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Active games</p>
          <p class="text-2xl font-semibold">462</p>
          <p class="text-xs text-emerald-500">98% uptime</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Live tables</p>
          <p class="text-2xl font-semibold">112</p>
          <p class="text-xs text-slate-500">Across 12 providers</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Performance alerts</p>
          <p class="text-2xl font-semibold">4 open</p>
          <p class="text-xs text-rose-500">2 critical incidents</p>
        </div>
      </div>
    </div>

    <DataTable title="Game Provider Management" :columns="gameColumns" :rows="store.providers" :page-size="5" />
  </section>
</template>
