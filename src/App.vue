<template>
  <div>
    <my-header></my-header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3 col-md-2 sidebar">
          <ul class="nav nav-sidebar">
            <li class="active">
              <a href="#">Overview
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li>
              <a href="#">Reports</a>
            </li>
            <li>
              <a href="#">Analytics</a>
            </li>
            <li>
              <a href="#">Export</a>
            </li>
          </ul>
        </div>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- 列表 -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 导入头部组件
import MyHeader from '@/components/myheader.vue';
export default {
  name: 'App',
  // 注册局部组件
  components: {
    MyHeader
  }
};
</script>

<style>

</style>
