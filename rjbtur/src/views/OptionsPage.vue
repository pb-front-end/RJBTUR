<template>
  <div class="content">
    <header-component/>
    <main>
      <h2 class="h1 text-center">Pontos Turísticos</h2>
      <div id="search">
        <input type="text" class="form-control" placeholder="Buscar">
      </div>
      <div class="pontos-turisticos py-5">
        <div v-for="(pontoTuristico, index) in pontosTuristicos" :key="index" class="ponto-turistico">
          <div v-html="pontoTuristico.title" class="ponto-title"></div>
          <img :src="pontoTuristico.img" :alt="pontoTuristico.imgAlt">
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  components: {HeaderComponent},
  data() {
    return {
      pontosTuristicos: [
        { title: '<p style="color: white;">Cristo Redentor</p>', img: require('../assets/images/cristo.jpeg'), imgAlt: 'vista do cristo redentor' },
        { title: '<p style="color: white;">Pão de Açúcar</p>', img: require('../assets/images/cristo.jpeg'), imgAlt: 'vista do cristo redentor' },
        { title: '<p style="color: white;">Arcos da Lapa</p>', img: require('../assets/images/cristo.jpeg'), imgAlt: 'vista do cristo redentor' },
        { title: '<p style="color: white;">Bondinho</p>', img: require('../assets/images/cristo.jpeg'), imgAlt: 'vista do cristo redentor' },
      ]
    }
  }
}
</script>

<style scoped>
.content {
  min-height: 100vh;
  height: 100%;
  color: #313638;
  background-image: linear-gradient(#F7C040, #66B2FF);
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.menu-icon {
  max-height: 30px;
}

.search-icon {
  max-height: 30px;
}

#search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form-control {
  width: 50%;
}

.pontos-turisticos {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
  margin-left: 200px;
  margin-right: 200px;
}

.ponto-turistico {
  display: flex;
  justify-content: center;
  align-items: center;
}

.ponto-title {
  position: absolute;
  font-size: 2em;
}

.ponto-title * {
  margin: 0;
}

.ponto-turistico img {
  width: 90%;
  border-radius: 10px;
}

@media (max-width: 600px) {

  .form-control {
    width: 70%;
  }

  .pontos-turisticos {
    margin-left: 0;
    margin-right: 0;
  }

}
</style>