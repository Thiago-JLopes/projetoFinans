<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex">
        <div class="align-self-center" style="text-align: left;">
          <h2 v-if="title">{{ title }}</h2>
          <p v-if="texto">{{ texto }}</p>
          <a href="" class="btn btn-primary">Veja mais</a>
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
        name: "CardTipo1",
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
