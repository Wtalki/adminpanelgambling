<script setup lang="ts">
import { useDashboardStore } from "../stores/dashboard";

const store = useDashboardStore();
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">Financial Management</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Revenue reporting, payouts, commissions, and reconciliation.</p>
        </div>
        <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Generate Report</button>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div
          v-for="report in store.financialReports"
          :key="report.title"
          class="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
        >
          <p class="text-xs text-slate-500 dark:text-slate-400">{{ report.title }}</p>
          <p class="text-2xl font-semibold">{{ report.value }}</p>
          <div class="mt-1 flex items-center justify-between text-xs">
            <span class="text-emerald-500">{{ report.change }}</span>
            <span class="text-slate-400">{{ report.period }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-2">
      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 class="text-lg font-semibold">Payout Calculations</h3>
        <div class="mt-4 space-y-3 text-sm">
          <div class="flex items-center justify-between">
            <span>Pending payouts</span>
            <span class="font-semibold">$420,000</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Commission rate</span>
            <span class="font-semibold">18%</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Tax withholding</span>
            <span class="font-semibold">12%</span>
          </div>
          <button class="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold dark:border-slate-700" type="button">
            Recalculate payouts
          </button>
        </div>
      </div>

      <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <h3 class="text-lg font-semibold">Reconciliation Status</h3>
        <div class="mt-4 space-y-3 text-sm">
          <div class="flex items-center justify-between">
            <span>Last reconciliation</span>
            <span class="font-semibold">Today 08:45 AM</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Open variances</span>
            <span class="font-semibold text-rose-500">$14,250</span>
          </div>
          <div class="flex items-center justify-between">
            <span>Settlement providers</span>
            <span class="font-semibold">7 active</span>
          </div>
          <button class="mt-2 w-full rounded-lg bg-brand-600 px-3 py-2 text-sm font-semibold text-white" type="button">
            Resolve variances
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
