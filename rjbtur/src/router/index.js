import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../views/IndexPage.vue';
import MenuPage from '../views/MenuPage.vue';
import OptionsPage from '../views/OptionsPage.vue';
import DescriptionPage from '../views/DescriptionPage.vue';
import UserView from '../views/UserView.vue';
import LoginView from '../views/LoginView.vue';
import CreateUser from '../views/CreateUser.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: IndexPage
  },
  {
    path: '/MenuPage',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/OptionsPage',
    name: 'OptionsPage',
    component: OptionsPage
  },
  {
    path: '/description',
    name: 'description',
    component: DescriptionPage
  },
  {
    path: '/User',
    name: 'User',
    component: UserView
  },
  {
    path: '/UserNew',
    name: 'UserNew',
    component: CreateUser
  },
  {
    path: '/UserLogin',
    name: 'UserLogin',
    component: LoginView
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound 
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
