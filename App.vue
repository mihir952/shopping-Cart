<template>
  <div>
    <!-- header Component -->
    <CartComp/>
    <div class="row section_2 container">
      <!-- product Component -->
      <ProductsVue :product="product" v-on:addtocart="products($event)" v-on:qty="qty($event)"/>
    </div>
  </div>
</template>
<script>
//import component
import CartComp from './components/CartComp.vue'
import ProductsVue from './components/ProductsVue.vue';

export default {
  name: 'NameApp',
  created(){
    //dispatch the data from store
    this.$store.dispatch('getProductsAction')
    this.product = this.$store.state.products
  },
  data(){
    return{
      //getting product details from store 
      product : this.$store.state.products,
    }
  },
  components: {
    CartComp,
    ProductsVue,
  },
  methods:{
    //add the data to card of store on click of "addtocart"
    products(details){
      let item = this.$store.state.card.find( i => i.id === details.id)
      if(item){
        return 
      }else{
        return this.$store.state.card.push(details)
      }
    },
    //add the quantity to qty of store on click of "addtocart"
    qty(qnty){   
      if( this.$store.state.qty.length<=this.$store.state.card.length ){
        this.$store.state.qty.push(qnty)
        return qnty 
      }else{
        return 0
      }     
    }
  }
}
</script>
<style>
  .section_2{
    margin: 50px auto;
  }

  @media screen and (max-width : 820px) {
    
  }
</style>
