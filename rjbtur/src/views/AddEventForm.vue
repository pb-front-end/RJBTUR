<template>
  <div class="content">
    <header-component/>
    <div class="row justify-content-center">
      <div class="col-sm-10 col-md-8">
        <h2 class="text-center">Adicionar evento</h2>

        <div class="alert alert-success" v-show="successMessage" v-html="successMessage"></div>

        <div class="alert alert-danger"
          v-for="(error, index) in errors" :key="index">{{error}}</div>
        <form class="d-flex flex-column mx-4 form-inputs" @submit.prevent ref="form">
          <label class="form-label my-0" for="name">Nome</label>
          <input id="name" name="name" type="text"
            placeholder="Nome do evento"
            class="form-control"
            v-model="event.name">

          <label class="form-label my-0" for="description">Descrição</label>
          <textarea name="description" id="description" cols="30" rows="5"
            class="form-control"
            placeholder="Descrição do evento"
            v-model="event.description"></textarea>

          <select name="category" id="category" class="form-select"
            v-model="event.category">
            <option selected disabled value="">Categoria do evento</option>
            <option v-for="(option, index) in categoryOptions" :value="option" :key="index">{{option}}</option>
          </select>

          <input type="date" class="form-control" v-model="event.date">

          <button class="btn btn-primary" @click="createEvent">Confirmar criação</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue';

export default {
  components: { HeaderComponent },
  data() {
    return {
      event: {
        name: '',
        description: '',
        category: '',
        date: ''
      },
      categoryOptions: ['Feira', 'Conferência', 'Show'],
      errors: []
    }
  },
  methods: {
    createEvent() {
      this.errors = [];
      if (this.event.name.length < 4) this.errors.push('O evento deve ter um nome com mais de 4 digitos.');
      if (this.event.description.length < 10) this.errors.push('O evento deve ter uma descrição com mais de 10 digitos.');
      if (!this.event.category) this.errors.push('O evento deve ter uma categoria.');
      if (!this.event.date) this.errors.push('O evento deve ter uma data.');

      if (this.errors.length) return;

      this.saveEvent(this.event);
    },
    saveEvent(event) {
      let events = this.getCurrentEvents();
      event.id = Date.now();
      events.push(event);

      this.setCurrentEvents(events);
      this.setSuccessMessage(event);
      this.clearInputs();
      setTimeout(() => this.redirectToEvent(), 600);
    },
    setSuccessMessage(event) {
      this.successMessage = `Evento <b>${event.name}</b> criado!`;
    },
    redirectToEvent() {
      this.$router.push('/OptionsPage');
    },
    getCurrentEvents() {
      const unparsedEvents = localStorage.getItem('events');

      if (!unparsedEvents) return [];

      return JSON.parse(unparsedEvents);
    },
    setCurrentEvents(events) {
      localStorage.setItem('events', JSON.stringify(events));
    },
    clearInputs() {
      this.event = {
        name: '',
        description: '',
        category: '',
        date: ''
      }
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

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

.menu-icon {
  max-height: 40px;
}

.search-icon {
  max-height: 40px;
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
    visibility: visible;
  }

  .service-category img {
    width: 90%;
  }

  .service-categories {
    margin: 0 15%;
  }
}
</style>