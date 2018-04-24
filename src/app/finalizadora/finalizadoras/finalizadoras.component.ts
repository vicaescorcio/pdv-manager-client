import { FinalizadoraService } from "./../finalizadora.service";
import { Finalizadora } from "./../finalizadora";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pdv-finalizadoras",
  templateUrl: "./finalizadoras.component.html",
  styleUrls: ["./finalizadoras.component.scss"]
})
export class FinalizadorasComponent implements OnInit {
  constructor(private finalizadoraService: FinalizadoraService) {}
  private sub: any;
  finalizadoras: Finalizadora[] = [];
  first: boolean = false;
  rows: number = 0;
  totalRecords: number = 0;
  lazy: boolean = true;
  display: boolean = false;
  filial: any;
  loading = true;
  ngOnInit() {this.getAll(0, 20);}

  getAll(page: number, size: number) {
    this.sub = this.finalizadoraService.getFinalizadoras(page, size).subscribe(
      _page => {
        this.finalizadoras = _page.content;
        this.first = _page.first;
        this.rows = _page.size;
        this.totalRecords = _page.totalElements;
        this.lazy = true;
        this.loading = false;
        console.log(_page);
      },
      error => {
        console.log(error);
      }
    );
  }
  loadData(event) {
    let _first = event.first;
    console.log(event.first);
    if (typeof event.first == "number") {
      this.getAll(event.first / event.rows, event.rows);
      event.first = true;
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }
}
