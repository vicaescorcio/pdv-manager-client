import { Router } from '@angular/router';
import { AuthService } from './../../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'pdv-app-shell',
  templateUrl: './app-shell.component.html',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
    

  ],
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
  itens:MenuItem[];
  financeiro:boolean = false;
  _subscription:any;
  rotation:string = 'fa fa-sign-out-left'
  show:boolean = this.authService.isLoggedIn();
  constructor(private authService:AuthService,
    private router: Router) {
    this._subscription = authService.statusChange.subscribe((value) => { 
        this.show = value; 
      });
   }

  ngOnInit() {
    
  }

  ngOnDestroy(){
      this._subscription.unsubscribe();
  }
  logout(){
      this.authService.logout(); 
      this.router.navigate(["login"]);
  }
  showFinan(){
    this.financeiro= !this.financeiro;
  }

}
