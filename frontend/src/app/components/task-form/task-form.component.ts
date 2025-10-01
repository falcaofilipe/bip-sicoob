import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../../services/project.service';
import { TaskService, TarefaCreate } from '../../services/task.service';
import { Projeto } from '../../models/projeto.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent implements OnInit {
  @Output() created = new EventEmitter<void>();
  projetos: Projeto[] = [];
  form: TarefaCreate = { titulo: '', descricao: '', status: 'Aberta', idProjeto: 0 };
  saving = false;
  error?: string;
  constructor(private projectSvc: ProjectService, private taskSvc: TaskService) {}
  ngOnInit(): void {
    this.projectSvc.list().subscribe(p => {
      this.projetos = p;
      if (p.length) this.form.idProjeto = p[0].id;
    });
  }
  submit() {
    this.error = undefined;
    if (!this.form.titulo?.trim() || !this.form.idProjeto) {
      this.error = 'Informe Título e Projeto.';
      return;
    }
    this.saving = true;
    this.taskSvc.create(this.form).subscribe({
      next: () => {
        this.saving = false;
        this.form.titulo = '';
        this.form.descricao = '';
        this.form.status = 'Aberta';
        this.created.emit();
      },
      error: (e) => { this.saving = false; this.error = 'Erro ao salvar.'; console.error(e); }
    });
  }
}