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
            <a href="QuemSomos.vue" class="nav-link">Recursos</a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">Planos e preços</a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">Blog</a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">Contato</a>
          </li>
        </ul>

        <div class="login-registro">
          <button type="button" class="btn btn-warning" style="color: #fff;">Login</button>
          <button type="button" class="btn btn-primary">Cadastre-se</button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import FontAwesomeIcon from './FontAwesomeIcon.vue';
export default {
  name: "BarraNavegacao",
  components: {
    FontAwesomeIcon
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