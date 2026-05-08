import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { cartReducer } from './store/cart.reducer';
import { cartMetaReducer } from './store/cart.metareducer';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { ICartState } from './models/cart.model';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay()),
    provideHttpClient(),
    provideStore(
      { cart: cartReducer },
      { metaReducers: [cartMetaReducer] }
    ) // metaReducer global, mas só manipula o slice cart
  ]
};
