<script setup lang="ts">
import { BellIcon, MagnifyingGlassIcon, PlusIcon } from "@heroicons/vue/24/outline";
import { useI18n } from "../composables/useI18n";
import { useTheme } from "../composables/useTheme";
import { useUserStore } from "../stores/user";

const { toggleTheme, theme } = useTheme();
const { locale, t } = useI18n();
const user = useUserStore();
</script>

<template>
  <header class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900">
    <div>
      <p class="text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">Gambling Platform</p>
      <h1 class="text-2xl font-semibold">{{ t("dashboard") }}</h1>
    </div>

    <div class="flex flex-1 items-center justify-center max-w-xl">
      <div class="relative w-full">
        <MagnifyingGlassIcon class="pointer-events-none absolute left-3 top-3 h-5 w-5 text-slate-400" />
        <input
          type="text"
          :placeholder="t('searchPlaceholder')"
          class="w-full rounded-xl border border-slate-200 bg-slate-50 py-2 pl-10 pr-4 text-sm focus:border-brand-500 focus:ring-brand-500 dark:border-slate-700 dark:bg-slate-800"
        />
      </div>
    </div>

    <div class="flex items-center gap-3">
      <button class="flex items-center gap-2 rounded-xl bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow" type="button">
        <PlusIcon class="h-4 w-4" />
        {{ t("quickAction") }}
      </button>
      <select
        v-model="locale"
        class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
      >
        <option value="en">EN</option>
        <option value="es">ES</option>
        <option value="fr">FR</option>
      </select>
      <select
        v-model="user.role"
        class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
      >
        <option>Admin</option>
        <option>Manager</option>
        <option>Support</option>
      </select>
      <button
        class="rounded-xl border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:text-slate-300"
        type="button"
        @click="toggleTheme"
      >
        {{ theme === "dark" ? "Light Mode" : "Dark Mode" }}
      </button>
      <button class="relative rounded-xl border border-slate-200 p-2 dark:border-slate-700" type="button">
        <BellIcon class="h-5 w-5 text-slate-500 dark:text-slate-300" />
        <span class="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-brand-600 text-[10px] text-white">{{ user.notifications }}</span>
      </button>
      <div class="flex items-center gap-2 rounded-xl border border-slate-200 px-3 py-2 dark:border-slate-700">
        <div class="flex h-8 w-8 items-center justify-center rounded-full bg-brand-600 text-xs font-semibold text-white">
          {{ user.initials }}
        </div>
        <div class="text-left">
          <p class="text-sm font-semibold">{{ user.name }}</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">{{ user.role }}</p>
        </div>
      </div>
    </div>
  </header>
</template>
