<template>
    <CardForm :email="email" heading="Registrar-se" isRegistration />
 </template>
 
 <script>
     import CardForm from '@/components/CardForm.vue';
 
     export default {
     name: 'RegistroView',
     components: { CardForm },

    mounted() {
        if (this.$route.query.email) {
            this.email = this.$route.query.email;
        }
    },
    
    data() {
        return {
            email: ''
        };
    }

 }
 </script>