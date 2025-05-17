<template>
  <AppHeader @click:drawer="setDrawer" />

  <AppNavigation ref="nav" />

  <v-main>
    <v-container fluid>
      <router-view />
    </v-container>
  </v-main>
</template>

<script setup>
const nav = ref(null)

const setDrawer = () => {
  if (nav.value) {
    nav.value.drawer = !nav.value.drawer
  }
}
</script>
