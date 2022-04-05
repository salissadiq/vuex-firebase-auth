<template>
    <v-app-bar
      app
      color="primary"
      dark
      dense
    >
      <div class="d-flex align-center">
        <v-icon role="img" size="40">mdi-shield-account</v-icon>

      </div>

      <v-spacer></v-spacer>
      <v-btn
        text
      >
        <span class="mr-2">Sign up</span>
        <v-icon>mdi-account-plus</v-icon>
      </v-btn>
      <v-btn
        text
      >
        <span class="mr-2">Sign in</span>
        <v-icon>mdi-login-variant</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
    export default {
        
    }
</script>