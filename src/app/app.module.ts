import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { BusquedaComponent } from './presentation/components/busqueda/busqueda.component';
import { ListaUserComponent } from './presentation/components/lista-user/lista-user.component';
import { NavbarComponent } from './presentation/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusquedaComponent,
    ListaUserComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
