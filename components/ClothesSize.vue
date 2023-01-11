<template>
    <div class="filter">
        <h2 class="heading_size">Sizes :</h2>
         <!-- display the different sizes available -->
        <ul>
            <li class="ss" v-for="(size,key) in sizes" :key="key">
              <input @click="$emit('sizes',size)" type="checkbox" :id="key" name="check_2" @change="$emit('filter',key)" value="check_2">
              <label :for="key">{{size}}</label>
            </li>
          </ul>
    </div>
</template>
  
<script>
 import '../css/clothsize.css'
  export default{
    name : 'ClothesSize',
    data(){  
    return {
      //All the available sizes from the data
      sizes : ['XS','S','M','ML','L','XL','XXL','X'],
  }},
  }
</script>
