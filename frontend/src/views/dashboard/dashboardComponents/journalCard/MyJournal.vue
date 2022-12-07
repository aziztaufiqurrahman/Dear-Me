<template>
  <v-card
    class="mx-auto"
    max-width="auto"
  >
    <v-img
      src="https://i.pinimg.com/564x/de/b8/93/deb89387bb83d452f3c11833347a584a.jpg"
      height="200px"
    ></v-img>

    <v-card-title>
      Halo, Dear..
    </v-card-title>

    <v-card-subtitle>
      Di sini tempat yang tepat buat kamu untuk menceritakan semua keluh kesah dan kesenanganmu 😊
    </v-card-subtitle>
    
    

    <v-card-actions>
      <v-btn
        color="orange lighten-2"
        text
        @click="show = !show"
      >
        Start Here
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        color="orange lighten-2"
        text
        @click="changeDate(-1)"
      >
        Prev
      </v-btn>
      <v-btn
        color="orange lighten-2"
        text
        @click="changeDate(1)"
      >
        Next
      </v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>
        <v-card-actions>
          <label for="start"> Today : </label>
          
        </v-card-actions>
    

        <v-card-actions>
          <input type="current.date" :value="this.currentDate()" readonly>
          <input type="date" v-model="date" required @change="changeDate()"/>
        </v-card-actions> 

        <v-responsive width="100%">
        <v-container class="bg-surface-white">
                  <v-row no-gutters>
                    <v-flex d-flex xs12 sm6 md4>
                    <v-col>
                      <v-sheet class="pa-1 ma-1">
                        <v-textarea
                          class="greyy"
                          color="cyan"
                          auto-grow
                          variant="outlined"
                          rows="5"
                          clearable
                          label="How are you today"
                          v-model= "gridOne"
                        ></v-textarea>
                        <v-spacer></v-spacer>
                          <!-- <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                          </v-btn>
                          <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                      </v-btn> -->
                   </v-sheet>
                    </v-col>
                  </v-flex>

                  <v-flex d-flex xs12 sm6 md4>
                    <v-col>
                      <v-sheet class="pa-1 ma-1">
                          <v-textarea
                          class="greyy"
                          color="cyan"
                          auto-grow
                          variant="outlined"
                          rows="5"
                          clearable
                          label="Where are you going today"
                          v-model= "gridTwo"
                        ></v-textarea>
                      <v-spacer></v-spacer>
                          <!-- <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                          </v-btn>
                          <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                      </v-btn> -->
                      </v-sheet>
                    </v-col>
                  </v-flex>

                  <v-flex d-flex xs12 sm6 md4>
                    <v-col>
                      <v-sheet class="pa-1 ma-1">
                        <v-textarea
                          class="greyy"
                          color="cyan"
                          auto-grow
                          variant="outlined"
                          rows="5"
                          clearable
                          label="What are your activities today"
                          v-model= "gridThree"
                        ></v-textarea>
                      <v-spacer></v-spacer>
                          <!-- <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                          </v-btn>
                          <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                      </v-btn> -->
                      </v-sheet>
                    </v-col>
                  </v-flex>

                    <!-- <v-responsive width="100%"></v-responsive> -->

                    <v-flex d-flex xs12 sm6 md4>
                    <v-col>
                      <v-sheet class="pa-1 ma-1">
                          <v-textarea
                          class="greyy"
                          color="cyan"
                          auto-grow
                          variant="outlined"
                          rows="5"
                          clearable
                          label="What made you happy today"
                          v-model= "gridFour"
                        ></v-textarea>
                      <v-spacer></v-spacer>
                          <!-- <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                          </v-btn>
                          <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                      </v-btn> -->
                      </v-sheet>
                    </v-col>
                  </v-flex>

                  <v-flex d-flex xs12 sm6 md4>
                    <v-col>
                      <v-sheet class="pa-1 ma-1">
                        <v-textarea
                          class="greyy"
                          color="cyan"
                          auto-grow
                          variant="outlined"
                          rows="5"
                          clearable
                          label="Who pissed you off today"
                          v-model= "gridFive"
                        ></v-textarea>
                      <v-spacer></v-spacer>
                          <!-- <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                          </v-btn>
                          <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                      </v-btn> -->
                      </v-sheet>
                    </v-col>
                  </v-flex>

                  <v-flex d-flex xs12 sm6 md4>
                    <v-col>
                      <v-sheet class="pa-1 ma-1">
                        <v-textarea
                          class="greyy"
                          color="cyan"
                          auto-grow
                          variant="outlined"
                          rows="5"
                          clearable
                          label="What are you grateful for today"
                          v-model= "gridSix"
                        ></v-textarea>
                      <v-spacer></v-spacer>
                          <!-- <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                          </v-btn>
                          <v-btn
                              color="white"
                              text
                              @click="dialog = false"
                          >
                              
                      </v-btn> -->
                      </v-sheet>
                    </v-col>
                  </v-flex>
                  </v-row>
                  <v-spacer></v-spacer>
                  <v-card-actions class="justify-center">
                          <v-btn
                              color="black"
                              text
                              @click="deletePost()"
                          >
                              Delete
                          </v-btn>
                          <v-btn v-if="mode"
                              color="black"
                              text
                              @click="submitPost()"
                          >
                              Submit
                          </v-btn>
                          <v-btn v-else
                              color="black"
                              text
                              @click="updatePost()"
                          >
                              Update
                          </v-btn>
                  </v-card-actions>
                          
                </v-container>
              </v-responsive>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
