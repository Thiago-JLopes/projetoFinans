<template>
    <header>
        <BarraNavegacao/>
    </header>

    <section>

    </section>

    <section>


    </section>
</template>

<script>
import BarraNavegacao from "../components/BarraNavegacao.vue";


export default {
  name: "QuemSomos",
  components: {
    BarraNavegacao
    
  },
  methods: {
        ImagePath(caminho) {
            return require(`../assets/${caminho}`);
        }
    }
};
</script>