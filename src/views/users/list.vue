<template>
  <div>
    <h2 class="sub-header">英雄列表</h2>
    <!-- <a href="add.html" class="btn btn-success">Add</a> -->
    <router-link :to="{ name: 'herosAdd'}" class="btn btn-success">添加</router-link>
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
              <!-- <a href="javascript:void(0)">修改</a> -->
              <!-- <router-link :to="'/heros/edit/'+item.id"></router-link> -->
              <router-link :to="{ name: 'herosEdit', params: { id: item.id}}">编辑</router-link>
              &nbsp;&nbsp;
              <a href="javascript:void(0)" @click.prevent="handleDelete(item.id)">删除</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
// 导入axios模块
export default {
  name: 'list',
  data() {
    return {
      list: []
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      this.$http
        .get('http://localhost:3000/heroes')
        .then(res => {
          if (res.status === 200) {
            this.list = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    handleDelete(id) {
      if (!confirm('是否删除？')) {
        return;
      }
      this.$http
        .delete(`http://localhost:3000/heroes/${id}`)
        .then(res => {
          if (res.status === 200) {
            this.loadData();
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
