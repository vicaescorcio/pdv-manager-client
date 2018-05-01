import { NewBandeiraComponent } from './new-bandeira/new-bandeira.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { BandeirasComponent } from './bandeiras/bandeiras.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:'bandeiras',
    component:BandeirasComponent,
    canActivate:[CanActivateViaAuthGuard]},
  {
    path:'new-bandeira',
    component:NewBandeiraComponent,
    canActivate:[CanActivateViaAuthGuard]},
  {
    path:'edit-bandeira/:cc_ban',
    component:NewBandeiraComponent,
    canActivate:[CanActivateViaAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BandeiraRoutingModule { }
