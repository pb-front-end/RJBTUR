<template>
  <div class="content">
    <header-component breadcrumb="/Dados do usuario"/>

    <p class="h2 text-center pb-4">Dados do usuario</p>

    <form class="px-3 user-form" @submit.prevent autocomplete="off">
      <div class="alert alert-danger"
        v-for="(error, index) in errors" :key="index">{{error}}
      </div>
      <div class="d-flex flex-column gap-4">
        <input v-model="username" @keydown.enter.prevent="trySave" type="text" class="form-control text-center" placeholder="Nome de usuario">
        <input autocomplete="false" disabled v-model="email" @keydown.enter.prevent="trySave" type="text" class="form-control text-center" placeholder="Email de usuario">
        <input autocomplete="false" v-model="newPassword" @keydown.enter.prevent="trySave" type="password" class="form-control text-center" placeholder="Nova senha">
        <input autocomplete="new-password" v-model="passwordConfirmation" @keydown.enter.prevent="trySave" type="password" class="form-control text-center" placeholder="Confirme a senha">
        <input v-model="password" @keydown.enter.prevent="trySave" type="password" class="form-control text-center" placeholder="Senha atual">
        <div class="d-flex gap-2">
          <button type="button" class="btn btn-primary w-50" @click="goBack">Voltar</button>
          <button type="button" class="btn btn-primary w-50" @click="trySave">Salvar</button>
        </div>
        <button type="button" class="btn btn-primary" @click="exit">Sair</button>
      </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable no-useless-escape */
import HeaderComponent from '../components/HeaderComponent.vue'
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
  components: { HeaderComponent },

  data() {
    return {
      username: '',
      email: '',
      password: '',
      newPassword: '',
      passwordConfirmation: '',
      errors: []
    }
  },

  mounted() {
    if (this.user === undefined)
      return this.$router.push('/');

    this.username = this.user.username;
    this.email = this.user.email;
  },

  computed: {
    ...mapState('index', ['user'])
  },

  methods: {
    ...mapActions('index', ['setUser', 'logoff']),

    exit() {
      this.logoff();
      this.$router.push('/');
    },

    trySave() {
      if (!this.validate()) return;

      this.saveUser();
    },
    saveUser() {
      const user = {
        username: this.username,
        email: this.email,
        password: this.newPassword
      };

      this.saveUserInStorage(user);

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

      if (this.newPassword.length <= 4)
        errors.push('A senha deve ter mínimo 5 dígitos.');

      if (this.newPassword !== this.passwordConfirmation)
        errors.push('A senha e a confirmação senha devem ser iguais.');

      if (this.password !== this.user.password)
        errors.push('Senha atual incorreta.')

      this.errors = errors;

      if (errors.length) return false;

      return true;
    },
    emailTest(email) {
      const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

      return re.test(email);
    },
    saveUserInStorage(user) {
      let users = this.getCurrentUsers();

      const userIndex = users.findIndex(({id}) => { return (id === this.user.id) });

      users[userIndex] = user;

      localStorage.setItem(
        'users',
        JSON.stringify(users)
      );
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