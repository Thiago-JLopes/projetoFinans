<template>
    <img :src="path" :alt="title || ''" class="img-fluid"/>
    <div class="align-self-center" style="text-align: left;">
        <h2 v-if="title">{{ title }}</h2>
        <p v-if="texto">{{ texto }}</p>
    </div>
</template>
  
  <script>
      export default {
          name: "CardTipo3",
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
  