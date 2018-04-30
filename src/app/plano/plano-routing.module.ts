import { NewPlanoComponent } from './new-plano/new-plano.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { PlanosComponent } from './planos/planos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
{
  path:'planos',
  component:PlanosComponent,
  canActivate: [CanActivateViaAuthGuard] 
},
{
  path:'new-plano',
  component:NewPlanoComponent,
  canActivate: [CanActivateViaAuthGuard] 
},
{
  path:'edit-plano/:cc_pla',
  component:NewPlanoComponent,
  canActivate: [CanActivateViaAuthGuard] 
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanoRoutingModule { }
