<template>
  <v-app>
    <Navbar />
   <v-container>
      <v-main>
      <router-view/>
    </v-main>
   </v-container>
  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components:{
    Navbar
  },
  data: () => ({
    //
  }),
};
</script>
