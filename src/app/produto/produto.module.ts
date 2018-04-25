import { SharedModule } from './../shared/shared.module';
import { ProdutoService } from './produto.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewProdutoComponent } from './new-produto/new-produto.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { ProdutosComponent } from './produtos/produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    SharedModule,
    FormsModule,ReactiveFormsModule
  ],
  exports:[ProdutosComponent],
  providers:[ProdutoService],
  declarations: [ProdutosComponent, NewProdutoComponent]
})
export class ProdutoModule { }
