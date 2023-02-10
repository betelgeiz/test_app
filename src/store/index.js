import Vue from 'vue'
import Vuex from 'vuex'
import Api from './api.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    orderBook: [],
    token: 'BNBBTC'
  },
  getters: {
    getBids(state) {
      return state.orderBook.bids
    },

    getAsks(state) {
      return state.orderBook.asks
    },

    getToken(state) {
      return state.token
    }
  },
  mutations: {
    setOrderBook(state, data) {
      state.orderBook = data
    },

    setToken(state, token) {
      state.token = token
    }
  },
  actions: {

    async getOrderBook({commit, state}) {
      try {
        let result = await Api.getOrderBook(state.token)
        commit('setOrderBook', result)

      } catch (err) {return err}
    },

    async setToken({commit}, token) {
      try {
        commit('setToken', token)
      } catch (err) {return err}
    }

  },
  modules: {
  }
})