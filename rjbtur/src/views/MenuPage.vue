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
			<p>Português <img src="../assets/icons/br.svg"></p>
			<p>Inglês <img src="../assets/icons/gb.svg"></p>
			<hr class="line">
		</div>

		<div class="third">
			<p>Pontos Turísticos</p>
			<p>Hospedagem</p>
			<p>Restaurantes</p>
			<p>Hospitais</p>
			<hr class="line">
		</div>

		<div class="fourth" @click="goToAddEvent">
			<p>Adicionar Evento</p>
		</div>
	</div>
</template>

<script>
export default {
  methods: {
    goToLastPage() {
      history.back();
    },
    goToAddEvent() {
      this.$router.push('/AddEventForm');
    }
  }
}
</script>

<style>
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

p img{
  width: 20px;
}

.second, .third, .fourth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.second {
  height: 200px;
  row-gap: 10px;
}

.third {
  height: 250px;
  row-gap: 10px;
}

hr.line {
  border-top: 3px double black;
  width: 100%;
}
</style>