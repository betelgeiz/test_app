<template>
    <div>
        <v-container fluid>
            <v-alert :value="alert" v-model="alert" dismissible color="blue" border="left" elevation="2" colored-border
                icon="mdi-information">
                Вы успешно сменили токен!
            </v-alert>
            <v-row align="center">

                <v-col class="d-flex" cols="12" sm="6">
                    <v-select v-model="value" :items="items" label="Выберите символ"
                        @change="selectedValue(value)"></v-select>
                </v-col>
            </v-row>
            <p v-for="(item, index) in list" :key="index">{{ `${index + 1}. ${item}` }}</p>

            
        </v-container>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    data: () => ({
        items: ['BTCUSDT', 'BNBBTC', 'ETHBTC'],
        value: [],
        list: [],
        alert: false
    }),
    methods: {
        ...mapActions(['setToken']),
        selectedValue(val) {
            this.list.push(val)
            this.setToken(val)
            this.alert = true
            setTimeout(() => {
                this.alert = false
            }, 2000)
        }

    }
}
</script>