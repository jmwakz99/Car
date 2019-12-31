<template>
 <v-card
    max-width="400"
    class="mx-auto"
  >
   <v-container
      class="pa-2"
      fluid
    >
      <v-row>
        <v-col>
          <v-card
            color="blue"
            dark
          >
          
            <v-card-actions>
              <v-btn text>Cars Available For Hire</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="car in cars"
          :key="car.id"
        >
          <v-card>
            <v-list-item three-line>
              <v-list-item-content class="align-self-start">
                <h6 class="blue--text">{{car.model}}</h6>
                <v-btn text class="blue--text" @click="details(car.model)"><v-icon left>mdi-arrow-right</v-icon>View Details</v-btn>
            </v-list-item-content>

              <v-list-item-avatar
                size="155"
                tile
              >
              <v-img :src="car.imageUrl"  @click="details(car.model)" style="cursor:pointer"></v-img>
              </v-list-item-avatar>
              
               
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>

</template>
<script>
  export default {
    computed: {
        cars () {
            return this.$store.getters.loadCars
        }

    },
    methods: {
        details (id) {
            return this.$router.push('/cars/' + id)
        }
       
    }
   
  }
</script>