import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from '../routes/dashboard-routing.module';

import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { BusquedaComponent } from '../components/busqueda/busqueda.component';
import { ListaUserComponent } from '../components/lista-user/lista-user.component';
import { SearchNamePipe } from '../pipes/search-name.pipe';



@NgModule({
  declarations: [
    DashboardComponent,
    BusquedaComponent,
    ListaUserComponent,
    SearchNamePipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
