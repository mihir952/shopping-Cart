<template>
  <div>
   
  <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-3 col-sm-1 sizediv">
    <!-- displaying Cloths sizes -->
    <ClothesSize v-on:sizes="sizes($event)" v-on:filter="filtering"/>
  </div>
   <!-- displaying the products if no filter applied -->
  <div v-if="productFilter.length==0" class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11 container">
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in products" :key="user.id">
        <div class="card shadow-sm">
          <div class="img-bck">
            <img class="models" v-bind:src="user.image" alt="image1"/>
            <p v-if="user.isFreeShipping" class="free">free shipping</p>
          </div>
          <div class="card-body height">
            <p class="card-text" style="direction: ltr; text-align: center;">
              {{user.style}}</p>
            <p class="line_after" style="direction: ltr; text-align: center; font-weight:bold">
              {{"$"+user.price}}</p>  
            <p class="installments" style="direction: ltr; text-align: center;">
                {{"or "+user.installments + " x" +( user.price/user.installments).toFixed(2)}}</p>
                
            <div class="d-flex justify-content-between align-items-center">
            </div>
          </div>
             <!-- emitting product details and quantity -->
          <button type="button" class="btn btn-dark button2" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)" @mousedown="$emit('persist',quantity)" @mouseleave="$emit('quantity',quantity)">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
     <!-- displaying the products if filter applied -->
    <div v-else class="col-xxl-9 col-xl-10 col-lg-10 col-md-9 col-sm-11 container" >
      <h1 class="product_found">{{this.productFilter.length}} product(s) found</h1>
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col-xxl-3 col-sm-6 col-md-4 col-6 hh" v-for="user in productFilter" :key="user.id">
          <div class="card shadow-sm">
            <div class="img-bck">
              <img class="models" v-bind:src="user.image" alt="image1"/>
              <p v-if="user.isFreeShipping" class="free">free shipping</p>
            </div>
            <div class="card-body height">
              <p class="card-text" style="direction: ltr; text-align: center;">
                {{user.style}}</p>
              <p class="line_after" style="direction: ltr; text-align: center; font-weight:bold">
                {{"$"+user.price}}</p>  
              <p class="installments" style="direction: ltr; text-align: center;">
                  {{"or "+user.installments + " x" +( user.price/user.installments).toFixed(2)}}</p>
                  
              <div class="d-flex justify-content-between align-items-center">
              </div>
            </div>
             <!-- emitting product details and quantity -->
            <button type="button" class="btn btn-dark button1" @click="$emit('addtocart',user)" @mouseup="$emit('qty',quantity)">Add to Cart</button>
          </div>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
import '../css/products.css'
import ClothesSize from './ClothesSize.vue';
export default {
  name:"ProductsApp",
data() {
  return {  
    quantity:1,                   //to maintain minimum quantity of one when added to cart and emitting the same
    products : this.product,      //all details of product from store
    productFilter:[],             //filtered products are added here after filteration
    selectedSizes:[],
    count:0             //sizes gets added here(selectedSizes) on click of the sizes
  };
},
props: ['product'],
components:{
  ClothesSize
},
methods:{
// filtering of products based on the sizes in selectedSizes
filtering(){
    let temp =[]                                            //storing the filtered value
    this.productFilter=temp
    this.products.filter((val)=>{                           //filter the products available in products array
      this.selectedSizes.forEach(selectedSize=>{
             val.availableSizes.forEach((sizes)=>{          //loop through each element to find if size already exist 
             if(selectedSize===sizes){
               temp.forEach((val1,idx)=>{
                 if(val.id===val1.id){
                   temp.splice(idx,1)                       //if product already present remove the item from temp array
                            }
                          })
                          temp.push(val)                    //push if not present
                        }
                      })
          })
    })
  },
  //get the sizes when clicked and add it to selectedSizes array
  sizes(size){
      for(let i=0;i<this.selectedSizes.length;i++)
      {
          if(this.selectedSizes[i]===size){
            return this.selectedSizes.splice(i,1)           //remove the size if already present in selectedSizes array 
          }
      }
      this.selectedSizes.push(size)                         //push if size not present
    },
}
};
</script>