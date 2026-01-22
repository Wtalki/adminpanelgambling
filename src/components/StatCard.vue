<script setup lang="ts">
import { computed } from "vue";

interface Props {
  label: string;
  value: string;
  delta: string;
  description: string;
  trend: "up" | "down";
}

const props = defineProps<Props>();

const trendClass = computed(() =>
  props.trend === "up" ? "text-emerald-600" : "text-rose-500"
);
</script>

<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">{{ label }}</p>
    <div class="mt-3 flex items-baseline justify-between">
      <p class="text-2xl font-semibold">{{ value }}</p>
      <span class="text-xs font-semibold" :class="trendClass">{{ delta }}</span>
    </div>
    <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">{{ description }}</p>
  </div>
</template>
