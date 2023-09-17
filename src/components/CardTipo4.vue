<template>
    <div class="container">
      <div class="row">
        <div class="col-md-6 d-flex">
          <div class="align-self-center quemsomos">
            <h1 class="display-4" v-if="title">{{ title }}</h1>
            <p v-if="texto">{{ texto }}</p>
          </div>
        </div>
  
        <div class="col-md-6 d-none d-md-block">
          <img :src="path" :alt="title || 'Image Description'" class="img-fluid"/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
      export default {
          name: "CardTipo4",
          props: {
              title: String,
              texto: String,
              path: {
                  type: [String, Object],
                  default: "",
              },
      },
  };
  </script>
  
<style scoped>
 *{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 }

  .quemsomos {
    /* Estes são os estilos padrão para telas maiores */
    text-align: left;
  }

  @media (max-width: 767px) {
    .quemsomos {
      text-align: center; /* Alinha o texto ao centro */
      display: flex; /* Transforma a div em um container flexível */
      flex-direction: column; /* Organiza os filhos da div verticalmente */
      justify-content: center; /* Centraliza o conteúdo no eixo principal (vertical neste caso) */
      align-items: center; /* Centraliza o conteúdo no eixo transversal (horizontal neste caso) */
      height: 100%; /* Ocupa a altura total da div container */
    }
  }
</style>