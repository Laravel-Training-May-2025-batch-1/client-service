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

<template>
  <HelloWorld />
</template>
