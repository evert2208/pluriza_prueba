import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    const baseUrl = `https://jsonplaceholder.typicode.com/users`;
    return this._http.get<User[]>(baseUrl);
  }
}
