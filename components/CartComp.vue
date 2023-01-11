<template>
     <!-- nav to slide the cart -->
<nav>
        <div id="mySidenav" class="sidenav">
             <!-- close the cart when clicked -->
            <a class="closebtn" @click="closeNav">&times;</a>
            <div class="cart_hover">
                <header class="cart_in_qty cart_header">
                    <div>
                        <!-- cart image when cart is open -->
                        <img src="../assets/cart_40px.png" alt=""/>
                        <span class="badge badge-warning cartcapacity">{{cartItems.length}}</span>
                    </div>
                    <br>
                    <div class="cart_heading">
                        <p>Cart</p>
                    </div>
                </header>
                <hr>
                 <!-- display all the products added to cart -->
                <div class="cart_products">
                    <div v-if="cartItems[0]==null">Add some products in the cart</div>
                     <!-- loop through all the products available in the card of store -->
                    <div v-else  v-for="(products,key) in cartItems" :key="key" class="cart_items">
                        <div> 
                            <img v-bind:src="products.image" alt="">
                        </div>
                        <div class="cart_content">
                            <h2>{{products.style}}</h2>
                            <p>{{products.title}}</p>
                            <p>Quantity:{{this.$store.state.qty[key]}}</p>
                        </div>
                        <div class="cart_content2">
                            <button><span class="remove" @click="removedata(key)">X</span></button>
                            <p>${{products.price}}</p>
                            <div class="quantity">
                                    <button class="decrements" @click="decrement(key)">-</button>
                                    <button class="increments" @click="increment(key)">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bottom">
                    <div class="content_bottom">
                        <p>Subtotal</p>
                        <p> ${{prices.subtotal.toFixed(2)}} </p>
                    </div>
                     <button class="w-100 btn btn-dark btn-lg" type="submit" @click="persist" @mousedown="quantity">checkout</button>
                </div>
            </div>
        </div>
         <!-- slide(open) cart when clicked -->
        <div class="cart_qty" @click="openNav"> 
            <img src="../assets/cart_40px.png" alt=""/>
            <span class="badge badge-warning" id="lblCartCount">{{cartItems.length}}</span>
        </div>
</nav>
</template>
<script>
import '../css/header.css'
export default{
    name:'CartComp',
    data(){
        return{
            cartItems : this.$store.state.card, //assign the items of global store card
            name:[],    //array to store product details in localstorage
            qnty:[]     //array to store Quantity in localstorage
        }
    },
    //when cart is created add the localstorage
    created(){
        if(localStorage.name) 
            this.name = localStorage.name;
        if(localStorage.qnty) 
            this.qnty = localStorage.qnty;
    },
    methods:{
        //open the cart in a sliding manner when called
        openNav() {
            document.getElementById("mySidenav").style.width = "450px";
            if(screen.width < 667){
                document.getElementById("mySidenav").style.width = "350px";
            }
        },
        //close the cart in a sliding manner when called
        closeNav() {

            document.getElementById("mySidenav").style.width = "0";
        },
        //when called sets the product details to localstorage
        persist() {
        localStorage.name = JSON.stringify(this.$store.state.card);
        },
        //when called sets the quantity to localstorage
        quantity() {
        localStorage.qnty = JSON.stringify(this.$store.state.qty);   
        
        },
        //remove the data from cart when clicked
        removedata(key){
             this.$store.state.card.splice(key,1)
             this.$store.state.qty.splice(key,1)
             localStorage.name = JSON.stringify(this.$store.state.card)
             localStorage.qnty = JSON.stringify(this.$store.state.qty)
        },
        //increase the quantity in cart
        increment(key){
           return this.$store.state.qty[key]++
        },
        //decrease the quantity in cart
        decrement(key){
            if(this.$store.state.qty[key]>1){

                return this.$store.state.qty[key]-- 
            }
        },
        },
        computed:{
        //calcluate the total price of products in the cart
          prices: function(){
            let price=0
            let cards = this.$store.state.card
            let qty = this.$store.state.qty
        for(let i=0;i<cards.length;i++){
            price+=cards[i].price*qty[i]                     //add all the prices multiplied with quantity, present in the cart 
            }
        return  {
            subtotal:Number(price)                           //return the total price after adding all the prices
            }
        }
        },
    }
</script>