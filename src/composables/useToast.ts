import { ref } from "vue";

export type ToastTone = "success" | "warning" | "error" | "info";

export interface ToastMessage {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
}

const toasts = ref<ToastMessage[]>([]);
let nextId = 1;

export const useToast = () => {
  const pushToast = (toast: Omit<ToastMessage, "id">) => {
    const newToast = { ...toast, id: nextId++ };
    toasts.value = [newToast, ...toasts.value].slice(0, 4);

    setTimeout(() => {
      toasts.value = toasts.value.filter((item) => item.id !== newToast.id);
    }, 4500);
  };

  return {
    toasts,
    pushToast
  };
};
