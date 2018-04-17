import { SharedModule } from './../shared/shared.module';
import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule
  ],
  exports:[ProdutosComponent],
  providers:[ProdutoService],
  declarations: [ProdutosComponent]
})
export class ProdutoModule { }
