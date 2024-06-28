import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.scss']
})
export class BusquedaComponent {
  @Output() searchChange = new EventEmitter<string>();
  searchName: string = '';

  onSearch(search: string) {
    this.searchName = search;
    this.searchChange.emit( this.searchName);
  }

}
