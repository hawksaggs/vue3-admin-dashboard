<template>
    <v-app :theme="theme">
        <div class="main-bg">
            <v-card
                elevation="2"
                class="card-login"
            >

                <div class="d-flex justify-center margin">
                    <v-card-title>Registration Form</v-card-title>
                </div>
    
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                    class="form-width"
                >
                
                    <div class="form-login">
                        <v-row>
                            <v-col cols="cols">
                                <v-text-field
                                    label="First Name"
                                    density="compact"
                                    variant="underlined"
                                    color="primary"
                                    type="text"
                                    required
                                ></v-text-field>
                            </v-col>
                            <v-col cols="cols">
                                <v-text-field
                                    label="Last Name"
                                    density="compact"
                                    variant="underlined"
                                    color="primary"
                                    type="text"
                                    required
                                ></v-text-field>
                            </v-col>
                        </v-row>

                        <v-text-field
                            label="Email"
                            density="compact"
                            variant="underlined"
                            color="primary"
                            type="email"
                            required
                        ></v-text-field>
    
                        <v-text-field
                            density="compact"
                            variant="underlined"
                            color="primary"
                            label="Password"
                            :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showPass = !showPass"
                            :type="showPass ? 'text' : 'password'"
                            required
                        ></v-text-field>

                        <v-text-field
                            density="compact"
                            variant="underlined"
                            color="primary"
                            label="Confirm Password"
                            :append-icon="showConfPass ? 'mdi-eye' : 'mdi-eye-off'"
                            @click:append="showConfPass = !showConfPass"
                            :type="showConfPass ? 'text' : 'password'"
                            required
                        ></v-text-field>

                        <v-radio-group
                            v-model="inline"
                            inline
                        >
                            <v-label>Gender</v-label>
                            <v-radio
                                label="Male"
                                value="0"
                            ></v-radio>
                            <v-radio
                                label="Female"
                                value="1"
                            ></v-radio>
                        </v-radio-group>
                        <v-textarea label="Address" variant="underlined"></v-textarea>
                        <div class="d-flex justify-center">
                            <v-checkbox label="I agree with all statement in term & condition"></v-checkbox>
                        </div>
                    </div>
    
                    <v-container>
                        <div class="login-button">
                            <v-btn
                                class="ma-2"
                                color="primary"
                                block
                            >
                                Masuk
                            </v-btn>
                        </div>
                    </v-container>
                
                </v-form>
    
            </v-card>
    
        </div>
    </v-app>
</template>
  
<script>
  export default {
      data () {
        return {
          showPass: false,
          showConfPass: false,
          inline: null,
          theme: localStorage.getItem('theme')
        }
      },
  
  }
</script>
  
<style scoped>
  .mb {
    margin-bottom: 60px;
  }
  .main-bg {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgb(227, 227, 221);
    padding: 120px 0px;
  }
  .margin {
      margin-top: 15%;
      margin-bottom: 15%;
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
      margin-top: 15px;
      margin-bottom: 35px;
  }
  .btn-vendor {
      margin-left: 10px;
  }
</style>