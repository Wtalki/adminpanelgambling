<script setup lang="ts">
import { computed } from "vue";
import DataTable from "../components/DataTable.vue";
import { useDashboardStore } from "../stores/dashboard";
import { useUserStore } from "../stores/user";

const store = useDashboardStore();
const user = useUserStore();
const canBulkManage = computed(() => user.role === "Admin" || user.role === "Manager");

const columns = [
  { key: "id", label: "User ID" },
  { key: "name", label: "Name" },
  { key: "email", label: "Email" },
  { key: "status", label: "Status" },
  { key: "kyc", label: "KYC" },
  { key: "tier", label: "Tier" },
  { key: "lastActive", label: "Last Active" },
  { key: "actions", label: "Actions" }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">User Management</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Search, verify, and manage player accounts.</p>
        </div>
        <div class="flex gap-2">
          <button class="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white" type="button">Create user</button>
          <button
            v-if="canBulkManage"
            class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white"
            type="button"
          >
            Bulk Actions
          </button>
          <button class="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold dark:border-slate-700" type="button">Export</button>
        </div>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-3">
        <input
          class="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800"
          type="text"
          placeholder="Search by name, email, ID"
        />
        <select class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800">
          <option>All statuses</option>
          <option>Active</option>
          <option>Suspended</option>
          <option>Banned</option>
        </select>
        <select class="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm dark:border-slate-700 dark:bg-slate-800">
          <option>KYC status</option>
          <option>Verified</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <DataTable title="Users" :columns="columns" :rows="store.users" :page-size="6">
        <template #actions>
          <div class="flex flex-wrap gap-2">
            <button class="rounded-lg border border-slate-200 px-2 py-1 text-xs font-semibold dark:border-slate-700" type="button">
              Edit user
            </button>
            <button class="rounded-lg border border-slate-200 px-2 py-1 text-xs font-semibold dark:border-slate-700" type="button">
              Top up balance
            </button>
            <button class="rounded-lg border border-slate-200 px-2 py-1 text-xs font-semibold dark:border-slate-700" type="button">
              Withdraw balance
            </button>
          </div>
        </template>
      </DataTable>

      <div class="space-y-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 class="text-lg font-semibold">KYC Verification Panel</h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Review identity documents and approve, reject, or request additional proof.
          </p>
          <div class="mt-4 space-y-3">
            <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
              <p class="text-sm font-semibold">Document Queue</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">18 pending verifications</p>
            </div>
            <div class="rounded-xl border border-slate-200 p-3 dark:border-slate-700">
              <p class="text-sm font-semibold">Average approval time</p>
              <p class="text-xs text-slate-500 dark:text-slate-400">1h 12m</p>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 class="text-lg font-semibold">Deposit & Withdrawal Limits</h3>
          <div class="mt-4 space-y-3">
            <div class="flex items-center justify-between text-sm">
              <span>Daily deposit limit</span>
              <span class="font-semibold">$50,000</span>
            </div>
            <div class="flex items-center justify-between text-sm">
              <span>Weekly withdrawal limit</span>
              <span class="font-semibold">$120,000</span>
            </div>
            <button class="mt-2 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold dark:border-slate-700" type="button">
              Edit limits
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
