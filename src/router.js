import { createRouter, createWebHistory } from 'vue-router';
import CreateCountry from './components/CreateCountry.vue';
import CountryList from './components/CountryList.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CountryList
    },
    {
      path: '/add',
      component: CreateCountry
    }
  ]
});

router.afterEach((toRoute) => {
  window.document.title =
    (toRoute.meta.length > 0 && toRoute.meta.title)
      ? toRoute.meta.title
      : (toRoute.name
          ? toRoute.name.replace(/\w\S*/g, function (txt) {
              return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            })
          : '');
});

export default router;
