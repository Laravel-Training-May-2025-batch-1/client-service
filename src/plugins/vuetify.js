/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import { VBtn, VCheckbox, VTextField } from 'vuetify/lib/components/index.mjs'
import colors from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          background: colors.grey.lighten4,
        },
      },
      dark: {
        colors: {
          //
        },
      },
    },
  },
  aliases: {
    VTextFieldPrimary: VTextField,
    VCheckboxPrimary: VCheckbox,
    VBtnPrimary: VBtn,
    VBtnDanger: VBtn,
    VBtnError: VBtn,
  },
  defaults: {
    VTextFieldPrimary: {
      flat: true,
      variant: 'solo-filled',
      hideDetails: 'auto',
      density: 'comfortable',
    },
    VCheckboxPrimary: {
      density: 'compact',
      hideDetails: 'auto',
    },
    VBtnPrimary: {
      block: true,
      color: 'primary',
      density: 'default',
      variant: 'flat',
    },
    VBtnDanger: {
      block: true,
      color: 'error',
      density: 'default',
      variant: 'flat',
    },
    VBtnError: {
      block: true,
      color: 'error',
      density: 'default',
      variant: 'flat',
    },
  },
})
