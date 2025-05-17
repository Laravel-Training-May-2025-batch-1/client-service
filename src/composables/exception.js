/**
 * ===============================================
 * HTTP Exception
 * ===============================================
 *
 * Handles HTTP exceptions by prompting users.
 * Imported by components that uses APIs, and
 * called in the .catch() fallback of HTTP calls.
 *
 * ===============================================
 */

/**
 * Determine the appropriate action for the error
 *
 * @return {object}
 */
export const useException = () => {
  let errorResponse = {}

  /**
   * Handles the error response from API.
   *
   * @param {*} error
   * @returns
   */
  const handleError = (error) => {
    if (!error) return criticalError()

    if (typeof error !== 'object') error.error = JSON.parse(error.error)

    errorResponse = error

    switch (error.status) {
      case 401:
        return unauthenticated()

      case 403:
        return unauthorized()

      case 404:
        return notFound()

      case 422:
        return unprocessable()

      case 429:
        return tooManyRequestsError()

      case 500:
        return internalServerError()

      default:
        return defaultError()
    }
  }

  /**
   * Handles critical error without response.
   *
   */
  const criticalError = () => {
    useDialogStore().openAlertDialog({
      title: 'Server Error',
      body: 'We have encountered issues with our server, and our team is working on it. Apologies for any inconvenience this may have caused.',
    })
  }

  /**
   * Shows an alert dialog with the error status from response.
   *
   * @param {object} options
   */
  const defaultError = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? errorResponse?.statusText ?? 'Error',
      body:
        message ?? errorResponse?.message ?? 'An unexpected error occurred.',
    })
  }

  /**
   * Shows an alert dialog with a status of 500.
   *
   * @param {object} options
   */
  const internalServerError = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? 'Oops! Something went wrong.',
      body:
        message ??
        errorResponse?.data?.message ??
        'An unexpected error occurred.',
    })
  }

  /**
   * Shows an alert dialog with a status of 404.
   *
   * @param {object} options
   */
  const notFound = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? 'The requested resource was not found.',
      body:
        message ??
        errorResponse?.data?.message ??
        'An unexpected error occurred.',
    })
  }

  /**
   * Shows an alert dialog with a status of 401.
   *
   * @param {object} options
   */
  const unauthenticated = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? 'Please log in to continue.',
      body:
        message ??
        errorResponse?.data?.message ??
        'An unexpected error occurred.',
      action: () => window.location.replace(`${window.location.origin}/login`),
    })
  }

  /**
   * Shows an alert dialog with a status of 403.
   *
   * @param {object} options
   */
  const unauthorized = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? 'Forbidden',
      body:
        message ??
        errorResponse?.data?.message ??
        'An unexpected error occurred.',
    })
  }

  /**
   * Shows an alert dialog with a status of 422.
   *
   * @param {object} options
   */
  const unprocessable = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? 'There was an error with your request.',
      body:
        message ??
        errorResponse?.data?.message ??
        'An unexpected error occurred.',
    })
  }

  /**
   * Shows an alert dialog with a status of 429.
   *
   * @param {object} options
   */
  const tooManyRequestsError = (options = {}) => {
    const { title, message } = options

    useDialogStore().openAlertDialog({
      title: title ?? 'Too many requests.',
      body:
        message ??
        errorResponse?.data?.message ??
        'An unexpected error occurred.',
    })
  }

  return {
    errorResponse,
    handleError,
    criticalError,
    defaultError,
    internalServerError,
    notFound,
    unauthenticated,
    unauthorized,
    unprocessable,
    tooManyRequestsError,
  }
}
