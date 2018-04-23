import { NewPdvComponent } from './new-pdv/new-pdv.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { PdvsComponent } from './pdvs/pdvs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "pdvs",
    component: PdvsComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path:"new-pdv",
    component:NewPdvComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path:"edit-pdv/:cc_pdv",
    component:NewPdvComponent,
    canActivate: [CanActivateViaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PdvRoutingModule { }
