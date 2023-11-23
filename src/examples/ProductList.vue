<script lang="ts">
import type { CartDetail, Product } from './types';
import ProductCard from './ProductCard.vue';
import Cart from './Cart.vue';
export default{
    components:{
        ProductCard,
        Cart
    },
    data(){
        return{
            //mensajePadre: 'Producto',
            products: <Array<Product>>[
                {id: 1, name: 'Silla', price: 56, category: "home"},
                {id: 2, name: 'Monitor', price: 500, category: "gaming"},
                {id: 3, name: 'Mouse', price: 150, category: "gaming"}
            ],
            details: <Array<CartDetail>>[]
        }
    },
    methods:{
        onAddProductAdded(productId: number){
            const detailFound = this.details.find(d => d.productId === productId);
            
            if(detailFound){
                // +1
                detailFound.quantity += 1;
            }else{
                this.details.push({
                productId,
                quantity: 1
            });
            }  
        }
    }
}

</script>

<template>
    
    <v-container>
        <v-row>
        <v-col v-for="p in products" cols="4">
            <ProductCard  
                :product="p"
                @addProduct="onAddProductAdded(p.id)" />
        </v-col>
    </v-row>
    
    <Cart :details="details"/>
    </v-container>

</template>