// import moment from 'moment'
import QueryString from 'qs';
export default {
data: () => ({
  show: false,
  gridOne: "",
  gridTwo: "",
  gridThree: "",
  gridFour: "",
  gridFive: "",
  gridSix: "",
  id: "",
  date: new Date(),
  mode: false,
  // chooseDate: new Date().toISOString().split('T')[0]
}),
methods: {
  currentDate() {
    const current = new Date();
    const currDate = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;
    return currDate;
  },
  submitPost(idx){
    this.axios.post("http://localhost:5000/postData", 
    QueryString.stringify({
      gridOne: this.gridOne, 
      gridTwo: this.gridTwo, 
      gridThree: this.gridThree, 
      gridFour: this.gridFour, 
      gridFive: this.gridFive, 
      gridSix: this.gridSix, 
      dateTime: this.date}))
    .then(()=>{
      console.log("tes")
      this.getContentByDate()
      window.location.reload()
    })
  },
  deletePost(){
    this.axios.delete(`http://localhost:5000/deleteData/${this.id}`)
      .then((response) => {
          console.log(response)
          window.location.reload();
          //alert('response = ' + response)
      }, (error) => {
          console.log(error)
          //alert('error = ' + error)
      })
  },
  getContentByDate(){
    this.axios.get("http://localhost:5000/dataDate/" + this.currentDate())
  .then(res => {
      if(res.data.length != 0){
        this.id = res.data[0]._id,
        this.gridOne = res.data[0].gridOne,
        this.gridTwo = res.data[0].gridTwo,
        this.gridThree = res.data[0].gridThree,
        this.gridFour = res.data[0].gridFour,
        this.gridFive = res.data[0].gridFive,
        this.gridSix = res.data[0].gridSix
      }
      else{
        this.mode = true
      }
    }
  )
  },
  updatePost(){
    this.axios.put(`http://localhost:5000/updateData/${this.id}`,         
    QueryString.stringify({
      gridOne: this.gridOne, 
      gridTwo: this.gridTwo, 
      gridThree: this.gridThree, 
      gridFour: this.gridFour, 
      gridFive: this.gridFive, 
      gridSix: this.gridSix, 
      dateTime: this.date}))
    .then(
      window.location.reload()
    )
  },
  changeDate(n = 0){
    if (n != 0){
      let ymd = this.date.split("-")
      ymd[2] = parseInt(ymd[2]) + n
      this.date = ymd.join("-")
    }
    this.axios.get("http://localhost:5000/dataDate/" + this.date)
    .then(res => {
      if(res.data.length != 0){
        this.mode = false
        this.id = res.data[0]._id,
        this.gridOne = res.data[0].gridOne,
        this.gridTwo = res.data[0].gridTwo,
        this.gridThree = res.data[0].gridThree,
        this.gridFour = res.data[0].gridFour,
        this.gridFive = res.data[0].gridFive,
        this.gridSix = res.data[0].gridSix
      }
      else{
        this.mode = true
        this.id = "",
        this.gridOne = "",
        this.gridTwo = "",
        this.gridThree = "",
        this.gridFour = "",
        this.gridFive = "",
        this.gridSix = ""
      }
    })
  },
  addDate(n){
    console.log(typeof(this.date))
    this.date.setDate(this.date.getDate() + n)
    console.log(date)
  }

},
created(){
  this.date = new Date()
  this.getContentByDate()
  }
}

</script>


