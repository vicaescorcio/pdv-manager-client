import { ActivatedRoute } from '@angular/router';
import { BandeiraService } from './../bandeira.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Bandeira } from './../bandeira';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-new-bandeira',
  templateUrl: './new-bandeira.component.html',
  styleUrls: ['./new-bandeira.component.scss']
})
export class NewBandeiraComponent implements OnInit {
  sucesso: boolean = true;
  loading: boolean = false;
  server_error: string;
  bandeiraForm: FormGroup;
  cc_ban: any;
  edit: boolean = false;
  bandeira:Bandeira
  constructor(
    private fb: FormBuilder,
    private bandeiraService: BandeiraService,
    private route: ActivatedRoute
  ) {
    this.bandeiraForm = this.fb.group({
      cc_ban: ["",Validators.compose([])],
      nm_ban:["",Validators.compose([])],
    });
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cc_ban = params["cc_ban"];
      if (this.cc_ban) {
        this.edit = true;
        console.log(this.cc_ban)
        this.setBandeira();
      }
    });
  }

  enviar() {
    this.loading = true;
    if (this.bandeiraForm.dirty && this.bandeiraForm.valid) {
      this.bandeiraService.createBandeira(this.bandeiraForm.value).subscribe(
        _authResult => {
          this.loading = false;
          this.sucesso = false;
        },
        error => {
          console.log(error);
          console.log(this.debug());
          this.server_error = error.error.message;
          this.loading = false;
        }
      );
    }
  }
  update() {
    this.loading = true;
    if (this.bandeiraForm.dirty && this.bandeiraForm.valid) {
        this.bandeiraService
        .updateBandeira(this.bandeiraForm.value)
        .subscribe(
          _authResult => {
            this.loading = false;
          },
          error => {
            console.log(error);
            console.log(this.debug());
            this.server_error = error.error.message;
            this.loading = false;
          }
        );
    }
  }

  debug(): string {
    return JSON.stringify(this.bandeiraForm.value);
  }

  setBandeira() {
      this.bandeiraService.getBandeira(this.cc_ban).subscribe(
        _page => {
          this.bandeira = _page.content[0];
          this.bandeiraForm.patchValue(
            { nm_ban: this.bandeira.nm_ban },
            { onlySelf: true }
          );
          this.bandeiraForm.patchValue(
            { cc_ban: this.bandeira.cc_ban },
            { onlySelf: true }
          );
        },
        error => {
          console.log(error);
        }
      );

    }
}
