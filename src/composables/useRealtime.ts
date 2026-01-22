import { onMounted, onUnmounted } from "vue";
import { useDashboardStore } from "../stores/dashboard";

const sampleUpdates = [
  {
    title: "Large bet placed",
    detail: "$48,000 placed on roulette table 7",
    time: "Just now",
    tone: "info"
  },
  {
    title: "Withdrawal approved",
    detail: "$25,200 sent to wallet ending 1182",
    time: "Just now",
    tone: "success"
  },
  {
    title: "Risk threshold triggered",
    detail: "Player #98302 exceeded max loss limits",
    time: "Just now",
    tone: "warning"
  }
];

export const useRealtime = () => {
  const store = useDashboardStore();
  let timer: number | undefined;

  onMounted(() => {
    timer = window.setInterval(() => {
      const update = sampleUpdates[Math.floor(Math.random() * sampleUpdates.length)];
      store.addActivity({
        id: Date.now(),
        ...update
      });
    }, 6000);
  });

  onUnmounted(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
};
