import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusquedaComponent } from './busqueda.component';

describe('BusquedaComponent', () => {
  let component: BusquedaComponent;
  let fixture: ComponentFixture<BusquedaComponent>;
  let compiled: HTMLElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusquedaComponent]
    });
    fixture = TestBed.createComponent(BusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.nativeElement;
    jest.clearAllMocks();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe de emitir el onSearch con el keyup del input', () => {

    component.searchName = 'prueba';
    fixture.detectChanges();

    jest.spyOn( component.searchChange, 'emit' );

    const input = compiled.querySelector('input');
    input?.dispatchEvent( new Event('keyup') );

    expect( component.searchChange.emit ).toHaveBeenCalled();

  });
});
