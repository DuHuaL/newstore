import Vue from 'vue';
import Router from 'vue-router';
// 英雄列表
import HerosList from '@/views/users/list';
// 武器列表
import WeaponsList from '@/views/weapons/list';
// 装备列表
import EquipsList from '@/views/equips/list';
// 添加英雄
import HerosAdd from '@/views/users/add';
// 修改英雄
import HerosEdit from '@/views/users/edit';
Vue.use(Router);

export default new Router({
  routes: [
    // { name: 'home', path: '/', redirect: '/heros' },
    { name: 'home', path: '/', redirect: { name: 'heros' } },
    { name: 'heros', path: '/heros', component: HerosList },
    { name: 'weapons', path: '/weapons', component: WeaponsList },
    { name: 'equips', path: '/equips', component: EquipsList },
    { name: 'herosAdd', path: '/heros/add', component: HerosAdd },
    { name: 'herosEdit', path: '/heros/edit/:id', component: HerosEdit }
  ]
});
