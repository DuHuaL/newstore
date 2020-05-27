<template>
  <div>
    <h2 class="sub-header">修改英雄</h2>
    <form>
      <div class="form-group">
        <label for="username">英雄姓名</label>
        <input v-model="formData.name" type="text" class="form-control" id="username">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input v-model="formData.gender" type="text" class="form-control" id="gender">
      </div>
      <button type="submit" class="btn btn-success">修改</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      },
      id: -1
    };
  },
  mounted() {
    this.id = this.$route.params.id;
    this.init();
  },
  methods: {
    init() {
      axios.get(`http://localhost:3000/heroes/${this.id}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
};
</script>

<style>
</style>
