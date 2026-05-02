import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductService } from '../../services/product';
import { addToCart } from '../../store/cart.actions';
import { Store } from '@ngrx/store';
import { DiscountPipe } from '../../pipes/discount-pipe';

  
@Component({
  selector: 'app-detalhe-produto',
  imports: [CommonModule, RouterLink, DiscountPipe],
  templateUrl: './detalhe-produto.html',
  styleUrl: './detalhe-produto.css',
})
export class DetalheProduto {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private store = inject(Store);  
}
