<template>
  <header>
    <BarraNavegacao />
  </header>

 
  <section id="home" class="caixa">  <!--Início sessão home-->
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex">
                <div class="align-self-center" style="text-align: left;">
                    <h1 class="display-4">Suas contas, descomplicadas</h1><!--Descrição-->
                    <p>Organize seu dinheiro em tempo real em uma solução completa, prática e segura, e garanta o controle total das suas finanças. </p>

                    <form class="mt-4 mb-4" action="">
                        <div class="input-group input-group-lg">
                            <input type="text" name="Novoregistro" placeholder="Seu email" class="form-control">

                            <div class="input-group-append input-group-lg">
                                <button type="button" class="btn btn-primary">Cadastre-se</button>
                            </div>
                        </div>
                    </form>

                    <p>Disponível para

                        <a href="" class="btn btn-outline-light">
                            <i class="fa-brands fa-android fa-lg" style="color: #0880e2;"></i>
                        </a> 

                        <a href="" class="btn btn-outline-light">
                            <i class="fa-brands fa-apple fa-lg" style="color: #0880e2;"></i>
                        </a>
                    </p>
                </div>
            </div>

            <div class="col-md-6 d-none d-md-block">
                <img src="../../assets/capa-mulher.png" alt="">
            </div>
        </div>
    </div>
  </section> <!--Fim sessão home-->

  <section class="caixa"><!--Inicio sessao saiba-->
    <CardTipo1 title="Saiba para onde vai o seu dinheiro" texto="Com o finans, você categoriza todos os seus lançamentos. Com gráficos simples, você sabe onde vem e para onde vai o seu dinheiro." :path="ImagePath('saiba.png')"/>
  </section><!--Fim sessao saiba-->

  <section class="caixa">
    <CardTipo2></CardTipo2>
  </section>
</template>

<script>
import BarraNavegacao from "../BarraNavegacao.vue";
import CardTipo1 from "../cards/CardTipo1.vue";
import CardTipo2 from "../cards/CardTipo2.vue";

export default {
  name: "HomePage",
  components: {
    BarraNavegacao,
    CardTipo1,
    CardTipo2
  },
  methods: {
        ImagePath(caminho) {
            return require(`../../assets/${caminho}`);
        }
    }
};
</script>

<style scoped>
    #home {
        background: #ffc107;
        color: white;
    }

    .btn-outline-light {
        margin: 2px;
    }

    .caixa {
        padding: 60px 0;
        border-bottom: 1px solid #e5e5e5;
    }
</style>
