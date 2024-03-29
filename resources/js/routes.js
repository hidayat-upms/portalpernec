import { createRouter, createWebHistory } from 'vue-router';
import Team from '@/Pages/Team.vue';
import HomeTwo from '@/Pages/HomeTwo.vue';
import Contact from '@/Pages/Contact.vue';
import Whistleblowing from '@/Pages/Governance/Whistleblowing.vue';
import AntiBribery from '@/Pages/Governance/AntiBribery.vue';
import Nogift from '@/Pages/Governance/Nogift.vue'
import Service from '@/Pages/Service.vue';
import About from '@/Pages/About.vue'; 
import NotFound from '@/Pages/NotFound.vue' 
import Itessentials from '@/Pages/Service-details/Itessentials.vue';
import Defence from '@/Pages/Service-details/Defence.vue';
import Deployment from '@/Pages/Service-details/Deployment.vue';
import Digital from '@/Pages/Service-details/Digital.vue';
import Power from '@/Pages/Service-details/Power.vue';
import Productivity from '@/Pages/Service-details/Productivity.vue';
import PublicSafety from '@/Pages/Service-details/PublicSafety.vue';
import CyberSecurity from '@/Pages/Service-details/CyberSecurity.vue';
import Telecommunication from '@/Pages/Service-details/Telecommunication.vue';
import BoDOne from '@/Pages/Teams-details/bod1.vue';
import BoDTwo from '@/Pages/Teams-details/bod2.vue';
import BoDThr from '@/Pages/Teams-details/bod3.vue';
import BoDFour from '@/Pages/Teams-details/bod4.vue';
import BoDFive from '@/Pages/Teams-details/bod5.vue';
import BoDSix from '@/Pages/Teams-details/bod6.vue';
import BoDSvn from '@/Pages/Teams-details/bod7.vue';
import BoDEig from '@/Pages/Teams-details/bod8.vue';
import BoDNine from '@/Pages/Teams-details/bod9.vue';
import BoDTen from '@/Pages/Teams-details/bod10.vue';
import BoDEle from '@/Pages/Teams-details/bod11.vue';
import BoDTwel from '@/Pages/Teams-details/bod12.vue';
import BoDThi from '@/Pages/Teams-details/bod13.vue';
import ms1 from '@/Pages/Teams-details/ms1.vue';
import ms2 from '@/Pages/Teams-details/ms2.vue';
import ms3 from '@/Pages/Teams-details/ms3.vue';
import ms4 from '@/Pages/Teams-details/ms4.vue';
import ms5 from '@/Pages/Teams-details/ms5.vue';
import ms6 from '@/Pages/Teams-details/ms6.vue';
import ms7 from '@/Pages/Teams-details/ms7.vue';
import ms8 from '@/Pages/Teams-details/ms8.vue';
import ms9 from '@/Pages/Teams-details/ms9.vue';
import ms10 from '@/Pages/Teams-details/ms10.vue';
import ms11 from '@/Pages/Teams-details/ms11.vue';
import ms12 from '@/Pages/Teams-details/ms12.vue';
import ms13 from '@/Pages/Teams-details/ms13.vue'
import policy from '@/Pages/policy.vue';

const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeTwo,
      
    },
    {
      path: '/home',
      component: HomeTwo,
      
    },
  
    {
      path: '/',
      component: HomeTwo,
    },
    {
      path: '/contact',
      component: Contact,
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/bod1',
      component: BoDOne
    },
    {
      path: '/bod2',
      component: BoDTwo
    },
    {
      path: '/bod3',
      component: BoDThr
    },
    {
      path: '/bod4',
      component: BoDFour
    },
    {
      path: '/bod5',
      component: BoDFive
    },
    {
      path: '/bod6',
      component: BoDSix
    },
    {
      path: '/bod7',
      component: BoDSvn
    },
    {
      path: '/bod8',
      component: BoDEig
    },
    {
      path: '/bod9',
      component: BoDNine
    },
    {
      path: '/bod10',
      component: BoDTen
    },
    {
      path: '/bod11',
      component: BoDEle
    },
    {
      path: '/bod12',
      component: BoDTwel
    },
    {
      path: '/bod13',
      component: BoDThi
    },
    {
      path: '/ms1',
      component: ms1
    },
    {
      path: '/ms2',
      component: ms2
    },
    
    {
      path: '/ms3',
      component: ms3
    },
    
    {
      path: '/ms4',
      component: ms4
    },
    
    {
      path: '/ms5',
      component: ms5
    },
    
    {
      path: '/ms6',
      component: ms6
    },
    
    {
      path: '/ms7',
      component: ms7
    },
    
    {
      path: '/ms8',
      component: ms8
    },
    
    {
      path: '/ms9',
      component: ms9
    },
    
    {
      path: '/ms10',
      component: ms10
    },
    
    {
      path: '/ms11',
      component: ms11
    },
    
    {
      path: '/ms12',
      component: ms12
    },
    
    {
      path: '/ms13',
      component: ms13
    },
    
    {
      path: '/service',
      component: Service
    }, 
    {
      path: '/it-essentials',
      component: Itessentials
    }, 
    {
      path: '/cyber-security',
      component: CyberSecurity
    },   
    {
      path: '/telecommunication',
      component: Telecommunication
    },
    {
      path: '/public-safety',
      component: PublicSafety
    },
    {
      path: '/digital-transformation-enabler',
      component: Digital
    },
    {
      path: '/ict-productivity-suites',
      component: Productivity
    },
    {
      path: '/power-and-utilities',
      component: Power
    },
    {
      path: '/defence-tactical-solutions',
      component: Defence
    },
    {
      path: '/deployment-operation-services',
      component: Deployment
    },
    {
      path: '/whistleblowing',
      component: Whistleblowing
    }, 
    {
      path: '/anti-bribery-corruption',
      component: AntiBribery
    },
    {
      path: '/no-gift',
      component: Nogift
    }, 
    {
      path: '/about',
      component: About
    }, 

    { 
      path: '/policy', 
      component: policy
    },

    { 
      path: '/:pathMatch(.*)*', 
      component: NotFound
    },
  ]
 
})

// Global navigation guard
router.beforeEach((to, from,next) => {
  window.scrollTo(0, 0); 
  next(); 
})


export default router
