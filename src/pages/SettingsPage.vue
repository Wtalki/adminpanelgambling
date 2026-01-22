<script setup lang="ts">
const settingsSections = [
  {
    title: "Platform Configuration",
    detail: "Manage odds settings, limits, and regional availability."
  },
  {
    title: "Payment Gateways",
    detail: "Configure payment providers, routing rules, and fallback logic."
  },
  {
    title: "Notification Templates",
    detail: "Email, SMS, and push templates for compliance messaging."
  },
  {
    title: "Security & Audit Logs",
    detail: "MFA enforcement, permissions, and audit trail exports."
  }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">System Settings</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Configure platform preferences and security controls.</p>
        </div>
        <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Save changes</button>
      </div>
      <div class="mt-6 grid gap-4 md:grid-cols-2">
        <div
          v-for="section in settingsSections"
          :key="section.title"
          class="rounded-xl border border-slate-200 p-4 dark:border-slate-700"
        >
          <p class="text-sm font-semibold">{{ section.title }}</p>
          <p class="mt-2 text-xs text-slate-500 dark:text-slate-400">{{ section.detail }}</p>
          <button class="mt-4 text-xs font-semibold text-brand-600 dark:text-brand-300" type="button">Manage</button>
        </div>
      </div>
    </div>

    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <h3 class="text-lg font-semibold">Audit Logs</h3>
      <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Latest administrative actions and configuration changes.</p>
      <div class="mt-4 space-y-3 text-sm">
        <div class="flex items-start justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <div>
            <p class="font-semibold">Role updated</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Manager assigned to KYC workflow</p>
          </div>
          <span class="text-xs text-slate-400">2 min ago</span>
        </div>
        <div class="flex items-start justify-between rounded-xl border border-slate-200 p-3 dark:border-slate-700">
          <div>
            <p class="font-semibold">Payment gateway updated</p>
            <p class="text-xs text-slate-500 dark:text-slate-400">Crypto routing threshold adjusted</p>
          </div>
          <span class="text-xs text-slate-400">1 hour ago</span>
        </div>
      </div>
    </div>
  </section>
</template>
