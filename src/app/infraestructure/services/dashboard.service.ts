import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user.interface';
import { environment as env } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private _http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    // const baseUrl = `https://jsonplaceholder.typicode.com/users`;
    const baseUrl = `${env.apiUrl}`;
    return this._http.get<User[]>(baseUrl);
  }
}
