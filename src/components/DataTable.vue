<script setup lang="ts">
import { computed } from "vue";
import { usePagination } from "../composables/usePagination";

interface Column {
  key: string;
  label: string;
}

interface Props {
  columns: Column[];
  rows: Record<string, string | number>[];
  pageSize?: number;
  title: string;
}

const props = withDefaults(defineProps<Props>(), {
  pageSize: 5
});

const { page, totalPages, pagedRows, next, prev } = usePagination(props.rows, props.pageSize);

const hasNext = computed(() => page.value < totalPages.value);
const hasPrev = computed(() => page.value > 1);
</script>

<template>
  <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
    <div class="flex items-center justify-between">
      <h3 class="text-lg font-semibold">{{ title }}</h3>
      <div class="flex items-center gap-2">
        <button class="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold dark:border-slate-700" type="button">
          Export CSV
        </button>
        <button class="rounded-lg border border-slate-200 px-3 py-1 text-xs font-semibold dark:border-slate-700" type="button">
          Export PDF
        </button>
      </div>
    </div>
    <div class="mt-4 overflow-x-auto">
      <table class="min-w-full text-left text-sm">
        <thead class="text-xs uppercase text-slate-500 dark:text-slate-400">
          <tr>
            <th v-for="column in columns" :key="column.key" class="px-3 py-2">{{ column.label }}</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
          <tr v-for="(row, index) in pagedRows" :key="index" class="text-sm text-slate-700 dark:text-slate-200">
            <td v-for="column in columns" :key="column.key" class="px-3 py-2">
              <slot v-if="column.key === 'actions' && $slots.actions" name="actions" :row="row"></slot>
              <template v-else>
                {{ row[column.key] }}
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="mt-4 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
      <span>Page {{ page }} of {{ totalPages }}</span>
      <div class="flex gap-2">
        <button
          class="rounded-lg border border-slate-200 px-3 py-1 font-semibold disabled:opacity-40 dark:border-slate-700"
          type="button"
          :disabled="!hasPrev"
          @click="prev"
        >
          Prev
        </button>
        <button
          class="rounded-lg border border-slate-200 px-3 py-1 font-semibold disabled:opacity-40 dark:border-slate-700"
          type="button"
          :disabled="!hasNext"
          @click="next"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
