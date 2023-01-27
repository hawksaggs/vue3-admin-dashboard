<template>
  <div>
    <v-container>
        <titlebarComponent :title="title" :routes="routes" class="mb"></titlebarComponent>
        <v-card>
            <v-container>
                <v-form
                    ref="form"
                    v-model="valid"
                    lazy-validation
                >
                    <v-text-field
                        v-model="name"
                        :counter="10"
                        :rules="nameRules"
                        label="Name"
                        required
                    ></v-text-field>
                
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                
                    <v-select
                        v-model="select"
                        :items="items"
                        :rules="[v => !!v || 'Item is required']"
                        label="Item"
                        required
                    ></v-select>
                
                    <v-btn
                        color="success"
                        class="me-4"
                        @click="validate"
                    >
                        Validate
                    </v-btn>
                
                    <v-btn
                        color="error"
                        class="me-4"
                        @click="reset"
                    >
                        Reset Form
                    </v-btn>
                
                    <v-btn
                        color="warning"
                        @click="resetValidation"
                    >
                        Reset Validation
                    </v-btn>
                </v-form>
            </v-container>
        </v-card>
        <div class="margin">
            <myFooter></myFooter>
        </div>
    </v-container>
  </div>
</template>

<script>
import titlebarComponent from '@/components/titlebar/titlebar-component.vue';
import myFooter from '@/components/footer/footer-component.vue';
export default {
    components: {
        titlebarComponent,
        myFooter
    },
    data: () => ({
        title: 'Validation Form',
        routes: [
            {
                title: "Form",
                disabled: false,
                href: "#",
            },
            {
                title: "Validation Form",
                disabled: false,
                href: "validation",
            },
        ],
        valid: true,
        name: '',
        nameRules: [
            v => !!v || 'Name is required',
            v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        ],
        email: '',
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        select: null,
        items: [
            'Item 1',
            'Item 2',
            'Item 3',
            'Item 4',
        ],
    }),
    methods: {
    async validate () {
      const { valid } = await this.$refs.form.validate()

      if (valid) alert('Form is valid')
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
  },
}
</script>

<style scoped>
.mb {
  margin-bottom: 15px;
}
.main-bg {
  background-color: rgb(227, 227, 221);
  height: 100%;
}
.margin {
    margin-top: 29%;
}
</style>