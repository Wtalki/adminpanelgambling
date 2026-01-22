import { defineStore } from "pinia";

export type UserRole = "Admin" | "Manager" | "Support";

export const useUserStore = defineStore("user", {
  state: () => ({
    name: "Jamie Quinn",
    role: "Admin" as UserRole,
    initials: "JQ",
    notifications: 3
  }),
  actions: {
    setRole(role: UserRole) {
      this.role = role;
    }
  }
});
