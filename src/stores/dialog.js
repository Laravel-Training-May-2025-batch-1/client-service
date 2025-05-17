/**
 * =======================================
 * Dialog Store
 * =======================================
 *
 * Handles the dialogs of the application.
 *
 * =======================================
 */

import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    alertDialog: false,
    confirmationDialog: false,
    id: null,
    title: '',
    body: '',
    action: null,
    actionLabel: '',
    cancel: null,
    cancelLabel: '',
    maxWidth: 500,
    color: '',
  }),
  actions: {
    /**
     * Shows the alert dialog.
     *
     * @param config
     */
    openAlertDialog({ title, body, action, actionLabel, maxWidth }) {
      this.title = title
      this.body = body
      this.actionLabel = actionLabel || 'Got It!'
      this.action = action
      this.alertDialog = true
      this.maxWidth = maxWidth || 500
    },

    /**
     * Shows the confirmation dialog.
     *
     * @param config
     */
    openConfirmationDialog({
      title,
      body,
      action,
      actionLabel,
      cancel,
      cancelLabel,
      color,
    }) {
      this.title = title
      this.body = body
      this.actionLabel = actionLabel
      this.cancelLabel = cancelLabel
      this.action = action
      this.cancel = cancel
      this.confirmationDialog = true
      this.color = color || 'primary'
    },

    /**
     * Close the dialog in view.
     *
     * @param config
     */
    closeDialog(config) {
      this[config] = false
      this.title = ''
      this.id = null
      this.title = ''
      this.body = ''
      this.actionLabel = ''
      this.cancelLabel = ''
    },
  },
})
