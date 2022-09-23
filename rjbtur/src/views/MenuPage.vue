<template>
  <div id="container">
		<div class="first">
			<i class="fa-solid fa-bars fa-2xl" id="menu" @click="goToLastPage"></i>
			<div class="title">
				<span>Menu</span>
			</div>
		</div>

		<div class="second">
			<hr class="line">
			<router-link to="/"><p>Home</p></router-link>
			<hr class="line">
		</div>

		<div class="third">
			<p @click="select('Pontos Turísticos')">Pontos Turísticos</p>
			<p @click="select('Hospedagens')">Hospedagem</p>
			<p @click="select('Restaurantes')">Restaurantes</p>
			<p @click="select('Hospitais')">Hospitais</p>
		</div>

	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    goToLastPage() {
      history.back();
    },
    ...mapActions('index', ['setSelectedService']),
    select(service) {
        this.setSelectedService(service);
        this.$router.push("/OptionsPage");
    }
  }
}
</script>

<style scoped>
#container {
  background-color: #EEF0F2;
  display: flex;
  flex-direction: column;
  width: 100vw;
  padding: 50px;
  min-height: 100vh;
}

.first {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

#menu {
  flex: 1;
}

.first::after {
  flex: 1;
  content: '';
}

.title {
  font-size: 2em;
}

a {
  text-decoration: none;
}

p {
  font-size: 1.5em;
  cursor: pointer;
}

.second {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.second {
  height: 200px;
  row-gap: 10px;
}

.third {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 250px;
}

.third p {
  margin-top: 40px;
}

hr.line {
  border-top: 3px double black;
  width: 100%;
}
</style>