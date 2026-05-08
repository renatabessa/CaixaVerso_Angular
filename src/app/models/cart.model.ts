import { IProduct } from './product.model';

export interface ICartItem {
  product: IProduct;
  quantity: number;
}

export interface ICartState {
  itens: ICartItem[];
}
