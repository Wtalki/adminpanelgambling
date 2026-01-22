<script setup lang="ts">
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import {
  ChartBarIcon,
  UserGroupIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  Squares2X2Icon,
  Cog6ToothIcon,
  ClipboardDocumentListIcon,
  BanknotesIcon,
  SparklesIcon
} from "@heroicons/vue/24/outline";

const route = useRoute();
const collapsed = ref(false);

const navItems = [
  { name: "Dashboard", to: "/", icon: ChartBarIcon },
  { name: "Users", to: "/users", icon: UserGroupIcon },
  { name: "Players", to: "/players", icon: SparklesIcon },
  { name: "Transactions", to: "/transactions", icon: BanknotesIcon },
  { name: "Games", to: "/games", icon: Squares2X2Icon },
  { name: "Risk & Compliance", to: "/risk", icon: ShieldCheckIcon },
  { name: "Financial", to: "/financial", icon: CurrencyDollarIcon },
  { name: "Reports", to: "/reports", icon: ClipboardDocumentListIcon },
  { name: "Settings", to: "/settings", icon: Cog6ToothIcon }
];

const isActive = (path: string) => computed(() => route.path === path);

const toggle = () => {
  collapsed.value = !collapsed.value;
};
</script>

<template>
  <aside
    :class="[
      'flex h-full flex-col border-r border-slate-200 bg-white px-4 py-6 shadow-sm transition-all duration-300 dark:border-slate-800 dark:bg-slate-900',
      collapsed ? 'w-20' : 'w-72'
    ]"
  >
    <div class="flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-600 text-white">GA</div>
        <div v-if="!collapsed" class="leading-tight">
          <p class="text-sm font-semibold">Gambling Admin</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Control Center</p>
        </div>
      </div>
      <button
        class="rounded-lg border border-slate-200 p-2 text-slate-500 transition hover:bg-slate-100 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
        type="button"
        @click="toggle"
      >
        <span class="text-xs">{{ collapsed ? ">" : "<" }}</span>
      </button>
    </div>

    <nav class="mt-8 space-y-2">
      <router-link
        v-for="item in navItems"
        :key="item.name"
        :to="item.to"
        class="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition"
        :class="
          isActive(item.to).value
            ? 'bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200'
            : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
        "
      >
        <component :is="item.icon" class="h-5 w-5" />
        <span v-if="!collapsed">{{ item.name }}</span>
      </router-link>
    </nav>

    <div class="mt-auto rounded-2xl bg-slate-100 p-4 text-xs text-slate-600 dark:bg-slate-800 dark:text-slate-300" v-if="!collapsed">
      <p class="font-semibold">Support coverage</p>
      <p class="mt-1">Live monitoring: 24/7</p>
      <p class="mt-3 text-brand-600 dark:text-brand-300">Emergency desk: +1 (800) 889-9911</p>
    </div>
  </aside>
</template>
