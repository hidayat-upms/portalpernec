import { createRouter, createWebHistory } from 'vue-router';
import Team from '@/Pages/Team.vue';
import Blog from '@/Pages/Blog.vue';
import Home from '@/Pages/Home.vue';
import HomeTwo from '@/Pages/HomeTwo.vue';
import Contact from '@/Pages/Contact.vue';
import HomeThree from '@/Pages/HomeThree.vue';
import Portfolio from '@/Pages/Portfolio.vue';
import TeamDetails from '@/Pages/TeamDetails.vue';
import BlogDetails from '@/Pages/BlogDetails.vue';
import PortfolioDetails from '@/Pages/PortfolioDetails.vue';
import ServiceDetails from '@/Pages/ServiceDetails.vue';
import Service from '@/Pages/Service.vue';
import About from '@/Pages/About.vue'; 

import NotFound from '@/Pages/NotFound.vue' 

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
      path: '/blog',
      component: Blog
    },
    {
      path: '/blog-details',
      component: BlogDetails
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
router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0); 
  next(); 
})

export default router