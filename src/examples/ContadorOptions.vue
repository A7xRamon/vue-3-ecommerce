<script lang="ts">
export default{
    data(){
        return{
            count: 0
        }
    },
    methods:{
        increase(){
            this.count++;
        },
        decrease(){
            this.count--;
        }
    },
    mounted(){
        console.log("El valor inicial de este contador es: " + this.count);
    }
}

</script>

<template>
    <h1>Objetivo: Tienes que llegar a 20 clicks</h1>
    <h2>Contador: {{ count }}</h2>
    <button @click="increase">
        Aumentar uno al Contador
    </button>
    <button @click="decrease">
        Quitar uno al Contador
    </button>

    <p v-if="count < 10 && count >= 0"> Vamos tu puedes!!</p>

    <p v-if="count >= 10 && count < 20"> Vamos ya te falta muy poco...</p>

    <p v-else-if="count < 0"> Te alejas demsiado del resutlado!!!</p>
    
    <p v-else-if="count == 20"> Excelente has llegado a {{ count }} clicks!!!</p>


</template>