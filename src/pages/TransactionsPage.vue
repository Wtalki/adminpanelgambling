<script setup lang="ts">
import DataTable from "../components/DataTable.vue";
import { useDashboardStore } from "../stores/dashboard";

const store = useDashboardStore();

const columns = [
  { key: "id", label: "Transaction ID" },
  { key: "type", label: "Type" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status" },
  { key: "method", label: "Method" },
  { key: "requested", label: "Requested" }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">Transaction Management</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Approve payouts, manage pending deposits, and detect fraud.</p>
        </div>
        <div class="flex gap-2">
          <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Process Queue</button>
          <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700" type="button">Manual Entry</button>
        </div>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Pending approvals</p>
          <p class="text-2xl font-semibold">42</p>
          <p class="text-xs text-amber-500">8 flagged for review</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">24h volume</p>
          <p class="text-2xl font-semibold">$1.8M</p>
          <p class="text-xs text-emerald-500">+6.4% vs yesterday</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Fraud alerts</p>
          <p class="text-2xl font-semibold">6 open</p>
          <p class="text-xs text-rose-500">2 high severity</p>
        </div>
      </div>
    </div>

    <DataTable title="Transaction History" :columns="columns" :rows="store.transactions" :page-size="6" />
  </section>
</template>
