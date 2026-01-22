<script setup lang="ts">
import { computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Filler
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Filler);

const props = defineProps<{ series: number[] }>();

const labels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

const chartData = computed(() => ({
  labels,
  datasets: [
    {
      label: "Revenue",
      data: props.series,
      borderColor: "#2d6cff",
      backgroundColor: "rgba(45, 108, 255, 0.2)",
      tension: 0.4,
      fill: true
    }
  ]
}));

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    y: {
      ticks: {
        callback: (value: number) => `$${Number(value) / 1000}k`
      },
      grid: {
        color: "rgba(148, 163, 184, 0.2)"
      }
    },
    x: {
      grid: {
        display: false
      }
    }
  }
};
</script>

<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">Revenue Performance</h3>
      <div class="flex gap-2 text-xs">
        <button class="rounded-lg bg-brand-600 px-3 py-1 font-semibold text-white" type="button">Monthly</button>
        <button class="rounded-lg border border-slate-200 px-3 py-1 font-semibold dark:border-slate-700" type="button">Weekly</button>
        <button class="rounded-lg border border-slate-200 px-3 py-1 font-semibold dark:border-slate-700" type="button">Daily</button>
      </div>
    </div>
    <div class="mt-4 h-64">
      <Line :data="chartData" :options="chartOptions" />
    </div>
  </div>
</template>
