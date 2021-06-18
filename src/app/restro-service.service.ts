import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RestroServiceService {
  constructor(private http: HttpClient) {}

  url = 'http://localhost:3000/restaurants';

  getUser = (): Observable<any> => {
    return this.http.get(this.url);
  };

  saveUser = (data): Observable<any> => {
    return this.http.post(this.url,data);
  };

  deleteUser = (id): Observable<any> => {
    return this.http.delete(`${this.url}/${id}`);

  }
  getUserIdData = (id) => {
    return this.http.get(`${this.url}/${id}`);
  }
  updateUserData = (id,data) => {
    return this.http.put(`${this.url}/${id}`,data);
  }
}
