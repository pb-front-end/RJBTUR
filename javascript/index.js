const app = {
  data() {
    return {
      serviceCategories: [
        { title: '<p style="color: white;">Pontos turísticos</p>', img: '/assets/images/copacabana.jpg', imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Hospedagens</p>', img: '/assets/images/copacabana.jpg', imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Restaurantes</p>', img: '/assets/images/copacabana.jpg', imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Hospitais</p>', img: '/assets/images/copacabana.jpg', imgAlt: 'vista de copacabana' },
        { title: '<p style="color: white;">Eventos</p>', img: '/assets/images/copacabana.jpg', imgAlt: 'vista de copacabana' },
      ]
    };
  }
};

Vue.createApp(app).mount('#app');