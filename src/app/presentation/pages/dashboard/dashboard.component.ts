import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { User } from 'src/app/core/interfaces/user.interface';
import { DashboardService } from 'src/app/infraestructure/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  users: User[]=[];
  header: string[]=['Nombre','User','Email', 'Direccion', 'Telefono', 'Empresa'];
  searchName: string = '';
  constructor(private _dashService: DashboardService,
    private metaService: Meta, private tituloService: Title,
  ) {

  }
  ngOnInit(): void {
    this.getAllUsers();
    this.tituloService.setTitle('Dashboard');
this.metaService.addTags([
  { name: 'description', content: 'Dashboard para pluriza' },
  { name: 'keywords', content: 'pluriza, dashboard, usuarios, usuario, tabla, angular, prueba' },
  { property: 'og:title', content: 'Dashboard' },
  { property: 'og:description', content: 'Dashboard para pluriza' },
]);

  }
search(search: string){
this.searchName=search;
}
  getAllUsers() {
    this._dashService.getAllUsers().subscribe(
      resp => {
        this.users=resp;

        console.log(this.users);
      }
     )
  }
}
