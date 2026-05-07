import { Component, inject, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ActivatedRoute} from '@angular/router';
import { ProductService } from '../../services/product';
import { addToCart } from '../../store/cart.actions';
import { Store } from '@ngrx/store';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { TruncatePipe } from '../../pipes/truncate-pipe';


  
@Component({
  selector: 'app-detalhe-produto',
  imports: [CommonModule, DiscountPipe, TruncatePipe],
  templateUrl: './detalhe-produto.html',
  styleUrls: ['./detalhe-produto.css'],
})
export class DetalheProduto implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private store = inject(Store);  
  private cdRef = inject(ChangeDetectorRef);
  private router = inject(Router);

    produtoRecebido: any = null;
 

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.productService.getProductById(id).subscribe((data) => {
        this.produtoRecebido = data;
        console.log("Produto recebido no detalhe:", this.produtoRecebido);
        this.cdRef.detectChanges();
      });
    }
  }

  clicouComprar() {
    this.store.dispatch(addToCart({product: this.produtoRecebido}));
  }

  voltarHome() {
    window.location.assign('/');
  }
}
