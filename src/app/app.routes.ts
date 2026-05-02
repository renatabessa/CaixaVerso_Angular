import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { DetalheProduto } from './pages/detalhe-produto/detalhe-produto';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
	{ path: '', component: Home },
	{ path: 'produto/:id', component: DetalheProduto },
	{ path: 'checkout', component: Checkout },
];
