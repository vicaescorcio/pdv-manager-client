import { NewFinalizadoraComponent } from './new-finalizadora/new-finalizadora.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { FinalizadorasComponent } from './finalizadoras/finalizadoras.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "finalizadoras",
    component: FinalizadorasComponent,
    canActivate: [CanActivateViaAuthGuard]
  },
  {
    path: "new-finalizadora",
    component: NewFinalizadoraComponent,
    canActivate: [CanActivateViaAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinalizadoraRoutingModule { }
