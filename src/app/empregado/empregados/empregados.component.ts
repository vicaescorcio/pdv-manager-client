import { EmpregadoService } from './../empregado.service';
import { Empregado } from './../empregado';
import { Filial } from './../../filiais/filial';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-empregados',
  templateUrl: './empregados.component.html',
  styleUrls: ['./empregados.component.scss']
})
export class EmpregadosComponent implements OnInit {
  empregados: Empregado[] = [];
  first: boolean = false;
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean =true;
  display: boolean = false;
  empregado :any;
  loading = true;
  constructor(private empregadoService:EmpregadoService) { }
  ngOnInit() {
    this.getAll(0,20);
  }
  getAll(page: number, size: number) {
    this.empregadoService.getEmpregados(page, size).subscribe(
      _page => {
        this.empregados = _page.content;
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
 
}
