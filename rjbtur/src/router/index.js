import { createRouter, createWebHistory } from 'vue-router';
import IndexPage from '../views/IndexPage.vue';
import MenuPage from '../views/MenuPage.vue';
import AddEventForm from '../views/AddEventForm.vue';
import OptionsPage from '../views/OptionsPage.vue';
import DescriptionPage from '../views/DescriptionPage.vue';

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
    path: '/AddEventForm',
    name: 'AddEventForm',
    component: AddEventForm
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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
