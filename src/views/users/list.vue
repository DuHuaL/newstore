<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <a href="add.html" class="btn btn-success">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>姓名</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in list" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="#">修改</a>&nbsp;&nbsp;
              <a href="#">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios模块
import axios from 'axios';
export default {
  name: 'list',
  data() {
    return {
      list: []
    };
  },
  mounted() {
    axios.get('http://localhost:3000/heroes')
      .then((res) => {
        if (res.status === 200) {
          this.list = res.data;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};
</script>

<style>

</style>
