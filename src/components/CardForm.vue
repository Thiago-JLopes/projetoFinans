<template>
  <div class="card-form-container">
    <div class="card-form-content">
      <div class="logotipo">
        <router-link to="/">
          <img src="../assets/logoFinans.png" alt="Logo" class="img-fluid" />
        </router-link>
      </div>

      <div class="formulario">
        <h2>{{ heading }}</h2>
        <a href="" class="btn btn-facebook"
          ><i class="fa fa-facebook" aria-hidden="true"></i>
          {{ fbButtonText }}</a
        >
        <a href="" class="btn btn-google"
          ><i class="fa fa-google" aria-hidden="true"></i>
          {{ googleButtonText }}</a
        >
      </div>

      <span class="separator">ou</span>

      <input type="email" ref="emailInput" v-model="localEmail" placeholder="Email" @blur="checkEmail"/>
      <span v-if="emailError" class="error-message">{{ emailError }}</span>

      <!-- Para Login -->
      <template v-if="!isRegistration">
        <input type="password" placeholder="Senha" />
        <button class="btn btn-primary">{{ loginButtonText }}</button>
      </template>

      <!-- Para Registro -->
      <template v-else>
        <div class="dual-input">
          <input type="password" placeholder="Senha" />
          <input type="password" placeholder="Repita sua senha" />
        </div>
        <button class="btn btn-warning">{{ registerButtonText }}</button>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardForm",
  props: {
    heading: {
      type: String,
      default: "",
    },
    isRegistration: {
      type: Boolean,
      default: false,
    },
    fbButtonText: {
      type: String,
      default: "Entre com o Facebook",
    },
    googleButtonText: {
      type: String,
      default: "Entre com o Google",
    },
    loginButtonText: {
      type: String,
      default: "Entrar",
    },
    registerButtonText: {
      type: String,
      default: "Começar a usar",
    },
    email: {
      type: String,
      default: "",
    },
  },
  methods: {
    isValidEmail(email) {
        let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return regex.test(email);
    },
    checkEmail() {
        if (!this.isValidEmail(this.localEmail)) {
            this.emailError = "Por favor, insira um email válido.";
        } else {
            this.emailError = "";
        }
  }
  },
  data() {
    return {
      localEmail: this.email,
      emailError: ""
    };
  },
  watch: {
    email(newEmail) {
      this.localEmail = newEmail;
    },
  },
};
</script>

<style scoped>
.card-form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
  background: #f0efe4;
}

.card-form-content {
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  padding: 7px;
  background: #eeecec;
}

.logotipo {
  text-align: center;
  margin-bottom: 20px;
}

.formulario {
  margin-bottom: 20px;
}

.btn {
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 12px;
  border-radius: 5px;
  text-align: center;
}

.btn-facebook {
  background-color: #3b5998;
  color: white;
}

.btn-google {
  background-color: #db4437;
  color: white;
}

.separator {
  display: block;
  text-align: center;
  margin: 20px 0;
}

input[type="email"],
input[type="password"],
.btn-primary {
  display: block;
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.btn-primary {
  background-color: #007bff; /* Ajuste conforme sua paleta de cores */
  color: white;
  cursor: pointer;
  text-decoration: none;
}

.dual-input {
  display: flex;
  gap: 10px; /* Espaçamento entre os inputs */
}

.dual-input input[type="password"] {
  flex: 1; /* Isso faz com que cada input ocupe metade do espaço disponível, considerando o espaçamento */
}
</style>
