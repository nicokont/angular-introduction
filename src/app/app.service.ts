import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Person } from './interfaces/person';

const API = 'http://localhost:3000/users'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient = inject(HttpClient)) {}

  getAllUsers() {
    return this.http.get<Person[]>(API);
  }

  getUserById(id:number) {
    return this.http.get<Person>(`${API}/${id}`)
  }

  addUser(user: Person) {
    return this.http.post<Person>(API, user)
  }

  deleteUser(id: number) {
    return this.http.delete<Person>(`${API}/${id}`)
  }

  updateUser(user: Person) {
    return this.http.put<Person>(`${API}/${user.id}`, user)
  }
}