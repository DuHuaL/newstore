import Vue from 'vue';
import Router from 'vue-router';
// 英雄列表
import HerosList from '@/views/users/list';
// 武器列表
import WeaponsList from '@/views/weapons/list';
// 装备列表
import EquipsList from '@/views/equips/list';

Vue.use(Router);

export default new Router({
  routes: [
    // { name: 'home', path: '/', redirect: '/heros' },
    { name: 'home', path: '/', redirect: { name: 'heros' } },
    { name: 'heros', path: '/heros', component: HerosList },
    { name: 'weapons', path: '/weapons', component: WeaponsList },
    { name: 'equips', path: '/equips', component: EquipsList }
  ]
});
