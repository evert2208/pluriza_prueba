import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUserComponent } from './lista-user.component';
import { SearchNamePipe } from '../../pipes/search-name.pipe';

describe('ListaUserComponent', () => {
  let component: ListaUserComponent;
  let fixture: ComponentFixture<ListaUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaUserComponent, SearchNamePipe],

    });
    fixture = TestBed.createComponent(ListaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe recibir el string para filtrar la tabla', ()=> {
    const testSearch = 'Testing Search';
    component.search = testSearch;
    fixture.detectChanges();
    expect(typeof component.search).toBe('string');
    expect(component.search).toBeTruthy();
    expect(component.search.trim().length).toBeGreaterThan(0);
  });

  it('debe recibir el array para los Headers de la tabla', () => {
    const testHeaders = ["prueba","prueba"];
    component.header = testHeaders;
    fixture.detectChanges();
    expect(Array.isArray(component.header)).toBe(true);
    expect(component.header.length).toBeGreaterThan(0);
  });
});
