import Vue from 'vue';
import Router from 'vue-router';
import AccountList from '../components/account/accountBox.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/accountList',
      name: 'AccountList',
      component: AccountList
    }
  ]
});
export default router;
