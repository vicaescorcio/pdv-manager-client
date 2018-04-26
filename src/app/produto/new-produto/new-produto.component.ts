import { ProdutoService } from "./../produto.service";
import { FormBuilder, Validators } from "@angular/forms";
import { FiliaisService } from "./../../filiais/filiais.service";
import { ActivatedRoute } from "@angular/router";
import { Masks } from "./../../shared/masks";
import { FormGroup } from "@angular/forms";
import { Filial } from "./../../filiais/filial";
import { Produto } from "./../produto";
import { UpperDirective } from "./../../shared/_directives/upper.directive";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "pdv-new-produto",
  templateUrl: "./new-produto.component.html",
  styleUrls: ["./new-produto.component.scss"]
})
export class NewProdutoComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  produtoForm: FormGroup;
  filiais: Filial[];
  fits: any;
  fin_con: any;
  recursos: any;
  cc_psr: any;
  edit: boolean = false;
  produto: Produto;
  cstIcms: any;
  cstPis: any;
  cstCof: any;
  origens: any;
  tipo: any;
  valor: any = this._mask.valor;
  constructor(
    private fb: FormBuilder,
    private filialService: FiliaisService,
    private produtoService: ProdutoService,
    private _mask: Masks,
    private route: ActivatedRoute
  ) {
    this.produtoForm = this.fb.group({
      cc_fil: ["", Validators.required],
      cc_psr: ["", Validators.required],
      cc_psr_ccl: ["", Validators.required],
      nm_psr: ["", Validators.required],
      cc_psr_cur: ["", Validators.required],
      cc_pst: ["", Validators.compose([Validators.required])],
      cc_psr_cfo: ["", Validators.required],
      cc_psr_ori: ["", Validators.required],
      cc_psr_ncm: ["", Validators.required],
      cc_psr_ces: ["", Validators.required],
      cc_psr_cst_icm: ["", Validators.required],
      pc_psr_ali_icm: ["", Validators.required],
      pc_psr_red_icm: ["", Validators.required],
      cc_psr_cst_pis: ["", Validators.required],
      pc_psr_ali_pis: ["", Validators.required],
      cc_psr_cst_cof: ["", Validators.required],
      pc_psr_ali_cof: ["", Validators.required],
      pc_psr_ali_ibt: [0, Validators.required],
      cc_psr_gar: ["", Validators.required],
      cc_psr_sg1: ["", Validators.required],
      cc_psr_sg2: ["", Validators.required],
      cc_psr_sg3: ["", Validators.required],
      bl_psr_ean: [false, Validators.required],
      bl_psr_sr1: [false, Validators.required],
      qt_max_par: ["", Validators.required]
    });
  }
  ngOnInit() {
    this.builCstIcms();
    this.buildCstCof();
    this.buildCstPis();
    this.buildTipo();
    this.buildOri();
    this.buildFil();
    this.route.params.subscribe(params => {
      this.cc_psr = params["cc_psr"];
      if (this.cc_psr) {
        this.edit = true;
        console.log(this.edit)
        this.setProduto();
      }
    });
  }
  enviar() {
    this.loading = true;
    if (this.produtoForm.dirty && this.produtoForm.valid) {
      this.produtoService.createProduto(this.produtoForm.value).subscribe(
        _authResult => {
          this.debug();
          this.loading = false;
          this.sucesso = false;
        },
        error => {
          console.log(error);
          this.server_error = error.error.message;
          this.loading = false;
        }
      );
    }
  }
  update() {
    this.loading = true
    console.log("UPDATE!");
    if (this.produtoForm.dirty && this.produtoForm.valid) {
      this.produtoService
        .updateProduto(this.produtoForm.value)
        .subscribe(
          _authResult => {
            this.loading = false;
          },
          error => {
            console.log(error);
            this.server_error = error.error.message;
            this.loading = false;
          }
        );
    }
  }
  setProduto(){
    this.produtoService.getProduto(this.cc_psr).subscribe(_page=>{
      this.produto = _page.content[0] 
      this.produtoForm.patchValue({cc_fil: this.produto.cc_fil },{ onlySelf: true });
      this.produtoForm.patchValue({cc_psr:this.produto.cc_psr.toUpperCase() },{ onlySelf: true });
      this.produtoForm.patchValue({cc_psr_ccl:this.produto.cc_psr_ccl },{ onlySelf: true }); 
      this.produtoForm.patchValue({nm_psr:this.produto.nm_psr.toUpperCase() },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_cur:this.produto.cc_psr_cur.toUpperCase() },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_pst:this.produto.cc_pst.toUpperCase() },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_cfo:this.produto.cc_psr_cfo },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_ori:this.produto.cc_psr_ori.toUpperCase() },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_ori:this.produto.cc_psr_ori },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_ncm:this.produto.cc_psr_ncm },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_ces:this.produto.cc_psr_ces.toUpperCase() },{ onlySelf: true });  
      this.produtoForm.patchValue({cc_psr_cst_icm:this.produto.cc_psr_cst_icm },{ onlySelf: true }); 
      this.produtoForm.patchValue({pc_psr_ali_icm:this.produto.pc_psr_ali_icm },{ onlySelf: true }); 
      this.produtoForm.patchValue({pc_psr_red_icm:this.produto.pc_psr_red_icm },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_cst_pis:this.produto.cc_psr_cst_pis },{ onlySelf: true }); 
      this.produtoForm.patchValue({pc_psr_ali_pis:this.produto.pc_psr_ali_pis },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_cst_cof:this.produto.cc_psr_cst_cof },{ onlySelf: true }); 
      this.produtoForm.patchValue({pc_psr_ali_cof:this.produto.pc_psr_ali_cof },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_gar:this.produto.cc_psr_gar.toUpperCase() },{ onlySelf: true });  
      this.produtoForm.patchValue({cc_psr_sg1:this.produto.cc_psr_sg1 },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_sg2:this.produto.cc_psr_sg2 },{ onlySelf: true }); 
      this.produtoForm.patchValue({cc_psr_sg3:this.produto.cc_psr_sg3 },{ onlySelf: true }); 
      this.produtoForm.patchValue({bl_psr_ean:this.produto.bl_psr_ean },{ onlySelf: true }); 
      this.produtoForm.patchValue({bl_psr_sr1:this.produto.bl_psr_sr1 },{ onlySelf: true }); 
     
    },_error=>{})
  }
  buildFil() {
    return this.filialService.getFiliais(0, 50).subscribe(
      _page => {
        this.filiais = _page.content;
      },
      error => {}
    );
  }
  builCstIcms() {
    this.produtoService.getIcms().subscribe(
      _page => {
        this.cstIcms = _page;
      },
      _erro => {}
    );
  }
  buildCstPis() {
    this.produtoService.getPis().subscribe(
      _page => {
        this.cstPis = _page;
      },
      _erro => {}
    );
  }
  buildCstCof() {
    this.produtoService.getCofins().subscribe(
      _page => {
        this.cstCof = _page;
      },
      _erro => {}
    );
  }
  buildOri() {
    this.produtoService.getOri().subscribe(
      _page => {
        this.origens = _page;
      },
      _erro => {}
    );
  }
  buildTipo() {
    this.produtoService.getTipos().subscribe(
      _page => {
        this.tipo = _page;
      },
      _erro => {}
    );
  }

  debug(): string {
    return JSON.stringify(this.produtoForm.value);
  }
}
