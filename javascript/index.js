const app = {
    data() {
      return {
        pontosTuristicos: [
          { title: '<p style="color: white;">Cristo Redentor</p>', img: '../assets/images/cristo.jpeg', imgAlt: 'vista do cristo redentor' },
          { title: '<p style="color: white;">Pão de Açúcar</p>', img: '../assets/images/cristo.jpeg', imgAlt: 'vista do cristo redentor' },
          { title: '<p style="color: white;">Arcos da Lapa</p>', img: '../assets/images/cristo.jpeg', imgAlt: 'vista do cristo redentor' },
          { title: '<p style="color: white;">Bondinho</p>', img: '../assets/images/cristo.jpeg', imgAlt: 'vista do cristo redentor' },
        ]
      };
    }
  };
  
  Vue.createApp(app).mount('#app');