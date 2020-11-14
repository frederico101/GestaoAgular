import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Professor } from '../models/Professor';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  endpoint = `${environment.urlBase}/api/professor`;
  constructor(private http: HttpClient) { }

  getAll(): Observable<Professor[]> {
    return this.http.get<Professor[]>(`${this.endpoint}`);
  }

  getById(id: number): Observable<Professor> {
    return this.http.get<Professor>(`${this.endpoint}/${id}`);
  }

  post(professor: Professor) {
    return this.http.post(`${this.endpoint}`, professor);
  }

  put(id: number, professor: Professor) {
    return this.http.put(`${this.endpoint}/${id}`, professor);
  }

  delete(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);

  }
}