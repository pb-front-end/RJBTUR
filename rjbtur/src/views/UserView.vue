<template>
 <div class="content">
    <header-component/>
 </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: {HeaderComponent}

}
</script>

<style scoped>
.content {
  min-height: 100vh;
  height: 100%;
  background-image: linear-gradient(#F7C040, #66B2FF);
  padding-bottom: 10px;
}

</style>