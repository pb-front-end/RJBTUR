<template>
  <div class="content">
    <header-component/>

    <p class="h2 text-center pb-4">Cadastro</p>

    <form class="px-3 user-form" @submit.prevent>
      <div class="alert alert-danger"
        v-for="(error, index) in errors" :key="index">{{error}}
      </div>
      <div class="d-flex flex-column gap-4">
        <input v-model="username" @keydown.enter.prevent="tryCreateLogin" type="text" class="form-control text-center" placeholder="Nome de usuario">
        <input v-model="email" @keydown.enter.prevent="tryCreateLogin" type="text" class="form-control text-center" placeholder="Email de usuario">
        <input v-model="password" @keydown.enter.prevent="tryCreateLogin" type="password" class="form-control text-center" placeholder="Senha">
        <input v-model="passwordConfirmation" @keydown.enter.prevent="tryCreateLogin" type="password" class="form-control text-center" placeholder="Confirme a senha">
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-primary w-50" @click="goBack">Voltar</button>
          <button type="button" class="btn btn-primary w-50" @click="tryCreateLogin">Confirmar criação</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import HeaderComponent from '../components/HeaderComponent.vue'
import { mapActions } from 'vuex';

export default {
  components: { HeaderComponent },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: []
    }
  },

  methods: {
    ...mapActions('index', ['setUser']),

    tryCreateLogin() {
      if (!this.validate()) return;

      this.createUser();
    },
    createUser() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.password
      };

      if (this.userExists(user))
        return this.errors.push('Esse email já foi usado.');

      this.saveUser(user);

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

      if (!this.email || !this.emailTest(this.email))
        errors.push('Email de usuario deve ser valido.');

      if (this.password.length <= 4)
        errors.push('A senha deve ter mínimo 5 dígitos.');

      if (this.password !== this.passwordConfirmation)
        errors.push('A senha e a confirmação senha devem ser iguais.');

      this.errors = errors;

      if (errors.length) return false;

      return true;
    },
    emailTest(email) {
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      return re.test(email);
    },
    saveUser(user) {
      const users = this.getCurrentUsers();
      users.push(user);

      localStorage.setItem(
        'users',
        JSON.stringify(users)
      );
    },
    userExists(user) {
      return !!this.getCurrentUsers().find(userObject => userObject.email === user.email);
    },
    getCurrentUsers() {
      return JSON.parse(localStorage.getItem('users'));
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