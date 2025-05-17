<script>
import { required, email } from '@vuelidate/validators'

export default {
  setup() {
    const form = ref({
      email: null,
      password: null,
      remember_me: false,
    })

    const { loadingForm, submitForm, touchForm, formErrors } = useForm(form)
    const { login } = useAuth()

    return {
      form,
      formErrors,
      loadingForm,
      submitForm,
      touchForm,
      login,
    }
  },
  watch: {
    'form.email'() {
      if (this.form.email) this.form.email = this.form.email.trim()
    },
    'form.password'() {
      if (this.form.password) this.form.password = this.form.password.trim()
    },
  },
  methods: {
    /**
     * Submit the form
     *
     * @returns {Promise<void>}
     */
    submit() {
      return this.submitForm(() => this.login(this.form))
    },
  },
  /**
   * Form validations
   *
   * @returns {Object}
   */
  validations() {
    return {
      form: {
        email: {
          email,
          required,
        },
      },
    }
  },
}
</script>

<template>
  <v-form
    @submit.prevent="submit"
    :disabled="loadingForm"
  >
    <v-card flat>
      <v-card-text>
        <v-row>
          <v-col cols="12">
            <TextField
              type="email"
              v-model="form.email"
              :errors="formErrors?.email"
              @blur="touchForm('email')"
            />
          </v-col>

          <v-col cols="12">
            <TextField
              type="password"
              v-model="form.password"
            />
          </v-col>

          <v-col cols="12">
            <v-checkbox-primary
              label="Remember me"
              v-model="form.remember_me"
            />
          </v-col>
        </v-row>
      </v-card-text>

      <v-card-actions class="pa-0 ma-3">
        <v-btn-primary
          type="submit"
          class="text-none"
          :loading="loadingForm"
        >
          Log in
        </v-btn-primary>
      </v-card-actions>
    </v-card>
  </v-form>
</template>
