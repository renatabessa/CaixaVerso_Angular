import { createAction, props } from "@ngrx/store";

// Substituído por ICartState em models/cart.model.ts

import { ICartState, ICartItem } from '../models/cart.model';
// o estado inicial (carrinho vazio)
export const initialCartState: ICartState = {
    itens: []
}

export const addToCart = createAction (
    '[Card de Produto] Adicionar ao carrinho',
    props<{product: ICartItem}>()
)

export const clearCart = createAction (
    '[Header] Clear Cart'
    
)