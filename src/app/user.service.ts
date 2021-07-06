import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getAllUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`http://localhost:8080/login`);
  }

  createUser(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:8080/signup`, user);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`http://localhost:8080/trading/${id}`);
  }

}
