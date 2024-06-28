import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-user',
  templateUrl: './lista-user.component.html',
  styleUrls: ['./lista-user.component.scss']
})
export class ListaUserComponent implements OnInit {
  @Input() data: any[]=[];
  @Input() header: string[]=[];
  @Input() search: string='';
  ngOnInit(): void {

  }

}
