<template>
  <header class="mb-3">
    <div class="header">
      <h1 class="d-none">RJBTUR</h1>
      <img src="../assets/icons/menu-icon.svg" @click="goToOptions" class="menu-icon" alt="icone de menu">
      <img src="../assets/images/logo-rjbtur-removebg-preview.png" class="pointer mt-3" @click="goToHome" alt="Logo rjbtur" title="logo rjbtur">
      <img v-if="logged" src="../assets/icons/user-solid.svg" @click="goToUser" class="user-icon pointer" alt="icone de usuario">
      <img v-else src="../assets/icons/not-user.svg" @click="goToUser" class="user-icon pointer" alt="icone de usuario riscado">
    </div>
    <h2 class="text-center page-breadcrumb">{{breadcrumb}}</h2>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    breadcrumb: {
      required: true,
      type: String
    }
  },

  computed: {
    ...mapState('index', ['user']),

    logged() {
      return this.user != undefined;
    }
  },

  methods: {
    goToOptions() {
      this.goTo('/MenuPage');
    },
    goToHome() {
      this.goTo('/');
    },
    goToUser() {
      if (!this.logged)
        return this.goTo('/UserLogin');

      this.goTo('/User');
    },
    goTo(path) {
      this.$router.push(path);
    }
  }
}
</script>

<style scoped>
* {
  color: #313638;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.menu-icon {
  max-height: 40px;
  cursor: pointer;
}

.user-icon {
  max-height: 40px;
}

.pointer {
  cursor: pointer;
}

.page-breadcrumb {
  font-size: 0.8em;
}
</style>