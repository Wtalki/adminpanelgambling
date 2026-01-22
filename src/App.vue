<script setup lang="ts">
import { onMounted } from "vue";
import SidebarNav from "./components/SidebarNav.vue";
import TopHeader from "./components/TopHeader.vue";
import ToastStack from "./components/ToastStack.vue";
import { useToast } from "./composables/useToast";

const { pushToast } = useToast();

onMounted(() => {
  pushToast({
    title: "Live monitoring active",
    description: "Streaming updates every 60 seconds.",
    tone: "info"
  });
});
</script>

<template>
  <div class="flex h-full bg-slate-100 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
    <SidebarNav />
    <div class="flex min-h-screen flex-1 flex-col">
      <TopHeader />
      <main class="flex-1 space-y-6 overflow-y-auto bg-slate-50 p-6 dark:bg-slate-950">
        <router-view />
      </main>
    </div>
    <ToastStack />
  </div>
</template>
