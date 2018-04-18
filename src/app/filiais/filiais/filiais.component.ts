import { Filial } from "./../filial";
import { FiliaisService } from "./../filiais.service";
import { Component, OnInit } from "@angular/core";
import { LazyLoadEvent } from "primeng/primeng";
@Component({
  selector: "pdv-filiais",
  templateUrl: "./filiais.component.html",
  styleUrls: ["./filiais.component.scss"]
})
export class FiliaisComponent implements OnInit {
  constructor(private filialService: FiliaisService) {}
  private sub:any
  filiais: Filial[] = [];
  first: boolean = false;
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean =true;
  display: boolean = false;
  filial :any;
  loading = true;
  ngOnInit() {this.getAll(0, 2); }

  getAll(page: number, size: number) {
    this.sub = this.filialService.getFiliais(page, size).subscribe(
      _page => {
        this.filiais = _page.content;
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
  showDialog(cc_fil:string){
   this.sub =  this.filialService.getFilial(cc_fil).subscribe(_page=>{
       this.filial = _page.content
      console.log(this.filial)
    }, error=>{
      console.log(error)
    });
    this.display = true;
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
