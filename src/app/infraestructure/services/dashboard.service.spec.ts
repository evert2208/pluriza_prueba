import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';

describe('DashboardService', () => {
  let service: DashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [
        HttpClientModule,

      ]
    });
    service = TestBed.inject(DashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('traer toda la informacion de usuarios',(done)=> {
    service.getAllUsers().subscribe(
      users => {
        expect(users).toBeTruthy();
      expect(users.length).toBeGreaterThan(0);
      done();
      }
    )
  });
});
