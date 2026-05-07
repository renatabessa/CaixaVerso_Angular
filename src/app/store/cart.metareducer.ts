import { ActionReducer, INIT, UPDATE } from '@ngrx/store';
// MetaReducer para persistir o estado global { cart: CartState }
import { CartState } from './cart.actions';
export function cartMetaReducer(reducer: ActionReducer<{ cart: CartState }>): ActionReducer<{ cart: CartState }> {
  return (state, action) => {
    if (action.type === INIT || action.type === UPDATE) {
      const storageValue = localStorage.getItem('cart');
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          return reducer(state, action);
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem('cart', JSON.stringify(nextState));
    return nextState;
  };
}
