/**
 * ===============================================
 * Form Composables
 * ===============================================
 *
 * This file contains the form composables used in the application.
 *
 * ===============================================
 */
import { useVuelidate } from '@vuelidate/core'

export const useForm = (form) => {
  const v$ = useVuelidate()
  const { handleError } = useException()

  const loadingForm = ref(false)
  let apiErrors = ref({})
  const defaultForm = JSON.parse(JSON.stringify(form.value))

  /**
   * Error messages for the form validation
   *
   * @type {Object}
   */
  const formErrors = computed(() =>
    Object.entries(form.value).reduce((errors, [key]) => {
      const validationErrors =
        v$.value.form[key]?.$errors.map((v) => v.$message) || []

      const apiValidationErrors = apiErrors.value[key] || []

      errors[key] = [...validationErrors, ...apiValidationErrors].filter(
        Boolean
      )

      return errors
    }, {})
  )

  /**
   * Watch for form changes
   * This will remove the error message when the user changes the input value
   */
  Object.keys(form.value).forEach((key) => {
    watch(
      () => form.value[key],
      () => {
        delete apiErrors.value[key]
      }
    )
  })

  /**
   * Validate the form
   * This will call the validate method from Vuelidate
   * and return true or false based on the validation result
   *
   * @return {boolean}
   */
  const validateForm = async () => {
    loadingForm.value = true

    const isValid = await v$.value.$validate()

    loadingForm.value = false

    return isValid
  }

  /**
   * Reset the form validation
   *
   * @return {boolean}
   */
  const resetValidation = () => {
    loadingForm.value = false
    apiErrors.value = {}
    form.value = defaultForm

    return v$.value.$reset()
  }

  /**
   * Submit the form
   * This will call the callback function and handle the errors if any occur
   *
   * @param {*} callback
   * @param {boolean} validate
   * @returns {Promise<unknown>}
   */
  const submitForm = async (callback, validate = true) => {
    if (validate) {
      const isValid = await validateForm()

      if (!isValid) return
    }

    loadingForm.value = true

    return callback()
      .catch(({ response }) => {
        switch (response.status) {
          case 422:
            apiErrors.value = response.data.errors
            break
          default:
            return handleError(response)
        }
      })
      .finally(() => (loadingForm.value = false))
  }

  /**
   * Touch the form field
   * This will call the touch method from Vuelidate
   *
   * @param {*} field
   * @returns {Promise<unknown>}
   */
  const touchForm = (field) => {
    return v$.value.form[field].$touch()
  }

  return {
    v$,
    loadingForm,
    validateForm,
    resetValidation,
    submitForm,
    touchForm,
    formErrors,
  }
}
