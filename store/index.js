import { createStore } from 'vuex'
import details from '../data.json'

export default createStore({
  state: {
    products: [],                       //store all the data from data.json
    card: [],                           //store the data that are added to cart
    qty:[]                              //store the quantity that is added to cart
  },
  mutations: {
    getProducts(state, products){
      state.products = products                   //add the data to products from data.json
    }
  },
  actions:{
    getProductsAction({commit}){
      commit('getProducts',details.products)      //commit the changes in the store
    }
  },
})
