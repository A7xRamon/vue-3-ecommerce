export interface Product{
    id: number;
    name: string;
    price: number;
    category: string;
}

export interface CartDetail{
    productId: number;
    quantity: number;
}