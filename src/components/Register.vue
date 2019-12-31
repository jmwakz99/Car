<template>
    <v-container>
        <v-layout row class="mt-4">
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit.prevent="onSignup">
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
                                                    <v-text-field
                                                    name = "confirmPassword"
                                                    label="Confirm Password"
                                                    id="confirmPassword"
                                                    v-model="confirmPassword"
                                                    type="password"
                                                    :rules="[comparePassword]"

                                                    >

                                                    </v-text-field>

                                                </v-flex>

                                            </v-layout>
                                            <v-layout row>
                                                <v-flex xs12>
                                                    <v-btn type="submit" class="blue white--text">Sign up</v-btn>

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
      password: '',
      confirmPassword: ''

    }
  },
  computed: {
    comparePassword () {
      return this.password !== this.confirmPassword ? 'Password do not match' : ''
    },
    user () {
      return this.$store.getters.user
    }

  },
  methods: {
    onSignup () {
      // Vuex
      this.$store.dispatch('signUserUp', { email: this.email, password: this.password })
      this.$router.push('/login')
    }
  }

}
</script>
