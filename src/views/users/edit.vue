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
      <button type="submit" class="btn btn-success" @click.prevent="handleEdit">修改</button>
    </form>
  </div>
</template>

<script>
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
      this.$http.get(`http://localhost:3000/heroes/${this.id}`)
        .then((res) => {
          if (res.status === 200) {
            this.formData = res.data;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleEdit() {
      this.$http.patch(`http://localhost:3000/heroes/${this.id}`, this.formData)
        .then((res) => {
          if (res.status === 200) {
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
