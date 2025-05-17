/**
 * ===============================================
 * Middleware Composables
 * ===============================================
 *
 * Provides middleware properties and actions
 *
 * ===============================================
 */
export const useMiddleware = () => {
  const { isAuthenticated } = useAuth()

  /**
   * Middleware to redirect authenticated users
   *
   * @param {*} to
   * @param {*} from
   * @param {*} next
   */
  const guest = async (to, from, next) => {
    if (await isAuthenticated()) {
      next({ name: from.name })
    } else {
      next()
    }
  }

  /**
   * Middleware to redirect unauthenticated users
   *
   * @param {*} to
   * @param {*} from
   * @param {*} next
   */
  const auth = async (to, from, next) => {
    if (await isAuthenticated()) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }

  return {
    guest,
    auth,
  }
}
