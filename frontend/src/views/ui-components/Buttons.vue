<template>
  <v-card
    :loading="loading"
    class="mx-auto my-12"
    max-width="374"
  >
    <template slot="progress">
      <v-progress-linear
        color="deep-purple"
        height="10"
        indeterminate
      ></v-progress-linear>
    </template>

    <v-img
      height="250"
      src="https://akademik.polban.ac.id/fotomhsrekap/201524010.jpg"
    ></v-img>

    <v-card-title>
      <v-row
        class="justify-center"
      >Hasanah
      </v-row>
    </v-card-title>

    <v-card-text>
      <v-row
        class="justify-center"
      >201524010
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
      loading: false,
      selection: 1,
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      },
    },
  }
</script>