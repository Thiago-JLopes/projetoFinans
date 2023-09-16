<template>
 <!-- <img alt="Vue logo" src="./assets/logo.png">-->
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <header>
    <BarraNavegacao/>
  </header>
 
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import BarraNavegacao from './components/BarraNavegacao.vue';

export default {
  name: 'App',
  components: {
    BarraNavegacao
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
