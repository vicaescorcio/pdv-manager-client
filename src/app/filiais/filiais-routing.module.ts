import { NewFilialComponent } from './new-filial.component';
import { CanActivateViaAuthGuard } from './../_guard/canactivateauth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: 'new-filial', component: NewFilialComponent, canActivate: [CanActivateViaAuthGuard] 
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FiliaisRoutingModule { }
