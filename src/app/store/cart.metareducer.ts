import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { ICartState } from '../models/cart.model';

function isBrowser(): boolean {
  return typeof window !== 'undefined' && !!window.localStorage;
}

// MetaReducer global: manipula apenas o slice cart do estado global
export function cartMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    let nextState = reducer(state, action);
    // Ao inicializar, restaura apenas o slice cart
    if (isBrowser() && (action.type === INIT || action.type === UPDATE)) {
      const storageValue = localStorage.getItem('cart');
      if (storageValue) {
        try {
          const cart = JSON.parse(storageValue);
          nextState = { ...nextState, cart };
        } catch {
          // ignora erro e mantém o estado
        }
      }
    }
    // Sempre salva apenas o slice cart
    if (isBrowser() && nextState && nextState.cart) {
      localStorage.setItem('cart', JSON.stringify(nextState.cart));
    }
    return nextState;
  };
}
