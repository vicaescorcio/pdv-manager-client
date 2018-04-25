import { ProdutoService } from './../produto.service';
import { FormBuilder, Validators } from '@angular/forms';
import { FiliaisService } from './../../filiais/filiais.service';
import { ActivatedRoute } from '@angular/router';
import { Masks } from './../../shared/masks';
import { FormGroup } from '@angular/forms';
import { Filial } from './../../filiais/filial';
import { Produto } from './../produto';
import { UpperDirective } from './../../shared/_directives/upper.directive';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'pdv-new-produto',
  templateUrl: './new-produto.component.html',
  styleUrls: ['./new-produto.component.scss']
})
export class NewProdutoComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  produtoForm: FormGroup;
  filiais: Filial[];
  fits: any ;
  fin_con: any; 
  recursos:any;
  cc_fin: any;
  edit: boolean = false;
  produto:Produto;
  cstIcms:any;
  cstPis:any;
  cstCof:any;
  origens:any;
  tipo:any;
  constructor(
    private fb: FormBuilder,
    private filialService: FiliaisService,
    private produtoService:ProdutoService,
    private _mask: Masks,
    private route: ActivatedRoute
  ) {
    this.produtoForm = this.fb.group({
      cc_fil:["", Validators.required],
      cc_psr:["", Validators.required],
      cc_psr_ccl:["", Validators.required],
      nm_psr:["", Validators.required], 
      cc_psr_cur:["", Validators.required],
      cc_pst:["", Validators.compose([Validators.required])],
      cc_psr_cfo:["", Validators.required],
      cc_psr_ori:["", Validators.required],
      cc_psr_ncm:["", Validators.required],
      cc_psr_ces:["", Validators.required],
      cc_psr_cst_icm:["", Validators.required],
      pc_psr_ali_icm:["", Validators.required],
      pc_psr_red_icm:["", Validators.required],
      cc_psr_cst_pis:["", Validators.required],
      pc_psr_ali_pis:["", Validators.required],
      cc_psr_cst_cof:["", Validators.required],
      pc_psr_ali_cof:["", Validators.required],
      pc_psr_ali_ibt:[0, Validators.required],
      cc_psr_gar:["", Validators.required],
      cc_psr_sg1:["", Validators.required],
      cc_psr_sg2:["", Validators.required],
      cc_psr_sg3:["", Validators.required],
      cc_psr_sg4:["", Validators.required],
      cc_psr_sg5:["", Validators.required],
      bl_psr_ean:["", Validators.required],
      bl_psr_sr1:["", Validators.required],
      bl_psr_sr2:["", Validators.required],
      qt_max_par:["", Validators.required]
    });
   }

  ngOnInit() {
    this.builCstIcms()
    this.buildCstCof()
    this.buildCstPis()
    this.buildTipo()
    this.buildOri()
  }

  buildFil() {
    return this.filialService.getFiliais(0, 50).subscribe(
      _page => {
        this.filiais = _page.content;
      },
      error => {}
    );
  }
  builCstIcms(){
    this.produtoService.getIcms().subscribe(_page=>{
      this.cstIcms = _page
      console.log(_page)
    }, _erro=>{})
  }
  buildCstPis(){
    this.produtoService.getPis().subscribe(_page=>{
      this.cstPis = _page
      console.log(_page)
    }, _erro=>{})
  }
  buildCstCof(){
    this.produtoService.getCofins().subscribe(_page=>{
      this.cstCof = _page
      console.log(_page)
    }, _erro=>{})
  } 
  buildOri(){
    this.produtoService.getOri().subscribe(_page=>{
      this.origens = _page
      console.log(_page)
    }, _erro=>{})
  } 
  buildTipo(){
    this.produtoService.getTipos().subscribe(_page=>{
      this.tipo = _page
      console.log(_page)
    }, _erro=>{})
  }

}
