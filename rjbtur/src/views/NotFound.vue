<template>
    <div class="content">
        <header-component/>

        <h1>Rota não encontrada <img src="../assets/icons/face-sad-tear-solid.svg" class="sad"> </h1>
    </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    components: { HeaderComponent }
}
</script>

<style scoped>
.content {
    text-align: center;
}

.sad {
    max-height: 40px;
}
</style>