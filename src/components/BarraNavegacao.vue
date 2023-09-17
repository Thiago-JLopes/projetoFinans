<template>
  <nav class="navbar navbar-expand-md navbar-light bg-warning">
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
            <a href="" class="nav-link">Quem somos</a>
          </li>

          <li class="nav-item">
            <a href="" class="nav-link">Recursos</a>
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
</style>