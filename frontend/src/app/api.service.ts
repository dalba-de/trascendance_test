import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./user";
import { Token } from "./token"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_SERVER = "http://localhost:3000";

  public getUsers(){
      return this.httpClient.get<User[]>(`${this.API_SERVER}/users`)
  }

  public createUser(user: User) {
	  return this.httpClient.post<User>(`${this.API_SERVER}/users/create`, User);
  }

  public updateUser(user: User) {
	  return this.httpClient.put<User>(`${this.API_SERVER}/users/${user.id}/update`, User);
  }

  public deleteUser(id: number) {
	  return this.httpClient.delete(`${this.API_SERVER}/users/${id}/delete`)
  }

  public getToken(uri: string) {
      return this.httpClient.get(uri);
  }
}
