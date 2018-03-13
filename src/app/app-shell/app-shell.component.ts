import { AuthService } from './../auth/auth.service';
import { MenuItem } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pdv-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit {
  itens:MenuItem[];
  _subscription:any;
  show:boolean = this.authService.isLoggedIn();
  constructor(private authService:AuthService) {
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
  }

}
