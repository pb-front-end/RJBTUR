<template>
  <div class="content">
    <header-component/>
    <main>
      <h2 class="h1 text-center">Cristo Redentor</h2>
      <img src="../assets/images/cristo.jpeg" class="banner">

      <div class="info card">
        <div class="card-body">
          <span>Lorem ipsum, dolor sit amet consectetur adipi elit. Eius, maiores doloremque ipsum magni molestias cumque nulla vero,
            blanditiis rem impedit sapiente autem ducimus enim saepe error!</span><br>
          <span class="bold">Horário de Funcionamento</span>
          <span>08:00 às 19:00</span>
        </div>
      </div>

      <div class="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.9541404674324!2d-43.21267588503358!3d-22.951915984988947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x997fd5984aa13f%3A0x9dc984d7019502de!2sCristo%20Redentor!5e0!3m2!1spt-BR!2sbr!4v1662117661855!5m2!1spt-BR!2sbr"
        style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div class="info card">
        <div class="card-body">
          <span class="bold">Endereço</span>
          <p>Parque Nacional da Tijuca - Alto da Boa Vista, Rio de Janeiro - RJ</p>

          <span class="bold">Como Chegar</span>
          <p>Lorem ipsum, dolor sit amet consectetur adipi elit. Eius, maiores doloremque ipsum magni molestias cumque nulla vero.</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';

export default {
  components: {HeaderComponent}
}
</script>

<style scoped>
.content {
  color: #313638;
  min-height: 100vh;
  height: 100%;
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

main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}

.banner {
  height: 400px;
  width: 900px;
  border-radius: 10px;
}

.card {
  margin: 20px;
  width: 800px;
}

.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  row-gap: 15px;

}

iframe {
  width: 800px;
  height: 400px;
}

.bold {
  font-weight: bold;
}


@media (min-width: 651px) and (max-width: 950px) {
  .banner {
    height: 300px;
    width: 600px;
  }

  .card {
    width: 600px;
  }

  iframe {
    width: 600px;
    height: 300px;
  }
}


@media (max-width: 650px) {

  .banner {
    height: 200px;
    width: 350px;
  }

  .card {
    width: 350px;
  }

  iframe {
    width: 380px;
    height: 300px;
  }

}
</style>