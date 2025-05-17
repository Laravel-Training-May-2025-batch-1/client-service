/**
 * =====================================
 * API Request for Product
 * =====================================
 */
import { productService } from '@/config/services'

export const useProductResource = () => {
  /**
   * Base URL for the auth service
   *
   * @type {string}
   */
  const baseUrl = `${productService.baseUrl}/api/products`

  const { show, index } = useResource(baseUrl)

  return {
    show,
    index,
  }
}
