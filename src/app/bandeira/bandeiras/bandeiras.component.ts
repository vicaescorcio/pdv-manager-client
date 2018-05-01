import { BandeiraService } from './../bandeira.service';
import { LazyLoadEvent } from 'primeng/primeng';
import { Bandeira } from './../bandeira';
 import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-bandeiras',
  templateUrl: './bandeiras.component.html',
  styleUrls: ['./bandeiras.component.scss']
})
export class BandeirasComponent implements OnInit {
  bandeiras:Bandeira[] = [];
  first: boolean = false;
  page:number = 0
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean = true;
  loading = true;
  constructor(private bandeiraService:BandeiraService){}
  ngOnInit() {
    this.getAll(0, 10); 
  }
  getAll(page:number, size:number){
    this.bandeiraService.getBandeiras(page,size).subscribe(_page=>{
      this.bandeiras = _page.content;
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
