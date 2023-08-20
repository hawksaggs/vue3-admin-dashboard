<template>
    <div>
        <v-container>
            <titleBar class="mb" :title="title" :routes="routes"></titleBar>

            <v-table fixed-header height="300px">
                <thead>
                    <tr>
                        <th class="text-left">
                            Name
                        </th>
                        <th class="text-left">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in paginatedData" :key="item.id" style="cursor:pointer">
                        <td>{{ item.title }}</td>
                    <tr>
                        <td style="cursor: pointer">
                            <i @click="updateProduct">
                                <v-icon icon="mdi mdi-square-edit-outline" size="large"></v-icon>
                            </i>
                        </td>
                        <td style="cursor: pointer">
                            <i @click="deleteProduct">
                                <v-icon icon="mdi mdi-delete-outline" size="large"></v-icon> 
                            </i>
                        </td>
                    </tr>
                    </tr>
                </tbody>
            </v-table>
            <v-card>
                <v-container>
                    <v-row>
                        <v-col cols="cols">
                            <v-autocomplete label="Shows" :items="[3, 5, 10, 15]" variant="underlined"
                                v-model="rowCountPage"></v-autocomplete>
                        </v-col>
                        <v-col cols="cols">
                            <v-pagination v-model="page" :length="length" @next="nextPage" @prev="prevPage"></v-pagination>
                        </v-col>
                    </v-row>
                </v-container>
            </v-card>
        </v-container>
    </div>
</template>
  
<script>
import titleBar from "@/components/titlebar/titlebar-component.vue";
export default {
    components: {
        titleBar,
    },
    data() {
        return {
            title: "Product Page",
            routes: [
                {
                    title: "Product Page",
                    disabled: false,
                    href: "product",
                },
            ],
            search: '',
            page: 1,
            products: [
                {
                    "id": 1,
                    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                    "price": 109.95,
                    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                    "category": "men's clothing",
                    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                    "rating": {
                        "rate": 3.9,
                        "count": 120
                    }
                }
            ],
            rowCountPage: 5,
        };
    },
    computed: {
        filteredData() {
            if (this.search) {
                return this.products.filter((item) => {
                    return item.name.toLowerCase().includes(this.search.toLowerCase())
                })
            } else {
                return this.products
            }
        },
        paginatedData() {
            const start = (this.page - 1) * this.rowCountPage
            const end = start + this.rowCountPage
            return this.filteredData.slice(start, end)
        },
        length() {
            return Math.ceil(this.filteredData.length / this.rowCountPage)
        }
    },
    methods: {
        nextPage() {
            if (this.page < this.length) {
                this.page++
            }
        },
        prevPage() {
            if (this.page > 1) {
                this.page--
            }
        },
        deleteProduct() {
            alert('delete product')
        },
        updateProduct() {
            alert('update product')
        }
    }
};
</script>
  
<style scoped>
.mb {
    margin-bottom: 15px;
}

.main-bg {
    background-color: rgb(227, 227, 221);
    height: 100%;
}

.footer {
    margin-top: 57%;
}
</style>
  