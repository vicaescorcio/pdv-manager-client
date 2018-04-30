import { PlanoService } from './../plano.service';
import { Plano } from './../plano';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-planos',
  templateUrl: './planos.component.html',
  styleUrls: ['./planos.component.scss']
})
export class PlanosComponent implements OnInit {
  constructor(private planoService: PlanoService) {}
  private sub:any
  planos: Plano[] = [];
  first: boolean = false;
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean =true;
  display: boolean = false;
  plano :any;
  loading = true;
  ngOnInit() {this.getAll(0, 2); }

  getAll(page: number, size: number) {
    this.sub = this.planoService.getPlanos(page, size).subscribe(
      _page => {
        this.planos = _page.content;
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
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
