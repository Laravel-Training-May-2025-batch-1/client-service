/**
 * =====================================
 * API Request for Authentication
 * =====================================
 */
import { authService } from '@/config/services'

export const useAuthResource = () => {
  /**
   * Base URL for the auth service
   *
   * @type {string}
   */
  const baseUrl = `${authService.baseUrl}/api/auth`

  const { http } = useResource(baseUrl)

  /**
   * Login request
   *
   * @param {*} params
   * @return {*} http
   */
  const login = (params) => {
    return http().post('login', params)
  }

  /**
   * Logout Request
   *
   * @return {*} http
   */
  const logout = () => {
    return http().post('logout')
  }

  /**
   * Verify Authentication
   *
   * @return {*} http
   */
  const verify = () => {
    return http().get()
  }

  return {
    login,
    logout,
    verify,
  }
}
