import { Component } from '@angular/core';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TaskFormComponent } from './components/task-form/task-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskFormComponent, TaskListComponent],
  template: `
    <div class="container py-4">
      <h1 class="mb-4">Gestão de Tarefas</h1>
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">Cadastrar Tarefa</h5>
          <app-task-form (created)="onCreated()"></app-task-form>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Lista de Tarefas</h5>
          <app-task-list [refreshFlag]="refreshFlag"></app-task-list>
        </div>
      </div>
    </div>
  `
})
export class AppComponent {
  refreshFlag = 0;
  onCreated() { this.refreshFlag++; }
}