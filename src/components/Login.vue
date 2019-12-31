<template>
    <v-container>
        <v-layout row class="mt-4">
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignin">
                                <v-layout row>
                                    <v-flex xs12>
                                        <v-text-field
                                        name = "email"
                                        label="Mail"
                                        id="email"
                                        v-model="email"
                                        type="email"
                                        required
                                         >
                                        </v-text-field>
                                    </v-flex>
                                </v-layout>
                                        <v-layout row>
                                            <v-flex xs12>
                                                <v-text-field
                                                name = "password"
                                                label="Password"
                                                id="password"
                                                v-model="password"
                                                type="password"
                                                required
                                                >
                                                </v-text-field>
                                            </v-flex>
                                        </v-layout>
                                          <v-layout row>
                                                <v-flex xs12>
                                                    <v-btn type="submit" class="blue white--text">Login</v-btn>
                                                    <p class=" grey--text mt-3">Register if you have not registered <router-link to="/register">here</router-link></p>
                                                    
                                                </v-flex>
                                            </v-layout>
                                      </form>
                        </v-container>
                    </v-card-text>
                    </v-card>
                    </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {

  data () {
    return {
      email: '',
      password: ''
       }
  },

  computed: {
    user () {
      return this.$store.getters.user
    }

  },

  methods: {
    onSignin () {
      this.$store.dispatch('signUserIn', { email: this.email, password: this.password })
      this.$router.push('/')
    }
  }

}
</script>
