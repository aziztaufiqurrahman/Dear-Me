<template>
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-img
            src="https://i.pinimg.com/564x/de/b8/93/deb89387bb83d452f3c11833347a584a.jpg"
            height="200px"
            ></v-img>
            <h2 class="indigo--text">Dear Me</h2>
          </div>
          <v-form @submit.prevent="submitHandler" ref="form">
            <v-card-text>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                type="email"
                label="Email"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
              />
              <v-text-field
                      v-model="password"
                      :rules="passwordRules"
                      :type="passwordShow?'text':'password'"
                      label="Password"
                      placeholder="Password"
                      prepend-inner-icon="mdi-key"
                      :append-icon="passwordShow ? 'mdi-eye':'mdi-eye-off'"
                      @click:append="passwordShow = !passwordShow"
                      required
              />
              <v-switch label="Remember me" color="indigo"></v-switch>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn type="submit" color="secondary"  class="mt-4 py-4"
            >Log In</v-btn
          >
        
            <router-link 
              to = '/SignIn'
              tag = v-btn>
              <v-btn class="mt-4 py-4"
            >Register</v-btn
          >
            </router-link>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
    <v-snackbar top color="green" v-model="snackbar">
      Login success
    </v-snackbar>
  </v-app>
</template>

<script>
import axios from 'axios'; 
export default {
  name: 'App',


  data: () => ({
    loading:false,
    snackbar:false,
    passwordShow:false,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    password: '',
    passwordRules: [
      v => !!v || 'Password is required',
      v => (v && v.length >= 6) || 'Password must be 6  characters or more!',
    ],
  }),
  methods:{
    submitHandler(){
      if (this.$refs.form.validate()){
          this.loading = true
        setTimeout(()=> {
          this.loading = false
          this.snackbar = true
        },3000)
      }
      const URL = "http://localhost:5000/signin"
      const data = {
        email : this.email,
        password : this.password
      }
      axios.post(URL,data).then(function
      (response){
        if (response.status == 400) alert ("Login gagal") 
        else { alert ("Login berhasil")
        localStorage.setItem ("token",response.token)
        window.location.href = "/dashboard"
      } return false
      })
    }
  }
};
</script>
<style>
  .backgruond{
    background-image: url(./assets/Order-Banner.jpg) !important;
    height: 300px;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    background-size: cover;
  }
</style> -->