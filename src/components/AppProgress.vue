<template>
  <v-app>
    <v-main class="d-flex align-center justify-center">
      <v-container fluid>
        <v-row justify="center">
          <v-col
            cols="3"
            sm="2"
            md="1"
            align-self="center"
            class="d-flex align-center justify-center"
          >
            <v-img
              src="@/assets/icon.png"
              contain
              width="100"
            />
          </v-col>
        </v-row>

        <v-row justify="center">
          <v-col
            cols="3"
            sm="2"
            md="1"
            align-self="center"
          >
            <v-progress-linear
              indeterminate
              rounded
            />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
