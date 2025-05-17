<script setup>
definePage({
  name: 'Dashboard',
  alias: 'dashboard',
  meta: {
    title: 'Dashboard',
  },
  beforeEnter: async (to, from, next) =>
    await useMiddleware().auth(to, from, next),
})
</script>

<script>
export default {
  data() {
    return {
      products: [],
      page: 1,
    }
  },
  watch: {
    page() {
      this.fetchProducts()
    },
  },
  async created() {
    this.fetchProducts()
  },
  methods: {
    async fetchProducts() {
      const { index } = useProductResource()

      this.products = await index({ page: this.page })
        .then(({ data }) => {
          this.page = data.current_page

          return data
        })
        .catch(() => [])
    },
  },
}
</script>

<template>
  <v-container>
    <table>
      <thead>
        <tr>
          <th>Product Name</th>
          <th>Price</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="product in products.data"
          :key="product.id"
        >
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>

    <v-pagination
      v-model="page"
      :length="products.last_page"
      :total-visible="5"
      :items-per-page="10"
    ></v-pagination>
  </v-container>
</template>
