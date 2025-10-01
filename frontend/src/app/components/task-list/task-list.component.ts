import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import { ProjectService } from '../../services/project.service';
import { Page, Tarefa } from '../../models/tarefa.model';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-list.component.html'
})
export class TaskListComponent implements OnChanges {
  @Input() refreshFlag = 0;
  pageData?: Page<Tarefa>;
  page = 0;
  size = 5;
  projetos: Projeto[] = [];
  filtroProjeto?: number;
  loading = false;
  error?: string;
  constructor(private taskSvc: TaskService, private projectSvc: ProjectService) {
    this.projectSvc.list().subscribe(ps => this.projetos = ps);
    this.load();
  }
  ngOnChanges(): void { this.load(); }
  load() {
    this.loading = true;
    this.error = undefined;
    this.taskSvc.list(this.page, this.size, this.filtroProjeto).subscribe({
      next: (p) => { this.pageData = p; this.loading = false; },
      error: (e) => { this.error = 'Erro ao carregar.'; this.loading = false; console.error(e); }
    });
  }
  delete(id: number) {
    if (!confirm('Excluir esta tarefa?')) return;
    this.taskSvc.delete(id).subscribe({ next: () => this.load() });
  }
  setPage(p: number) {
    if (p < 0 || (this.pageData && p >= this.pageData.totalPages)) return;
    this.page = p;
    this.load();
  }
  applyFilter() {
    this.page = 0;
    this.load();
  }
}