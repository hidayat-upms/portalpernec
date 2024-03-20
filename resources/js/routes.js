import { createRouter, createWebHistory } from 'vue-router';
import Team from '@/Pages/Team.vue';
import Blog from '@/Pages/Blog.vue';
import HomeTwo from '@/Pages/HomeTwo.vue';
import Contact from '@/Pages/Contact.vue';
import HomeThree from '@/Pages/HomeThree.vue';
import Portfolio from '@/Pages/Portfolio.vue';
import TeamDetails from '@/Pages/TeamDetails.vue';
import BlogDetails from '@/Pages/BlogDetails.vue';
import Whistleblowing from '@/Pages/Governance/Whistleblowing.vue';
import AntiBribery from '@/Pages/Governance/AntiBribery.vue';
import Nogift from '@/Pages/Governance/Nogift.vue'
import PortfolioDetails from '@/Pages/PortfolioDetails.vue';
import ServiceDetails from '@/Pages/ServiceDetails.vue';
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


const router = createRouter({ 
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeTwo
    },
    {
      path: '/home',
      component: HomeTwo
    },
    {
      path: '/',
      component: HomeTwo
    },
    {
      path: '/home-3',
      component: HomeThree
    },
    {
      path: '/contact',
      component: Contact
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio-details',
      component: PortfolioDetails
    },
    {
      path: '/team',
      component: Team
    },
    {
      path: '/team-details',
      component: TeamDetails
    },
    {
      path: '/service',
      component: Service
    }, 
    {
      path: '/service-details',
      component: ServiceDetails
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