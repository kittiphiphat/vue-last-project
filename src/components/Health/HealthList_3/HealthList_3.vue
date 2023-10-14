<template>
  
  <div class="album py-0 bg-body-tertiary" style="max-width: 100%;">        
    <div class="container" style="padding: 2rem; max-width: 100%;">
      <div class="row row-cols-1 g-3">
        <div class="col" style="padding: 1rem;" v-for="(i,index) in HealthDetails_3_list" :key="index">
          <div class="card shadow-sm">
            <div class="center" >
              <h1 class="headname">{{ i.name }}</h1>
              <div class="container-img">
                <img :src="i.coverimage" :alt="name" style="width: 60%; padding: 20px;">
              </div>
            </div>
            <div class="card-body" >

              <h2 class="card-text">{{ i.name }}</h2>
              <p class="card-text">{{ i.description }}</p>
              <p class="card-text">{{ i.description_1 }}</p>
              <p class="card-text">{{ i.description_2 }}</p>
              <p class="card-text">{{ i.description_3 }}</p><br>

            </div>
          </div>
        </div>

      </div>
    </div>   
  </div>

</template>
  
<script setup>

import { ref } from 'vue';
import { useHealthDetails_3_list } from '@/stores/counter.js';

const healthdetails_3_all = useHealthDetails_3_list();
const HealthDetails_3_list = ref(healthdetails_3_all.HealthDetails_3_list);
  
</script>
  
<style scoped>

.bd-placeholder-img {
        font-size: 1.125rem;
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      @media (min-width: 1400px) {
        .container, .container-lg, .container-md, .container-sm, .container-xl, .container-xxl, .container-img {
            max-width: 1400px;
        }
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

      .b-example-divider {
        width: 100%;
        height: 3rem;
        background-color: rgba(0, 0, 0, .1);
        border: solid rgba(0, 0, 0, .15);
        border-width: 1px 0;
        box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
      }

      .b-example-vr {
        flex-shrink: 0;
        width: 1.5rem;
        height: 100vh;
      }

      .bi {
        vertical-align: -.125em;
        fill: currentColor;
      }

      .nav-scroller {
        position: relative;
        z-index: 2;
        height: 2.75rem;
        overflow-y: hidden;
      }

      .nav-scroller .nav {
        display: flex;
        flex-wrap: nowrap;
        padding-bottom: 1rem;
        margin-top: -1px;
        overflow-x: auto;
        text-align: center;
        white-space: nowrap;
        -webkit-overflow-scrolling: touch;
      }

      .btn-bd-primary {
        --bd-violet-bg: #712cf9;
        --bd-violet-rgb: 112.520718, 44.062154, 249.437846;

        --bs-btn-font-weight: 600;
        --bs-btn-color: var(--bs-white);
        --bs-btn-bg: var(--bd-violet-bg);
        --bs-btn-border-color: var(--bd-violet-bg);
        --bs-btn-hover-color: var(--bs-white);
        --bs-btn-hover-bg: #6528e0;
        --bs-btn-hover-border-color: #6528e0;
        --bs-btn-focus-shadow-rgb: var(--bd-violet-rgb);
        --bs-btn-active-color: var(--bs-btn-hover-color);
        --bs-btn-active-bg: #5a23c8;
        --bs-btn-active-border-color: #5a23c8;
      }

      .bd-mode-toggle {
        z-index: 1500;
      }

      .bd-mode-toggle .dropdown-menu .active .bi {
        display: block;
      }
      
   .headname{
    /* color: #fff; */
    justify-content: center;
    text-align: center;
    max-width: 100%;
    padding: 0.8rem;
    margin-top: 8px;

    font-family: 'Mitr', sans-serif;
    font-weight: 400;
    
   }
   .navmenu{
    background-image: linear-gradient(90deg, #276A87 45%, #8BCCE8 100%);
    height: 120px;
   }

h2 {
  font-family: 'Mitr', sans-serif;
  font-weight: 400;
}

p {
  font-family: 'Mitr', sans-serif;
  font-weight: 400;
  font-size: 20px;
}
.container-img {
  text-align: center; 
}
.card {
  /* background-image: linear-gradient(0deg, #276A87 45%, #8BCCE8 100%); */
}
.card:hover {
  transform: translateY(-5px);
  border: 0.2px solid #276A87;
  transition: transform 0.3s ease;
}
.card-text {
  /* color: #fff; */
  padding: 0 15px 0 15px;
}
.btn {
  color: #fff;
}
.album {
  background: linear-gradient(180deg, #B7EEFF 0%, rgba(255, 251, 220, 0.7) 53.65%, #9FE2FF 100%);

}


</style>
