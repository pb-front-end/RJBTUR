<template>
  <div class="content">
    <header-component/>
    <h2 class="h1 text-center">Serviços</h2>
    <div class="secondary-search-input">
      <input type="text" class="form-control text-center my-2" placeholder="Busque o serviço">
    </div>
    <div class="service-categories py-5">
      <div v-for="(serviceCategory, index) in serviceCategories" :key="index" class="service-category">
        <div v-html="serviceCategory.title" class="service-title"></div>
        <router-link :to="serviceCategory.path">
        <img :src="serviceCategory.img" :alt="serviceCategory.imgAlt">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: { HeaderComponent },
  data() {
    return {
      serviceCategories: [
        { title: '<p style="color: white;">Pontos turísticos</p>', img: require('../assets/images/copacabana.jpg'), path: "/OptionsPage", imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Hospedagens</p>', img: require('../assets/images/hospedagem.jpeg'), path: "/OptionsPage", imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Restaurantes</p>', img: require('../assets/images/restaurante.jpeg'), path: "/OptionsPage", imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Hospitais</p>', img: require('../assets/images/hospital.jpeg'), path: "/OptionsPage", imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Eventos</p>', img: require('../assets/images/show.jpeg'), path: "/OptionsPage", imgAlt: 'vista de copacabana' },
      ]
    }
  }
}
</script>

<style>
.content {
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(#F7C040, #66B2FF);
  padding-bottom: 10px;
}

.service-categories {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.service-category {
  display: flex;
  justify-content: center;
  align-items: center;
}

.service-title {
  position: absolute;
  font-size: 2em;
}

.service-title * {
  margin: 0;
}

.service-category img {
  width: 90%;
  border-radius: 10px;
}

.secondary-search-input {
  display: flex;
  justify-content: center;
  visibility: hidden;
}

.secondary-search-input input {
  display: none;
  width: 30%;
}

.form-inputs {
  gap: 14px;
}

.form-inputs input, select {
  min-height: 34px;
}

@media (min-width: 600px) {
  .service-category img {
    width: 90%;
  }

  .service-categories {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media (min-width: 960px) {
  .search-icon {
    visibility: hidden;
  }

  .secondary-search-input {
    display: block;
  }

  .service-category img {
    width: 90%;
  }

  .service-categories {
    margin: 0 15%;
  }
}
</style>