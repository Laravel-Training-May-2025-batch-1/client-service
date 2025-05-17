<template>
  <v-app-bar color="primary">
    <v-app-bar-nav-icon
      variant="text"
      @click.stop="$emit('click:drawer')"
    ></v-app-bar-nav-icon>

    <v-toolbar-title>{{ $route.name }}</v-toolbar-title>
  </v-app-bar>
</template>
