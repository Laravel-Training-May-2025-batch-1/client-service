<template>
  <component
    :is="`v-text-field-${variant}`"
    :placeholder="localPlaceholder"
    :type="localType"
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    :error-messages="errors"
    :max-errors="errors?.length"
    @blur="$emit('blur')"
    :append-inner-icon="appendInnerIcon"
    @click:append-inner="showPsw = !showPsw"
  />
</template>

<script>
export default {
  props: {
    placeholder: {
      required: false,
      default: null,
      type: String,
    },
    type: {
      required: false,
      default: 'text',
      type: String,
    },
    modelValue: {
      required: true,
    },
    errors: {
      required: false,
      default: [],
      type: Array,
    },
    variant: {
      required: false,
      default: 'primary',
      type: String,
    },
  },
  data() {
    return {
      localType: this.type.toLowerCase(),
      localPlaceholder:
        this.placeholder || this.getDefaultPlaceholder(this.type),
      showPsw: false,
    }
  },
  computed: {
    appendInnerIcon() {
      switch (this.type) {
        case 'password':
          return this.showPsw ? 'mdi-eye-off' : 'mdi-eye'
        default:
          return null
      }
    },
  },
  watch: {
    type(newType) {
      this.localType = newType.toLowerCase()

      if (!this.placeholder) {
        this.localPlaceholder = this.getDefaultPlaceholder(this.localType)
      }
    },
    placeholder(newPlaceholder) {
      this.localPlaceholder =
        newPlaceholder || this.getDefaultPlaceholder(this.localType)
    },
    showPsw() {
      switch (this.type) {
        case 'password':
          this.localType = this.showPsw ? 'text' : 'password'
          break
      }
    },
  },
  methods: {
    getDefaultPlaceholder(type) {
      switch (type) {
        case 'email':
          return 'Email Address'
        case 'password':
          return 'Password'
        default:
          return 'Enter value'
      }
    },
  },
}
</script>
