<template>
<v-container>
    <v-layout row wrap justify-center="center">
        <v-flex xs12 md4>
          <div
          class="ml-4  mb-3 pl-4 pb-4 "
           >
          <v-img
          class="white--text"
          height="200px"
          width="300px"
          :src='car.imageUrl'
          >
          </v-img>
        <v-chip v-model="car.selection"
        v-if="car.status"
        active-class="red accent-2 white--text"
        >
        {{car.status}}
        </v-chip>
          <h6 class="grey--text">Registration no.{{car.registration}}</h6>
          <p class=" ml-3 mt-3">Consumer Rating</p>
          <v-rating v-model="car.rating"></v-rating>
        </div>
      </v-flex>
       <v-flex  xs12 md4 class="pl-4 ml-0 mt-1 mb-2 pb-3">
        <h1>{{car.model}}</h1>
                <h3>Whats New</h3>
                <ul style="list-style-type:square;margin:0;">
                  <li>{{car.a}}</li>
                  <li>{{car.b}}</li>
                </ul>
                <h3>Pros & Cons</h3>
                <ul style="list-style-type:none;padding:0; margin:0;">
                  <li><v-icon left class="blue--text">mdi-check</v-icon>{{car.one}}</li>
                  <li><v-icon left class="blue--text">mdi-check</v-icon>{{car.two}}</li>
                  <li><v-icon left class="blue--text">mdi-check</v-icon>{{car.three}}</li>
                  <li><v-icon left class="blue--text">mdi-check</v-icon>{{car.four}}</li>
                </ul>
                <ul style="list-style-type:none">
                  <li><v-icon left class="red--text">mdi-close</v-icon>{{car.five}}</li>
                  <li><v-icon left class="red--text">mdi-close</v-icon>{{car.six}}</li>
                </ul>
      </v-flex>

      <v-flex xs12 md4 class="mt-3 pl-3 pb-2">
         <v-card
          
           max-width="494"
           >
           <v-card-text class="blue--text">
             <p>Hire Price</p>
            
              <v-row align="center" class="mb-2">
                  <h2>Price: Ksh {{car.price}}</h2>
            
              </v-row>
            <v-divider class="mx-4"></v-divider>
            
            </v-card-text>

               

                <v-card-text>
                  <div class="title blue--text">Tonight's availability</div>
                  <v-chip-group
                    v-model="car.selection"
                  
                    active-class="blue accent-2 white--text"
                    
                  >
                    <v-chip>5:30PM</v-chip>
                    <v-chip>7:30PM</v-chip>
                    <v-chip>8:00PM</v-chip>
                    <v-chip>9:00PM</v-chip>
                  </v-chip-group>
                </v-card-text>

                <v-card-actions>
                  <v-btn
                    color="green accent-4 white--text"
                    
                    @click="hire(car)"
                    v-if="!car.status"
                    
                  >
                    Hire Now
                  </v-btn>
                  <v-btn
                    color="red accent-4"
                    text
                   
                    
                     v-else-if="car.status"
                    
                  >
                    Not Available
                  </v-btn>
                </v-card-actions>
              </v-card>
           
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['model'],
    computed: {
        car () {
            return this.$store.getters.loadCar(this.model)
            }
         },
        methods: {
          hire(car) {
            this.$store.dispatch('hiredCar', car)
          }
        }}
</script>
















