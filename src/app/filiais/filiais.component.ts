import { Filial } from "./filial";
import { FiliaisService } from "./filiais.service";
import { Component, OnInit } from "@angular/core";
import { LazyLoadEvent } from 'primeng/primeng';
@Component({
  selector: "pdv-filiais",
  templateUrl: "./filiais.component.html",
  styleUrls: ["./filiais.component.scss"]
})
export class FiliaisComponent implements OnInit {
  constructor(private filialService: FiliaisService) {}
  filiais: Filial[] = []
  first: boolean = false;
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean = true;
  loading = false;
  ngOnInit() {}

  getAll(page: number, size: number) {
    this.filialService.getFiliais(page, size).subscribe(_page => {
      this.filiais = _page.content;
      this.first = _page.first;
      this.rows = _page.size;
      this.totalRecords = _page.totalElements;
      this.lazy = true;
      this.loading = false;
      console.log(_page);
    },
  error =>{
    console.log(error)
  });

  
  }

  loadData(event: LazyLoadEvent) {
    
    if (this.lazy) {
      this.getAll(event.first, 20);
    }
  }
}
