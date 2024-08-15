import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'

interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://reqres.in/api/users';

  constructor(private http: HttpClient) {}

  getUsers(page: number): Observable<any> {
    console.log(this.getUsers)
    return this.http.get<any>(`${this.apiUrl}?page=${page}`);
  }

  getUser(id: string) {
    return this.http.get<{ data: any }>(`${this.apiUrl}/${id}`);
  }

  getUserById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
