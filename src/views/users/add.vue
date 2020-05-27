<template>
  <div>
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="name">英雄姓名</label>
        <input type="text" class="form-control" id="name" placeholder="name" v-model="formData.name">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input
          type="text"
          class="form-control"
          id="gender"
          placeholder="gender"
          v-model="formData.gender"
        >
      </div>
      <button type="submit" class="btn btn-success" @click.prevent="handleAdd">提交</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'add',
  data() {
    return {
      formData: {
        name: '',
        gender: ''
      }
    };
  },
  methods: {
    handleAdd() {
      this.$http.post('http://localhost:3000/heroes', this.formData)
        .then((res) => {
          if (res.status === 201) {
            this.$router.push({ name: 'heros' });
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
