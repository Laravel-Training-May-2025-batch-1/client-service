/**
 * ===============================================
 * Auth Composables
 * ===============================================
 *
 * Provides authentication properties and actions
 *
 * ===============================================
 */
export const useAuth = () => {
  const { verify, logout: logoutApi, login: loginApi } = useAuthResource()

  /**
   * Check if the user is authenticated
   *
   * @return bool
   */
  const isAuthenticated = () => {
    return verify()
      .then(() => true)
      .catch(() => false)
  }

  /**
   * Logout the user
   *
   * @returns {Promise<boolean>}
   */
  const logout = () => {
    return logoutApi().then(() =>
      window.location.replace(`${window.location.origin}/login`)
    )
  }

  /**
   * Login the user
   *
   * @param {*} form
   * @returns {Promise<void>}
   */
  const login = (form) => {
    return loginApi(form).then(() =>
      window.location.replace(window.location.origin)
    )
  }

  return {
    isAuthenticated,
    logout,
    login,
  }
}
