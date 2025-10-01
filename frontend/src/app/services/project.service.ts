import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../models/projeto.model';
import { API_BASE } from './api.config';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProjectService {
  private base = `${API_BASE}/projetos`;
  constructor(private http: HttpClient) {}
  list(): Observable<Projeto[]> {
    return this.http.get<Projeto[]>(this.base);
  }
}