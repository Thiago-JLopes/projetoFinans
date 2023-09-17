<template>
  <header>
    <BarraNavegacao />
  </header>

  <section class="caixa1">
    <CardTipo4
      title=" Quem somos"
      texto="A Finans é um gerenciador financeiro de verdade. Trabalhado em cada detalhe com muito carinho e paixão pelo nosso fantástico time."
      :path="ImagePath('hero.webp')"
    />
  </section>

  <section class="caixa2">
    <div class="container">
      <div class="row">
        <div class="col-md-12 d-flex">
          <div class="align-self-center">
            <h4 class="display-6">Nossas atitudes nem sempre refletem o que é melhor para nós mesmos. </h4>
            <!--Descrição-->
            <p>
                Nós sabemos tudo que deve ser feito para conquistar a vida que queremos. Nós sabemos, mas nem sempre fazemos. Sabemos que precisamos cuidar de nossa saúde: corpo e mente, das nossas relações afetivas, assim como da nossa saúde financeira. 
            </p>

            <p>
                Temos também plena convicção da nossa capacidade de vencer e conquistar nossos objetivos. Nós queremos assumir o controle, colocar a vida em ordem, conquistar nossa clareza. Clareza para definir nossas prioridades, tomar decisões. Viver o hoje, sem esquecer o futuro. Só precisamos de um momento para começar.... 
            </p>

            <p>
                Este é o SEU momento. Conquiste sua clareza, construa a sua história. Estamos aqui para te ajudar. 
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <Rodape />
</template>

<script>
import BarraNavegacao from "@/components/BarraNavegacao.vue";
import CardTipo4 from "@/components/CardTipo4.vue";
import Rodape from "@/components/Rodape.vue";

export default {
  name: "QuemSomos",
  components: {
    BarraNavegacao,
    CardTipo4,
    Rodape,
  },
  methods: {
    ImagePath(caminho) {
      return require(`../assets/${caminho}`);
    },
  },
};
</script>

<style scoped>
.caixa1 {
  padding: 40px 0;
  border-bottom: 1px solid #e5e5e5;
  background: #ecebeb;
  position: relative;
  z-index: 1;
}

.caixa2 {
  padding: 2px 0;
  border-bottom: 1px solid #e5e5e5;
  background: #ecebeb;
  position: relative;
  z-index: 2; 
  margin-top: 0px; 
}

@media (min-width: 768px) {
    .caixa2 {
        margin-top: -150px; /* Revertendo a sobreposição em dispositivos grandes */
    }
}

</style>
