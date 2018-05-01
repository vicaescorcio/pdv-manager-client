import { PosService } from './../pos.service';
import { Pos } from './../pos';
import { LazyLoadEvent } from 'primeng/primeng';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-poss',
  templateUrl: './poss.component.html',
  styleUrls: ['./poss.component.scss']
})
export class PossComponent implements OnInit {
  poss:Pos[] = [];
  first: boolean = false;
  page:number = 0
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean = true;
  loading = true;
  constructor(private posService:PosService){}
  ngOnInit() {
    this.getAll(0, 10); 
  }
  getAll(page:number, size:number){
    this.posService.getPoss(page,size).subscribe(_page=>{
      this.poss = _page.content;
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