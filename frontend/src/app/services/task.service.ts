import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { API_BASE } from './api.config';
import { Observable } from 'rxjs';
import { Page, Tarefa } from '../models/tarefa.model';

export interface TarefaCreate {
  titulo: string;
  descricao?: string;
  status?: string;
  idProjeto: number;
}

@Injectable({ providedIn: 'root' })
export class TaskService {
  private base = `${API_BASE}/tarefas`;
  constructor(private http: HttpClient) {}
  create(payload: TarefaCreate): Observable<Tarefa> {
    return this.http.post<Tarefa>(this.base, payload);
  }
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/${id}`);
  }
  list(page = 0, size = 10, idProjeto?: number): Observable<Page<Tarefa>> {
    let params = new HttpParams().set('page', page).set('size', size);
    if (idProjeto != null) params = params.set('idProjeto', idProjeto);
    return this.http.get<Page<Tarefa>>(this.base, { params });
  }
}