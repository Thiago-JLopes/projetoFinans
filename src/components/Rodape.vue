<template>
    <footer class="mt-4 mb-4">
        <div class="conteiner">
            <div class="row">
                <div class="col-md-8"><!--Menu-->
                    <ul class="navbar">
                        <li>
                            <a href="">Quem somos</a>
                        </li>

                        <li>
                            <a href="">Recursos</a>
                        </li>

                        <li>
                            <a href="">Planos e preços</a>
                        </li>

                        <li>
                            <a href="">Blog</a>
                        </li>
                    </ul>
                </div>

                <div class="col-md-4"><!--redes-->
                    <a href="" class="btn btn-outline-light">
                        <i class="fa-brands fa-square-instagram" style="color: #d4a106;"></i>
                    </a> 

                    <a href="" class="btn btn-outline-light">
                        <i class="fa-brands fa-facebook" style="color: #d4a106;"></i>
                    </a> 

                    <a href="" class="btn btn-outline-light">
                        <i class="fa-brands fa-twitter" style="color: #d4a106;"></i>
                    </a> 
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "RodapeComponent"
    }
</script>

<style scoped>
    a {
        color: #d4a106;
        text-decoration: none;
        margin: 5px 5px;
    }

    ul li {
        list-style: none;
    }
</style>