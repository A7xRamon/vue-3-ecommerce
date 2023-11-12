<script setup lang="ts">
    import { onMounted, ref } from 'vue'
    
    const count = ref(0);

    function aumentar(){
        count.value ++;
    }

    function disminuir(){
        count.value --;
    }

    onMounted(function (){
        console.log("El valor inicial del contador es: " + count.value);
    });

</script>

<template>
    <p>Soy la version con Composition API</p>
    <h1>Contador: {{ count }}</h1>

    <button @click = aumentar>
        Incrementar Contador en 1
    </button>

    <button @click = disminuir>
        Disminuir Contador en 1
    </button>

</template>