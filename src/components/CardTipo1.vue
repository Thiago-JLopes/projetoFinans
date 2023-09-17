<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex">
        <div class="align-self-center">
          <h1 v-if="title">{{ title }}</h1>
          <p v-if="texto">{{ texto }}</p>
        </div>
      </div>

      <div class="col-md-6">
        <img :src="path" :alt="title || 'Image Description'" />
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
