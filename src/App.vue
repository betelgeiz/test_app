<template>
  <v-app>
    <v-main>
      <v-toolbar dark>
        <v-toolbar-items>
          <router-link class="v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default" to="/">First page</router-link>
          <router-link class="v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--default" to="/second" >Second page</router-link>
        </v-toolbar-items>
      </v-toolbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
