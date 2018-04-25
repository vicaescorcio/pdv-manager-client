import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { ProdutosComponent } from './produtos/produtos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { 
    path:'produtos',
    component:ProdutosComponent,
    canActivate: [CanActivateViaAuthGuard]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutosRoutingModule { }
