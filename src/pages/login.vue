<script setup>
definePage({
  name: 'Login',
  meta: {
    title: 'Login',
    layout: 'guest',
  },
  beforeEnter: async (to, from, next) =>
    await useMiddleware().guest(to, from, next),
})
</script>

<template>
  <v-row justify="center">
    <v-col
      md="5"
      lg="4"
    >
      <v-card
        flat
        rounded
      >
        <v-card-text class="pa-0 ma-3">
          <LoginForm />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
