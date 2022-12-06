<template>
<<<<<<< HEAD
  <div id="login">
    <h1 class="greeting"><span>W</span>elcome</h1>
    <h2>Vue Bullet Journal</h2>
    <div class="entry-options">
      <h3 @click="entryLogin = true">Log In</h3>
      <p>/</p>
      <h3 @click="entryLogin = false">Sign Up</h3>
    </div>
    <div class="form-container">
      <div class="action-boxes" :class="{ front: entryLogin }">
        <div class="header"><h1>Log In</h1></div>
        <form @submit.prevent="loggingIn">
          <div>
            <label for="loginEmail"><h3>Email</h3></label>
            <input
              type="email"
              id="loginEmail"
              v-model="loginInfo.email"
              required
            />
            <label for="loginPassword"><h3>Password</h3></label>
            <input
              :type="showLoginPW ? 'text' : 'password'"
              id="loginPassword"
              v-model="loginInfo.password"
              placeholder="Minimum 5 characters"
              minLength="5"
              required
            />
            <h6
              @click="showLoginPW = !showLoginPW"
              :class="{ active: showLoginPW }"
            >
              Show password
            </h6>
          </div>
          <button type="submit">Log In</button>
        </form>
      </div>
      <div class="action-boxes" :class="{ front: !entryLogin }">
        <div class="header"><h1>Sign Up</h1></div>
        <form @submit.prevent="signingUp">
          <div>
            <label for="signUpEmail"><h3>Email</h3></label>
            <input
              type="email"
              id="signUpEmail"
              v-model="signUpInfo.email"
              required
            />
            <label for="signUpPassword"><h3>Password</h3></label>
            <input
              :type="showSignUpPW ? 'text' : 'password'"
              id="signUpPassword"
              v-model="signUpInfo.password"
              placeholder="Minimum 5 characters"
              minLength="5"
              required
            />
            <label for="signUpVerify"><h3>Re-enter Password</h3></label>
            <input
              :type="showSignUpPW ? 'text' : 'password'"
              id="signUpVerify"
              v-model="signUpInfo.verifyPw"
              required
            />
            <h6
              @click="showSignUpPW = !showSignUpPW"
              :class="{ active: showSignUpPW }"
            >
              Show passwords
            </h6>
          </div>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
    <h4 class="message">{{ getErrorMessage }}</h4>
    <h4 class="message" v-if="!matchingPW">
      The passwords entered do not match. Please try again.
    </h4>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Login",
  computed: {
    ...mapGetters(["getErrorMessage"]),
  },
  data() {
    return {
      loginInfo: {
        email: "",
        password: "",
      },
      showLoginPW: false,
      signUpInfo: {
        email: "",
        password: "",
        verifyPw: "",
      },
      showSignUpPW: false,
      matchingPW: true,
      entryLogin: true,
    };
  },
  methods: {
    ...mapActions(["loginUser", "signUpUser", "changeErrorMessage"]),
    loggingIn() {
      this.loginUser({
        email: this.loginInfo.email,
        password: this.loginInfo.password,
      });
    },
    signingUp() {
      if (this.signUpInfo.password === this.signUpInfo.verifyPw) {
        this.matchingPW = true;

        this.signUpUser({
          email: this.signUpInfo.email,
          password: this.signUpInfo.password,
        });
      } else {
        this.matchingPW = false;
        this.changeErrorMessage("");
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 0 auto 10rem;
}

h2 {
  text-align: center;
}

h3 {
  color: rgb(25, 81, 94);
  font-weight: 500;
}

h6 {
  cursor: pointer;
  display: inline-block;
}

h6.active {
  color: rgba(3, 190, 3);
}

button {
  position: absolute;
  width: 93%;
  bottom: 0;
}

form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 80%;
}

input {
  margin: 5rem 0 10rem;
}

#login {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
}

.greeting {
  font-size: 35rem;
  color: rgb(25, 81, 94);
}

.greeting span {
  font-size: 38rem;
}

.entry-options {
  display: none;
}

.action-boxes {
  width: 90%;
  max-width: 400rem;
  height: 350rem;
  background: white;
}

.form-container {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350rem, 1fr));
  width: 100%;
  grid-gap: 20rem;
  justify-items: center;
  padding: 5% 0;
}

.message {
  width: 80%;
  text-align: center;
}

@media only screen and (min-width: 700px) {
  .form-container {
    width: 60%;
    height: 500rem;
  }
}

@media only screen and (max-width: 700px), (max-height: 850px) {
  h3 {
    font-size: 12rem;
  }

  .greeting {
    font-size: 20rem;
  }

  .greeting span {
    font-size: 30rem;
  }

  .entry-options {
    display: flex;
    width: 50%;
    max-width: 300rem;
    justify-content: space-between;
    align-items: center;
    margin: 20rem 0;
  }

  .entry-options h3 {
    cursor: pointer;
  }

  .form-container {
    height: 400rem;
  }

  .action-boxes {
    position: absolute;
    width: 80%;
  }

  .front {
    z-index: 10;
  }
}
=======
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <div class="text-center">
            <v-avatar size="100" color="indigo lighten-4">
              <v-icon size="40" color="indigo">mdi-account</v-icon>
            </v-avatar>
            <h2 class="indigo--text">Vue login Page</h2>
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
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Login</span>
              </v-btn>
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
>>>>>>> ccffa1fd379ccd3a4f844d765e536778148cc49d
</style>