import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private http = inject(HttpClient);
  private baseUrl = 'http://127.0.0.1:8000/api/';

  getPlayers() {
    return this.http.get(this.baseUrl + 'players/');
  }

  getPlayer(id: number) {
    return this.http.get(`${this.baseUrl}players/${id}/`);
  }

  login(data: any) {
    return this.http.post(this.baseUrl + 'token/', data);
  }

  addComment(data: any, token: string) {
    return this.http.post(this.baseUrl + 'comments/', data, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }

  addRating(data: any, token: string) {
    return this.http.post(this.baseUrl + 'ratings/', data, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      })
    });
  }
}