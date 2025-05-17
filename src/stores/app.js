// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    loading: false,
  }),
  actions: {
    setLoading(state) {
      this.loading = state
    },
  },
})
