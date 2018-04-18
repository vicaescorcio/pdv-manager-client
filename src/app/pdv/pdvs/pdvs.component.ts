import { Page } from './../../shared/_models/page';
import { LazyLoadEvent } from 'primeng/primeng';
import { PdvService } from './../pdv.service';
import { Component, OnInit } from '@angular/core';
import {Pdv} from './../pdv';
@Component({
  selector: 'pdv-pdvs',
  templateUrl: './pdvs.component.html',
  styleUrls: ['./pdvs.component.scss']
})
export class PdvsComponent implements OnInit {

  constructor(private pdvService:PdvService) { }
  pdvs:Pdv[] = [];
  first: boolean = false;
  page:number = 0
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean = true;
  loading = true;

  ngOnInit() {
    this.getAll(0, 10); 
  }
  getAll(page:number, size:number){
    this.pdvService.getPdvs(page,size).subscribe(_page=>{
      this.pdvs = _page.content;
      this.first = _page.first;
      this.rows = _page.size;
      this.totalRecords = _page.totalElements;
      this.lazy = true;
      this.loading = false;
      console.log(_page)
    }, error=>{
      console.log(error);
    })

  }
  loadData(event: LazyLoadEvent) {
    if (typeof event.first =="number") {
      this.getAll(event.first/event.rows, event.rows); 
    }
  }
  paginate(event) {
    this.page = event.page
    this.rows = event.rows        
  }

}
