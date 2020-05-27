<template>
  <div class="col-sm-3 col-md-2 sidebar">
    <ul class="nav nav-sidebar">
        <!-- <a href="#">英雄管理</a> -->
        <router-link tag="li" to="/heros" active-class="active">
          <a>英雄管理</a>
        </router-link>
        <!-- <a href="#">武器管理</a> -->
        <router-link to="/weapons" tag="li" active-class="active">
          <a>武器管理</a>
        </router-link>
        <!-- <a href="#">装备管理</a> -->
        <router-link to="/equips" tag="li" active-class="active">
          <a>装备管理</a>
        </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'mysidebar'
};
</script>

<style>
</style>
