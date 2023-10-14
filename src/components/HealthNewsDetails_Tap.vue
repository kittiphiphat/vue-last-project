<template>
  <div class="container mt-4">
    <div class="row">
        <div class="col-lg-8">

            <header class="mb-4">
              <br>           
              <h1 class="fw-bolder mb-0">{{ product.name }}</h1>                                                
              <a class="badge bg-secondary text-decoration-none link-light"  href="#!">NEWS</a>        
            </header>
            <div class="mb-2 ">
                <img :src="product.coverimage" alt="" class="img-fluid round">
                <!-- <p class="fw-bolder mb-4 mt-3">{{ product.title }}</p> -->
            </div>           



        </div>
        <p class="card-text" >{{ product.title }}</p> 
        <p class="card-text" >{{ product.title1 }}</p> 
        <p class="card-text" >{{ product.title2 }}</p> 
        <p class="card-text" >{{ product.title3 }}</p> 
        <p class="card-text" >{{ product.title4 }}</p> 
        <p class="card-text" >{{ product.title5 }}</p> 
    </div>
  </div><br>



</template>

<script setup>
import { useRoute } from 'vue-router'
import { ref,computed } from 'vue';

import { useHealthNews_list } from '@/stores/counter.js';

const all_Art = useHealthNews_list();
const list = ref(all_Art.HealthNews_list);

const route = useRoute()

console.log(route.params.id)

const product = computed(() => {
return list.value.find(item => item.id === route.params.id)
})
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Nunito:ital,wght@1,200;1,700&family=Tilt+Neon&display=swap');


.fw-bolder.mb-0{
 font-size: 30px;
 position: relative;
 display: flex;
 margin-top: -1rem;
 
}
.card-text {
  /* color: #fff; */
  font-size: 20px;
  font-weight: 400;
 
  font-family: 'Mitr', sans-serif;
  padding:  20px;

}
.row{
  padding-left: 1.5rem;
  
  padding-right: 1.5rem;
}

</style>