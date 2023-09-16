<template>
  <nav class="navbar navbar-expand-md navbar-light bg-warning">
    <div class="container">
      <a href="#">
        <img src="../assets/logoFinans.png" alt="logoNavBar" width="142" />
      </a>

      <!--Menu hambuger-->
      <button class="navbar-toggler" data-toggle="collapse" data-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse justify-content-between" id="menu">
        <ul class="navbar-nav mx-auto">
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
export default {
  name: "BarraNavegacao",
};
</script>
