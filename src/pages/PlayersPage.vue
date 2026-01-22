<script setup lang="ts">
import DataTable from "../components/DataTable.vue";

const bettingHistory = [
  {
    id: "B-9011",
    game: "Royal Roulette Live",
    stake: "$2,400",
    outcome: "Win",
    profit: "+$4,800"
  },
  {
    id: "B-9012",
    game: "Mega Spins",
    stake: "$1,250",
    outcome: "Loss",
    profit: "-$1,250"
  },
  {
    id: "B-9013",
    game: "Blackjack Elite",
    stake: "$3,600",
    outcome: "Win",
    profit: "+$2,100"
  }
];

const columns = [
  { key: "id", label: "Bet ID" },
  { key: "game", label: "Game" },
  { key: "stake", label: "Stake" },
  { key: "outcome", label: "Outcome" },
  { key: "profit", label: "Profit" }
];
</script>

<template>
  <section class="space-y-6">
    <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
      <div class="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 class="text-xl font-semibold">Player Management</h2>
          <p class="text-sm text-slate-500 dark:text-slate-400">Track player performance, risk, and responsible gaming.</p>
        </div>
        <button class="rounded-lg bg-brand-600 px-4 py-2 text-sm font-semibold text-white" type="button">Flag for Review</button>
      </div>
      <div class="mt-4 grid gap-4 md:grid-cols-4">
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Player risk score</p>
          <p class="text-2xl font-semibold text-rose-500">82 / 100</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">High risk</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Lifetime value</p>
          <p class="text-2xl font-semibold">$128,450</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">VIP Platinum</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Self-exclusion</p>
          <p class="text-2xl font-semibold text-emerald-600">Inactive</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Last review 2 days ago</p>
        </div>
        <div class="rounded-xl border border-slate-200 p-4 dark:border-slate-700">
          <p class="text-xs text-slate-500 dark:text-slate-400">Responsible gaming alerts</p>
          <p class="text-2xl font-semibold">3 active</p>
          <p class="text-xs text-slate-500 dark:text-slate-400">Escalate to support</p>
        </div>
      </div>
    </div>

    <div class="grid gap-6 xl:grid-cols-[2fr_1fr]">
      <DataTable title="Player Betting History" :columns="columns" :rows="bettingHistory" :page-size="5" />

      <div class="space-y-6">
        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 class="text-lg font-semibold">Financial Summary</h3>
          <div class="mt-4 space-y-3 text-sm">
            <div class="flex items-center justify-between">
              <span>Total deposits</span>
              <span class="font-semibold">$245,000</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Total withdrawals</span>
              <span class="font-semibold">$190,400</span>
            </div>
            <div class="flex items-center justify-between">
              <span>Net position</span>
              <span class="font-semibold text-emerald-600">+$54,600</span>
            </div>
          </div>
        </div>

        <div class="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h3 class="text-lg font-semibold">VIP Status</h3>
          <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">Platinum tier valid until 12/31/24</p>
          <button class="mt-4 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm font-semibold dark:border-slate-700" type="button">
            Adjust VIP Benefits
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
