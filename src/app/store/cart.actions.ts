import { createAction, props } from "@ngrx/store";

// Define o contrato do nosso estado
export interface CartState {
    itens: any []
};

// o estado inicial (carrinho vazio)
export const initialCartState: CartState = {
    itens:[]
}

export const addToCart = createAction (
    '[Card de Produto] Adicionar ao carrinho', // Qual action está sendo tomada(apenas de caracater informativo)
    props<{product: any}>() //a carga que a ação carrega
)

export const clearCart = createAction (
    '[Header] Clear Cart'
    
)