<script>
export default {
  setup() {
    const dialogStore = useDialogStore()

    const alertDialog = computed(() => dialogStore.alertDialog)
    const title = computed(() => dialogStore.title)
    const body = computed(() => dialogStore.body)
    const action = computed(() => dialogStore.action)
    const actionLabel = computed(() => dialogStore.actionLabel)
    const maxWidth = computed(() => dialogStore.maxWidth)

    return {
      dialogStore,
      alertDialog,
      title,
      body,
      action,
      actionLabel,
      maxWidth,
    }
  },
  methods: {
    /**
     * Hides the dialog and executes the action callback function.
     */
    closeAndAgree() {
      this.dialogStore.closeDialog('alertDialog')

      if (this.dialogStore.action) this.dialogStore.action()
    },
  },
}
</script>

<template>
  <v-dialog
    :model-value="alertDialog"
    persistent
    :max-width="maxWidth"
    scrollable
  >
    <v-card
      flat
      rounded
      :title="title"
    >
      <v-card-text>
        {{ body }}
      </v-card-text>

      <v-card-actions>
        <v-container
          fluid
          class="text-center"
        >
          <v-btn
            size="small"
            variant="tonal"
            @click="closeAndAgree()"
            class="text-none"
          >
            {{ actionLabel }}
          </v-btn>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
