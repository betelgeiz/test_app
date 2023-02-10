<template>
  <div>
    <v-alert
      dense
      text
      type="success"
    >
      {{ getToken }}
    </v-alert>
    <OrderBook :title="'bids'" :arr="getBids" />
    <OrderBook :title="'asks'" :arr="getAsks" />
  </div>
</template>

<script>
import OrderBook from '../components/OrderBook'
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',

  components: {
    OrderBook
  },
  data: () => ({
  }),
  created() {
    this.getOrderBook()
  },
  computed: {
    ...mapGetters(['getBids', 'getAsks', 'getToken'])
  },
  methods: {
    ...mapActions(['getOrderBook'])
  }
}
</script>
