<template>
   <v-app :theme="theme">
        <v-sheet class="main-bg pa-12" rounded height="840">
            <v-card class="mx-auto px-6 py-8" max-width="600">
                <v-card-title>Forget Password</v-card-title>
                <div class="d-flex justify-center">
                    <p class="text-center txt">Enter your email address and we'll send you an email with instructions to reset your password.</p>
                </div>
                <v-form
                >
                    <v-text-field
                    class="mb-2"
                    label="Email"
                    density="compact"
                    ></v-text-field>

                    <br>

                    <v-btn
                        block
                        color="primary"
                        type="submit"
                        variant="elevated"
                    >
                        Send
                    </v-btn>
                </v-form>
            </v-card>
        </v-sheet>
   </v-app>
</template>

<script>
export default {
    data: () => ({
        theme: localStorage.getItem('theme')
    })
}
</script>

<style scoped>
.main-bg {
  background-color: rgb(227, 227, 221);
  height: 500px;
}
.flex-container {
    display: flex;
    align-content: center;
    padding: 240px;
}
.txt {
    margin-top: 10%;
    margin-bottom: 10%;
}
.mb {
    margin-bottom: 15px;
}
</style>