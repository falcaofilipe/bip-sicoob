import { Projeto } from './projeto.model';

export interface Tarefa {
  id: number;
  titulo: string;
  descricao?: string;
  status?: string;
  dataCriacao: string;
  projeto: Projeto;
}

export interface Page<T> {
  content: T[];
  totalElements: number;
  totalPages: number;
  size: number;
  number: number;
}