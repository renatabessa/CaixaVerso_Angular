import { createReducer, on } from "@ngrx/store";
import { addToCart, clearCart, initialCartState } from "./cart.actions";
import { ICartState, ICartItem } from '../models/cart.model';
import { create } from "domain";

export const cartReducer = createReducer(
    initialCartState,
    on(addToCart, (estadoAtual: ICartState, action) => {
        console.log('Reducer addToCart - estadoAtual:', estadoAtual);
        console.log('Reducer addToCart - action.product:', action.product);
        const existingIndex = estadoAtual.itens.findIndex(
            item => item.product.id === action.product.product.id
        );
        let novosItens;
        if (existingIndex !== -1) {
            // Produto já existe, soma a quantidade
            novosItens = estadoAtual.itens.map((item, idx) =>
                idx === existingIndex
                    ? { ...item, quantity: item.quantity + action.product.quantity }
                    : item
            );
        } else {
            // Produto novo, adiciona ao carrinho
            novosItens = [...estadoAtual.itens, action.product];
        }
        return {
            ...estadoAtual,
            itens: novosItens
        };
    }),
    on(clearCart, (estadoAtual: ICartState) => {
        console.log('Reducer clearCart');
        return {
            ...estadoAtual,
            itens: []
        };
    })
);