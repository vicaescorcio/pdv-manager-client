import { Router, ActivatedRoute } from "@angular/router";
import { AuthService } from "./auth.service";

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "pdv-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  error:string;
  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    // garantindo que está deslogado
    this.authService.logout();
    //
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }
  login(){
    this.loading = true;
    this.authService.getAuth(this.model.username.trim(), this.model.password.trim()).subscribe(_authResult=>{
      this.authService.setSession(_authResult)
       this.router.navigate([this.returnUrl]);
    },
    error=>{
      console.log(error)
      this.error = error.message
      this.loading = false;
    })

  }
}
