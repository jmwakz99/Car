<template>
  <v-app>
  
      <v-container fluid>
        <v-toolbar class="blue white--text">
          <v-toolbar-title @click="index" style="cursor:pointer"><v-icon class="white--text">mdi-car</v-icon></v-toolbar-title>

          <v-spacer></v-spacer>

          <v-toolbar-items>
            
            <v-btn  text to="/login" class="white--text">Login</v-btn>
               <v-btn  text  v-if="isUserAuthenticated" class="white--text" @click="signOut">Logout</v-btn>
            <v-btn text to="/register" class="white--text">Register</v-btn>


          </v-toolbar-items>
        </v-toolbar>
    </v-container>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  computed: {
    cars () {
      return this.$store.getters.loadCars

    },
     isUserAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    user() {
      return this.$store.getters.user
    }
    
  },

  data () {
      return {
      }
    },
  methods: {
     index() {
            return this.$router.push('/')
        },
    
    signOut() {
      
      this.$store.dispatch('logout')
     
    }
  }
 
};
</script>
