import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'Dashboard',
    loadChildren: ()=> import('./presentation/modules/dashboard.module').then(m=>m.DashboardModule)
  },
  {path: '', redirectTo: '/Dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
