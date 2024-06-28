import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { environment as env } from '../../../../../src/environments/environment';
import { DashboardComponent } from './dashboard.component';
import { DashboardService } from '../../../../../src/app/infraestructure/services/dashboard.service';
import { User } from '../../../core/interfaces/user.interface';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;
  let httpMock: HttpTestingController;
  let compiled: HTMLElement;
  let service: DashboardService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardComponent],
      imports: [
        HttpClientTestingModule
      ],
      providers: [DashboardService]
    });
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    service = TestBed.inject( DashboardService );
    httpMock = TestBed.inject( HttpTestingController );
    fixture.detectChanges();
    compiled = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('cargar los datos inmediatamente',()=> {
    const users: User[] = [];
    const req = httpMock.expectOne(`${env.apiUrl}`);
    expect( req.request.method ).toBe('GET');
    req.flush(users);
    fixture.detectChanges();
  });
});
