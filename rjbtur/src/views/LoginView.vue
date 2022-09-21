<template>
  <div class="content">
    <header-component/>

    <p class="h2 text-center pb-4">Entrar</p>

    <form class="px-3 user-form" @submit.prevent>
      <div class="alert alert-danger"
        v-for="(error, index) in errors" :key="index">{{error}}
      </div>
      <div class="d-flex flex-column gap-4">
        <input v-model="username" @keydown.enter.prevent="tryLogin" type="text" class="form-control text-center" placeholder="Nome de usuario">
        <input v-model="password" @keydown.enter.prevent="tryLogin" type="password" class="form-control text-center" placeholder="Senha">
        <div class="d-flex gap-2">
          <button class="btn btn-primary w-50" @click="goToCreateUser">Criar conta</button>
          <button class="btn btn-primary w-50" @click="tryLogin">Entrar</button>
        </div>
        <button class="btn btn-primary w-50" @click="goBack">Voltar</button>
      </div>
    </form>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import { mapActions } from 'vuex';

export default {
  components: { HeaderComponent },

  data() {
    return {
      username: '',
      password: '',
      errors: []
    }
  },

  methods: {
    ...mapActions('index', ['setUser']),

    goToCreateUser() {
      this.$router.push('/UserNew');
    },
    tryLogin() {
      if (!this.validate()) return;

      const user = this.login();

      if (!user) {
        this.errors.push('Usuario não encontrado')
        return;
      }

      this.setUser(user);
      this.$router.push('/');
    },
    goBack() {
      history.back();
    },
    validate() {
      let errors = [];

      if (!this.username)
        errors.push('Nome de usuario não pode ficar vazio.');

      if (!this.password)
        errors.push('A senha não pode ficar vazia.');

      this.errors = errors;

      if (errors.length) return false;

      return true;
    },
    login() {
      const users = JSON.parse(localStorage.getItem('users'));

      return users.find(user => {
        return (user.username == this.username && user.password == this.password);
      });
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(#F7C040, #66B2FF);
  padding-bottom: 10px;
}

@media (min-width: 960px) {
  .user-form {
    margin: 0 15%;
  }
}
</style>