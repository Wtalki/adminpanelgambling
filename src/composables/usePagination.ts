import { computed, ref } from "vue";

export const usePagination = <T>(rows: T[], pageSize = 5) => {
  const page = ref(1);

  const totalPages = computed(() => Math.max(1, Math.ceil(rows.length / pageSize)));

  const pagedRows = computed(() => {
    const start = (page.value - 1) * pageSize;
    return rows.slice(start, start + pageSize);
  });

  const next = () => {
    page.value = Math.min(totalPages.value, page.value + 1);
  };

  const prev = () => {
    page.value = Math.max(1, page.value - 1);
  };

  return {
    page,
    totalPages,
    pagedRows,
    next,
    prev
  };
};
