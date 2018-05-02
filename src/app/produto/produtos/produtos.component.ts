import { ProdutoService } from './../produto.service';
import { Produto } from './../produto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtoService:ProdutoService) { }
  private sub:any
  produtos: Produto[] = [];
  first: boolean = false;
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean =true;
  display: boolean = false;
  filial :any;
  loading = true; true;
  ngOnInit() {this.getAll(0, 2); }

  getAll(page: number, size: number) {
    this.sub = this.produtoService.getProdutos(page, size).subscribe(
      _page => {
        this.produtos = _page.content;
        this.first = _page.first;
        this.rows = _page.size;
        this.totalRecords = _page.totalElements;
        this.lazy =true
        this.loading = false;
        console.log(_page);
      },
      error => {
        console.log(error);
      }
    );
  }

  loadData(event) {
    let _first = event.first
    console.log(event.first)
    if (typeof event.first =="number") {
      this.getAll(event.first/event.rows, event.rows); 
      event.first = true;
    }
  }
  search(){
    
  }
}
