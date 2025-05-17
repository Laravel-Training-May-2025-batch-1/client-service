<template>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item
        v-for="item in items"
        exact
        :key="item.value"
        :to="item.value"
        :title="item.title"
        :prepend-icon="item.icon"
      />
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn-primary
          block
          class="text-none"
          color="grey"
          @click="logout"
        >
          Logout
        </v-btn-primary>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script setup>
const items = [
  {
    title: 'Dashboard',
    value: '/',
    icon: 'mdi-home',
  },
]

const { logout } = useAuth()
const { mobile } = useDisplay()

const drawer = ref(!mobile.value)

defineExpose({ drawer })
</script>
