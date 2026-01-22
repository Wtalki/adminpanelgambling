<script setup lang="ts">
import { computed } from "vue";
import { useToast } from "../composables/useToast";

const { toasts } = useToast();

const toneClasses = computed(() => (tone: string) => {
  switch (tone) {
    case "success":
      return "border-emerald-400 bg-emerald-50 text-emerald-900 dark:bg-emerald-500/10 dark:text-emerald-200";
    case "warning":
      return "border-amber-400 bg-amber-50 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200";
    case "error":
      return "border-rose-400 bg-rose-50 text-rose-900 dark:bg-rose-500/10 dark:text-rose-200";
    default:
      return "border-brand-400 bg-brand-50 text-brand-900 dark:bg-brand-500/10 dark:text-brand-200";
  }
});
</script>

<template>
  <div class="fixed right-6 top-6 z-50 flex w-80 flex-col gap-3">
    <div
      v-for="toast in toasts"
      :key="toast.id"
      class="rounded-xl border px-4 py-3 text-sm shadow"
      :class="toneClasses(toast.tone)"
    >
      <p class="font-semibold">{{ toast.title }}</p>
      <p v-if="toast.description" class="text-xs opacity-80">{{ toast.description }}</p>
    </div>
  </div>
</template>
