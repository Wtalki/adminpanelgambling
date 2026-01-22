<script setup lang="ts">
interface ActivityItem {
  id: number;
  title: string;
  detail: string;
  time: string;
  tone: "success" | "warning" | "info" | "neutral";
}

defineProps<{ items: ActivityItem[] }>();

const toneClasses: Record<ActivityItem["tone"], string> = {
  success: "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-200",
  warning: "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-200",
  info: "bg-brand-100 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200",
  neutral: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300"
};
</script>

<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Real-time Activity</h3>
      <button class="text-xs font-semibold text-brand-600 dark:text-brand-300" type="button">View all</button>
    </div>
    <ul class="mt-4 space-y-4">
      <li v-for="item in items" :key="item.id" class="flex gap-3">
        <span class="mt-1 h-2 w-2 rounded-full" :class="toneClasses[item.tone]" />
        <div>
          <p class="text-sm font-semibold">{{ item.title }}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">{{ item.detail }}</p>
          <p class="mt-1 text-xs text-slate-400">{{ item.time }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
