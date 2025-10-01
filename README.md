# bip-sicoob
Teste_Tecnico_JAVA_Angular_DB2

# Diagrama
Angular (TaskForm, TaskList)
      |  HttpClient (services)
      v
REST API (Spring Boot)
  - TarefaController / ProjetoController
  - TarefaService
  - TarefaRepository / ProjetoRepository (Spring Data JPA)
      |
      v
H2 (MODE=DB2)  <-- schema.sql / data.sql

# Frontend — Angular
# Estrutura (Angular 16+/TypeScript)

frontend/
 ├─ package.json
 ├─ angular.json
 └─ src/
    ├─ main.ts
    ├─ index.html
    ├─ styles.css
    └─ app/
       ├─ app.module.ts
       ├─ app.component.ts
       ├─ app.component.html
       ├─ models/
       │  ├─ projeto.model.ts
       │  └─ tarefa.model.ts
       ├─ services/
       │  ├─ api.config.ts
       │  ├─ project.service.ts
       │  └─ task.service.ts
       ├─ components/
       │  ├─ task-form/
       │  │  ├─ task-form.component.ts
       │  │  └─ task-form.component.html
       │  └─ task-list/
       │     ├─ task-list.component.ts
       │     └─ task-list.component.html
       └─ environments/
          ├─ environment.ts
          └─ environment.development.ts


# Backend — Java + Spring Boot
# Estrutura (Maven / Java 17)

backend/
 ├─ pom.xml
 └─ src/
    ├─ main/java/com/example/todo/
    │  ├─ TodoApplication.java
    │  ├─ domain/
    │  │  ├─ Projeto.java
    │  │  └─ Tarefa.java
    │  ├─ dto/
    │  │  └─ TarefaRequest.java
    │  ├─ repository/
    │  │  ├─ ProjetoRepository.java
    │  │  └─ TarefaRepository.java
    │  ├─ service/
    │  │  └─ TarefaService.java
    │  └─ controller/
    │     ├─ ProjetoController.java
    │     └─ TarefaController.java
    └─ main/resources/
       ├─ application.properties
       ├─ schema.sql
       └─ data.sql


-- 1) Paginação (DB2): ordenar por DATA_CRIACAO DESC, com OFFSET/FETCH
SELECT T.*
FROM TAREFA T
ORDER BY T.DATA_CRIACAO DESC
OFFSET 0 ROWS FETCH FIRST 10 ROWS ONLY;

-- 2) Join entre TAREFA e PROJETO
SELECT T.ID, T.TITULO, T.STATUS, T.DATA_CRIACAO, P.NOME AS PROJETO
FROM TAREFA T
JOIN PROJETO P ON P.ID = T.ID_PROJETO
ORDER BY T.DATA_CRIACAO DESC;

-- 3) Agrupamento por STATUS
SELECT COALESCE(T.STATUS, 'SEM_STATUS') AS STATUS, COUNT(*) TOTAL
FROM TAREFA T
GROUP BY COALESCE(T.STATUS, 'SEM_STATUS')
ORDER BY TOTAL DESC;


# Gestão de Tarefas — Java (Spring Boot) + H2 (DB2) + Angular

## Requisitos
- Java 17
- Maven 3.9+
- Node 18+ e Angular CLI 16+ (`npm i -g @angular/cli`)

## Como executar

### Backend
```bash
cd backend
mvn spring-boot:run

API em http://localhost:8080

Swagger UI: http://localhost:8080/swagger-ui/index.html

H2 Console: http://localhost:8080/h2-console

JDBC URL: jdbc:h2:mem:todo_db;MODE=DB2;DATABASE_TO_UPPER=TRUE;DB_CLOSE_DELAY=-1;DB_CLOSE_ON_EXIT=FALSE

user: sa (sem senha)

Endpoints:

GET /projetos

POST /tarefas (body: { "titulo": "...", "descricao": "...", "status": "Aberta", "idProjeto": 1 })

DELETE /tarefas/{id}

GET /tarefas?page=0&size=10&idProjeto=1 (ordenado por dataCriacao DESC)

Frontend
cd frontend
npm install
npm start
App em http://localhost:4200

SQL (compatível DB2)

-- Paginação
SELECT T.* FROM TAREFA T ORDER BY T.DATA_CRIACAO DESC
OFFSET 0 ROWS FETCH FIRST 10 ROWS ONLY;

-- Join
SELECT T.ID, T.TITULO, T.STATUS, T.DATA_CRIACAO, P.NOME PROJETO
FROM TAREFA T JOIN PROJETO P ON P.ID = T.ID_PROJETO;

-- Agrupamento por STATUS
SELECT COALESCE(T.STATUS, 'SEM_STATUS') STATUS, COUNT(*) TOTAL
FROM TAREFA T GROUP BY COALESCE(T.STATUS, 'SEM_STATUS');


