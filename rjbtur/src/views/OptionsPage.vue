<template>
  <div class="content">
    <header-component :breadcrumb="`/Serviços/${selectedService}`"/>
    <main>
      <h2 class="h1 text-center">{{ this.selectedService }}</h2>
      <div id="search">
        <input type="text" class="form-control" placeholder="Buscar">
      </div>
      <div class="options py-5">
        <div v-for="(option, index) in chosenService" :key="index" class="option">
            <div v-html="option.title" class="option-title"></div>
            <router-link to="description">
              <img :src="option.img" :alt="option.imgAlt" @click="setSelectedOption(option.name)">
            </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';
import { mapState } from 'vuex';
import { mapActions } from 'vuex';

export default {
  components: {HeaderComponent},
  data() {
    return {
      opcoes: [
        {name: "Cristo Redentor", servico: "Pontos Turísticos", title: '<p style="color: white;">Cristo Redentor</p>', img: require('../assets/images/copacabana.jpg'), imgAlt: 'vista do cristo redentor' },
        {name: "Pão de Açúcar<", servico: "Pontos Turísticos", title: '<p style="color: white;">Pão de Açúcar</p>', img: require('../assets/images/copacabana.jpg'), imgAlt: 'vista do cristo redentor' },
        {name: "Arcos da Lapa", servico: "Pontos Turísticos", title: '<p style="color: white;">Arcos da Lapa</p>', img: require('../assets/images/copacabana.jpg'), imgAlt: 'vista do cristo redentor' },
        {name: "Bondinho", servico: "Pontos Turísticos", title: '<p style="color: white;">Bondinho</p>', img: require('../assets/images/copacabana.jpg'), imgAlt: 'vista do cristo redentor' },

        {name: "Fasano", servico: "Hospedagens", title: '<p style="color: white;">Fasano</p>', img: require('../assets/images/hospedagem.jpeg'), imgAlt: 'quarto de hotel' },
        {name: "Copacabana Palace", servico: "Hospedagens", title: '<p style="color: white;">Copacabana Palace</p>', img: require('../assets/images/hospedagem.jpeg'), path: "/OptionsPage", imgAlt: 'quarto de hotel' },
        {name: "Sheraton", servico: "Hospedagens", title: '<p style="color: white;">Sheraton</p>', img: require('../assets/images/hospedagem.jpeg'), path: "/OptionsPage", imgAlt: 'quarto de hotel' },
        {name: "Fairmont", servico: "Hospedagens", title: '<p style="color: white;">Fairmont</p>', img: require('../assets/images/hospedagem.jpeg'), path: "/OptionsPage", imgAlt: 'quarto de hotel' },

        {name: "Resenha Carioca", servico: "Restaurantes", title: '<p style="color: white;">Resenha Carioca</p>', img: require('../assets/images/restaurante.jpeg'), imgAlt: 'comida' },
        {name: "Marius Degustare", servico: "Restaurantes", title: '<p style="color: white;">Marius Degustare</p>', img: require('../assets/images/restaurante.jpeg'), imgAlt: 'comida' },
        {name: "Mr. Lam", servico: "Restaurantes", title: '<p style="color: white;">Mr. Lam</p>', img: require('../assets/images/restaurante.jpeg'), imgAlt: 'comida' },
        {name: "Pasta e Pallone", servico: "Restaurantes", title: '<p style="color: white;">Pasta e Pallone</p>', img: require('../assets/images/restaurante.jpeg'), imgAlt: 'comida' },

        {name: "Hospital Samaritano", servico: "Hospitais", title: '<p style="color: white;">Hospital Samaritano</p>', img: require('../assets/images/hospital.jpeg'), imgAlt: 'equipe medica' },
        {name: "Hospital Pasteur", servico: "Hospitais", title: '<p style="color: white;">Hospital Pasteur</p>', img: require('../assets/images/hospital.jpeg'), imgAlt: 'equipe medica' },
        {name: "Hospital da Gamboa", servico: "Hospitais", title: '<p style="color: white;">Hospital da Gamboa</p>', img: require('../assets/images/hospital.jpeg'), imgAlt: 'equipe medica' },
        {name: "Hospital NotreCare", servico: "Hospitais", title: '<p style="color: white;">Hospital NotreCare</p>', img: require('../assets/images/hospital.jpeg'), imgAlt: 'equipe medica' },

      ]
    }
  },
  computed: {
    ...mapState('index', ['selectedService']),
    chosenService: function () {
      return this.opcoes.filter(i => i.servico == this.selectedService)
    }
  },
  methods: {
    ...mapActions('index', ['setSelectedOption'])
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


#search {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.form-control {
  width: 50%;
}

.options {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 20px;
}

.option {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.option-title {
  position: absolute;
  font-size: 2em;
}

.option-title * {
  margin: 0;
}

.option img {
  width: 90%;
  border-radius: 10px;
}

@media (max-width: 600px) {
  .form-control {
    width: 70%;
  }

}

@media (min-width: 600px) {
  .option img {
    width: 90%;
  }

  .options {
    display: grid;
    grid-template-columns: auto auto;
  }
}

@media (min-width: 960px) {
  .options {
    margin: 0 15%;
  }
}
</style>