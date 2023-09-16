<!-- FontAwesomeIcon.vue -->
<template>
    <i :class="['fa', iconClass]"></i>
  </template>
  
  <script>
  export default {
    name: ' FontAwesomeIcon',
    props: {
      iconClass: {
        type: String,
        required: true
      }
    }
  }
  </script>
  