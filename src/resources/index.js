import axios from 'axios'

/**
 *============================================================
 * API
 * ===========================================================
 *
 * Initialize the axios instance with an Authorization header.
 * Refreshes expired token before am API request.
 *
 */
export const useResource = (baseUrl) => {
  /**
   * Creates an axios instance with an access token as authorization header
   *
   * @param String baseUrl
   * @return {*} http
   */
  const http = () => {
    const http = axios.create({ baseURL: baseUrl, withCredentials: true })

    http.interceptors.request.use(async (config) => {
      /**
       * Set Headers config
       */
      config.headers.Accept = 'application/json'

      return config
    })

    return http
  }

  /**
   * Display a list of the resource.
   *
   * @param {object} params
   * @return {Promise}
   */
  const index = (params = null) => {
    return http().get('/', { params })
  }

  /**
   * Display the specified resource.
   *
   * @param {string} id
   * @param {object} params
   * @return {Promise}
   */
  const show = (id, params = null) => {
    return http().get(id, { params })
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param {object} payload
   * @return {Promise}
   */
  const store = (payload) => {
    return http().post('/', payload)
  }

  /**
   * Update the specified resource in storage.
   *
   * @param {string} id
   * @param {object} payload
   * @return {Promise}
   */
  const update = (id, payload) => {
    return http().put(id, payload)
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param {string} id
   * @return {Promise}
   */
  const destroy = (id) => {
    return http().delete(id)
  }

  /**
   * Search for a specific resource in the database using POST.
   *
   * @param {object} payload
   * @return {Promise}
   */
  const search = (payload) => {
    return http().post('search', payload)
  }

  return {
    http,
    index,
    show,
    store,
    update,
    destroy,
    search,
  }
}
