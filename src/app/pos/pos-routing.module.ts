import { NewPosComponent } from './new-pos/new-pos.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { PossComponent } from './poss/poss.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'poss',
   component: PossComponent,
   canActivate: [CanActivateViaAuthGuard]},
  {path:'new-pos',
   component: NewPosComponent,
   canActivate: [CanActivateViaAuthGuard]},
   {path:'edit-pos/:cc_num_ser',
   component: NewPosComponent,
   canActivate: [CanActivateViaAuthGuard]}];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
