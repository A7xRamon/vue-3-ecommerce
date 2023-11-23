<script lang="ts">
import type { PropType } from 'vue';
import type { Product } from './types';
    export default{
        props:{
            product: {
                type: Object as PropType<Product>,
                required: true
            }
        },
        emits: ['addProduct'],
        methods: {
            onAddButtonClick(){
                //console.log("Agregar objeto al carrito: " + this.product.id);
                this.$emit('addProduct');
            }
        }
    }
</script>

<template>

    <v-card>

        <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
            cover
        ></v-img>

        <v-card-title>
            {{ product.name }}
        </v-card-title>

        <v-card-text>
            <p class="mb-4">Descripcion del producto</p>
            
            <v-chip>
                $ {{ product.price }}
            </v-chip>
        </v-card-text>

        <v-card-text>
            Categoria del Producto: {{ product.category }}
        </v-card-text>

        <v-card-actions>
            <v-btn @click="onAddButtonClick" color="light-blue">
                Agregar al carrito
            </v-btn>
        </v-card-actions>

    </v-card>
    

</template> 