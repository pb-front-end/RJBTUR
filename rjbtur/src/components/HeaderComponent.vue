<template>
  <header>
    <h1 class="d-none">RJBTUR</h1>
    <img src="../assets/icons/menu-icon.svg" @click="goToOptions" class="menu-icon" alt="icone de menu">
    <img src="../assets/images/logo-rjbtur-removebg-preview.png" class="pointer" @click="goToHome" alt="Logo rjbtur" title="logo rjbtur">
    <img src="../assets/icons/search-icon.svg" class="search-icon" alt="icone de procura">
  </header>
</template>

<script>
export default {
  methods: {
    goToOptions() {
      this.$router.push('/MenuPage');
    },
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>

<style>
* {
  color: #313638;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.menu-icon {
  max-height: 40px;
  cursor: pointer;
}

.search-icon {
  max-height: 40px;
}

.pointer {
  cursor: pointer;
}

@media (min-width: 960px) {
  .search-icon {
    visibility: hidden;
  }
}
</style>