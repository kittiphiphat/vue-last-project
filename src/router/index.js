import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// ข้อมูลสุขภาพ
import HealthView from '../views/Health_View.vue'

import HealthList_1 from '../components/Health/HealthList_1/HealthList_1.vue'
import HealthDetails_1 from '../components/Health/HealthList_1/HealthDetails/HealthDetails_1.vue'

import HealthList_2 from '../components/Health/HealthList_2/HealthList_2.vue'
import HealthDetails_2 from '../components/Health/HealthList_2/HealthDetails/HealthDetails_2.vue'

import HealthList_3 from '../components/Health/HealthList_3/HealthList_3.vue'

// เคล็ดลับสุขภาพ
import HealthTipsView from '../views/HealthTips_View.vue'
import HealthTipsList from '../components/HealthTips/HealthTipsList/HealthTipsList.vue'

// อาหารเพื่อสุขภาพ
import HealtyFoodView from '../views/HealtyFood_View.vue'
import HealtyFoodList from '../components/HealtyFood/HealtyFoodList/HealtyFoodList.vue'

// โรงพยาบาล
import HospitalView from '../views/Hospital_View.vue'
import HospitalList from '../components/Hospital/HospitalList/HospitalList.vue'

// ข่าวสุขภาพ
import NewsDetails_View from '../components/HealthNewsDetails_Tap.vue'
// ล็อคอิน
import loginPage from '../views/LoginPage.vue'
 



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    // ข้อมูลสุขภาพ
    {
      path: '/health',
      name: 'health',
      component: HealthView
    },
    {
      path: '/health/healthlist/1',
      name: 'healthlist_1',
      component: HealthList_1
    },
    {
      path: '/health/healthlist/healthdetails_1/:id',
      name: 'healthdetails',
      component: HealthDetails_1
    },
    {
      path: '/health/healthlist/2',
      name: 'healthlist_2',
      component: HealthList_2
    },
    {
      path: '/health/healthlist/healthdetails_2/:id',
      name: 'healthdetails_2',
      component: HealthDetails_2
    },
    
    {
      path: '/health/healthlist/3',
      name: 'healthlist_3',
      component: HealthList_3
    },

    // เคล็ดลับสุขภาพ
    {
      path: '/healthtips',
      name: 'healthtips',
      component: HealthTipsView
    },
    {
      path: '/healthtips/healthtipslist/:id',
      name: 'healthtipslist',
      component: HealthTipsList
    },

    // อาหารเพื่อสุขภาพ
    {
      path: '/healtyfood',
      name: 'healtyfood',
      component: HealtyFoodView
    },
    {
      path: '/healtyfood/healtyfoodlist/:id',
      name: 'healtyfoodlist',
      component: HealtyFoodList
    },

    // โรงพยาบาล
    {
      path: '/hospital',
      name: 'hospital',
      component: HospitalView
    },
    {
      path: '/hospital/hospitallist/:id',
      name: 'hospitallist',
      component: HospitalList
    },

    // ข่าวสุขภาพ
    {
      path: '/newsdetails/:id',
      name: 'newsdetails',
      component: NewsDetails_View
    },

    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    
    
  ]
})

export default router
