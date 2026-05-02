import { createReducer, on } from "@ngrx/store";
import { addToCart, clearCart, initialCartState } from "./cart.actions";
import { create } from "domain";

export const cartReducer = createReducer(
    initialCartState, //o carrinho sempre começa vazio
    // quando ouvir aa ação AddToCart, faça isso
    on(addToCart, (estadoAtual, action)=>{
        console.log("Reducer foi chamado!", action.product.title);
        
    //    const novoEstado = {
    //    console.log("Antes:", estadoAtual);
    //    ...estadoAtual,
    //    itens: [...estadoAtual.itens, action.product]
    //};
    //console.log("Depois:", novoEstado);
    //return novoEstado;
    
        return{ 
     ...estadoAtual, //copia tudo do estado atual
        itens: [...estadoAtual.itens, action.product]//copiando os itens //antigos e adicionando o novo no final
        };
    }),
    on(clearCart, (estadoAtual) => ({
        ...estadoAtual,
        itens: []
    }))
)