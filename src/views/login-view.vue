<template>
  <v-app :theme="theme">
        <div class="main-bg">
            <v-card
                elevation="2"
                class="card-login"
            >
                <v-container>
                    <v-card color="primary" class="mb">
                        <v-card-title class="text-h5">Login</v-card-title>
                    </v-card>
                </v-container>

                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="form-width mt-5"
                >
                
                    <div class="form-login">
                        <v-text-field
                            label="Username"
                            density="compact"
                            variant="underlined"
                            color="primary"
                            v-model="login.username"
                            :rules="usernameRules"
                            type="text"
                            required
                        ></v-text-field>

                        <v-text-field
                            density="compact"
                            variant="underlined"
                            color="primary"
                            label="Password"
                            v-model="login.password"
                            :rules="passwordRules"
                            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPass = !showPass"
                            :type="showPass ? 'text' : 'password'"
                            required
                        ></v-text-field>
                    </div>


                    <div class="login-button">
                        <v-btn
                            class="ma-2"
                            color="primary"
                        >
                            Masuk
                        </v-btn>
                    </div>
                
                </v-form>

                <div class="d-flex justify-center mt-5">
                    <b>OR</b>
                </div>

                <div class="d-flex justify-center mb">
                    <v-btn prepend-icon="mdi-google" variant="tonal" color="red" size="small">
                        SignIn
                    </v-btn>
                    <v-btn prepend-icon="mdi-facebook" variant="tonal" class="btn-vendor" color="blue" size="small">
                        SignIn
                    </v-btn>
                </div>

                <v-card-actions class="footer d-flex justify-center">
                    Not a member ? <a href="registration" color="primary"> <b>Sign up now</b></a>
                </v-card-actions>

            </v-card>

    </div>
  </v-app>
</template>

<script>
export default {
    data () {
      return {
        showPass: false,
        login: {
          username: '',
          password: '',
        },
        type: 'password',
        usernameRules: [
          v => !!v || 'Username harus diisi',
        ],
        passwordRules: [
          v => !!v || 'Password harus diisi',
        ],
        valid: true,
        token: '',
        theme: localStorage.getItem('theme')
      }
    },

}
</script>

<style scoped>
.mb {
  margin-bottom: 20px;
}
.main-bg {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 120px 0px;
}
.margin {
    margin-top: 29%;
}
.card-login {
    width: 600px;
}
@media screen and (max-width: 450px) {
    .card-login {
        width: 80%;
    }
}
.login-logo {
    width: 270px;
    height: auto;
}
@media screen and (max-width: 450px) {
    .login-logo {
        width: 150px;
    }
}
.form-login {
    width: 80%;
    margin: auto;
}
.login-button {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 35px;
}
.btn-vendor {
    margin-left: 10px;
}
.footer {
    margin-top: 50px;
    margin-bottom: 20px;
}
</style>