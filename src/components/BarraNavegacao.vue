<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-warning">
    <div class="container">
      <a href="#">
        <img src="../assets/logoFinans.png" alt="logoNavBar" width="142" />
      </a>

      <!--Menu hambuger-->
      <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
        <font-awesome-icon icon-class="fa-solid fa-bars" beat style="color: #ffffff;" />
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="menu">
        <ul class="navbar-nav mx-auto menu">
          <li class="nav-item">
            <router-link to="/QuemSomos" class="nav-link">Quem somos</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/QuemSomos" class="nav-link">Recursos</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/QuemSomos" class="nav-link">Planos e preços</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/QuemSomos" class="nav-link">Blog</router-link>
          </li>

          <li class="nav-item">
            <router-link to="/QuemSomos" class="nav-link">Contato</router-link>
          </li>
        </ul>

        <div class="login-registro">
          <button type="button" class="btn btn-warning " @click="realizarLogin" style="color: #fff;">Login</button>
          <button type="button" class="btn btn-primary" @click="realizarRegistro">Cadastre-se</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import router from '@/router';
import FontAwesomeIcon from './FontAwesomeIcon.vue';
export default {
  name: "BarraNavegacao",
  components: {
    FontAwesomeIcon
  },
  methods: {
    realizarLogin() {
      router.push('/login');
    },
    realizarRegistro() {
      router.push('/registro');
    }
  }
};
</script>

<style>
  .menu a {
    color: white;
    font-size: 1.2em;
  }

  .login-registro button{
    margin-left: 2px;
    font-size: 1.0em;
  }
</style>