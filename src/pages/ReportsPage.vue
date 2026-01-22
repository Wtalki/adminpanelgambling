<script setup lang="ts">
const reportSegments = [
  {
    title: "Player Segmentation",
    detail: "Analyze cohorts by spend, risk, and lifecycle.",
    status: "Updated 2 min ago"
  },
  {
    title: "Game Performance Metrics",
    detail: "Track RTP, volatility, and engagement metrics.",
    status: "Updated 10 min ago"
  },
  {
    title: "Market Expansion",
    detail: "Compare revenue and retention by region.",
    status: "Updated 1 hour ago"
  }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">Reporting & Analytics</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Build custom reports and export insights.</p>
        </div>
        <div class="flex gap-2">
          <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Create Report</button>
          <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700" type="button">Export Excel</button>
        </div>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Custom reports</p>
          <p class="text-2xl font-semibold">24</p>
          <p class="text-xs text-slate-500">8 scheduled</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Exports this week</p>
          <p class="text-2xl font-semibold">312</p>
          <p class="text-xs text-slate-500">CSV, PDF, Excel</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Live dashboards</p>
          <p class="text-2xl font-semibold">9</p>
          <p class="text-xs text-slate-500">Updated every 60s</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-3">
      <div
        v-for="segment in reportSegments"
        :key="segment.title"
        class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
      >
        <h3 class="text-lg font-semibold">{{ segment.title }}</h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">{{ segment.detail }}</p>
        <p class="mt-4 text-xs text-slate-400">{{ segment.status }}</p>
        <button class="mt-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold dark:border-slate-700" type="button">
          Open dashboard
        </button>
      </div>
    </div>
  </section>
</template>
