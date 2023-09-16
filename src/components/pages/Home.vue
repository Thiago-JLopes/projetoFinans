<template>
  <header>
    <BarraNavegacao />
  </header>

 
  <section id="home">  <!--Início sessão-->
    <div class="container">
        <div class="row">
            <div class="col-md-6 d-flex">
                <div class="align-self-center">
                    <h1 class="display-4">Suas contas, descomplicadas</h1><!--Descrição-->
                    <p>Organize seu dinheiro em tempo real em uma solução completa, prática e segura, e garanta o controle total das suas finanças. </p>

                    <form class="mt-4 mb-4" action="">
                        <div class="input-group">
                            <input type="text" name="Novoregistro" placeholder="Seu email" class="form-control">

                            <div class="input-group-append input-group-lg">
                                <button type="button" class="btn btn-primary">Cadastre-se</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="col-md-6">
                <img src="../../assets/capa-mulher.png" alt="">
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import BarraNavegacao from "../BarraNavegacao.vue";

export default {
  name: "HomePage",
  components: {
    BarraNavegacao,
  },
};
</script>
