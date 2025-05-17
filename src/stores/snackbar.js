/**
 * =======================================
 * Snackbar Store
 * =======================================
 *
 * Handles the dialogs of the application.
 *
 * =======================================
 */

import { defineStore } from 'pinia'

export const useSnackbarStore = defineStore('snackbar', {
  state: () => ({
    snackbar: false,
    text: null,
    timeout: 3000,
    color: null,
  }),
  actions: {
    /**
     * Shows the snackbar.
     *
     */
    open({ text, color, timeout }) {
      this.text = text
      this.color = color
      this.timeout = timeout
      this.snackbar = true
    },

    /**
     * Close the snackbar in view.
     *
     */
    close() {
      this.snackbar = false
      this.text = null
      this.color = null
      this.timeout = 3000
    },
  },
})
