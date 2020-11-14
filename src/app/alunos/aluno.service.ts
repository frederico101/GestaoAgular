import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Aluno } from '../models/Aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {
  endpoint = `${environment.urlBase}/api/aluno`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Aluno[]> {
    return this.http.get<Aluno[]>(`${this.endpoint}`);
  }

  getById(id: number): Observable<Aluno> {
    return this.http.get<Aluno>(`${this.endpoint}/${id}`);
  }

  post(aluno: Aluno) {
    return this.http.post(`${this.endpoint}`, aluno);
  }

  put(id: number, aluno: Aluno) {
    return this.http.put(`${this.endpoint}/${id}`, aluno);
  }

  delete(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);

  }
}