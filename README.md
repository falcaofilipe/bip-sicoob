# 🧩 Teste Técnico – Java + Angular + DB2

## 🎯 Objetivo

Avaliar as habilidades práticas em:

- Desenvolvimento backend com **Java + Spring Boot**
- Banco **H2** com sintaxe compatível com **DB2**
- Desenvolvimento frontend com **Angular**
- Conhecimento prático em **SQL** (joins, paginação, agrupamento)
- Experiência teórica com **Adobe Flex**

---

## 💡 Desafio

Desenvolver um sistema de **Gestão de Tarefas** com as seguintes funcionalidades:

- Cadastrar tarefas associadas a projetos  
- Listar tarefas com **paginação**, **filtro por projeto** e **ordenação por data**  
- Excluir tarefas  

---

## 🗂️ Modelagem de Dados

### Tabela `PROJETO`
| Campo | Tipo | Descrição |
|--------|------|-----------|
| ID | PK | Identificador único |
| NOME | VARCHAR | Nome do projeto (**obrigatório**) |

### Tabela `TAREFA`
| Campo | Tipo | Descrição |
|--------|------|-----------|
| ID | PK | Identificador único |
| TITULO | VARCHAR | Título da tarefa (**obrigatório**) |
| DESCRICAO | VARCHAR | Descrição da tarefa (opcional) |
| STATUS | VARCHAR | Ex: "Aberta", "Concluída", etc. |
| DATA_CRIACAO | DATE | Data de criação |
| ID_PROJETO | FK | Referência à tabela `PROJETO` |

---

## 🖥️ Parte 1 – Backend (Java + Spring Boot)

### Endpoints REST

| Método | Endpoint | Descrição |
|---------|-----------|-----------|
| `POST` | `/tarefas` | Cadastrar nova tarefa |
| `DELETE` | `/tarefas/{id}` | Excluir tarefa existente |
| `GET` | `/tarefas` | Listar tarefas com paginação, filtro e ordenação |

**Requisitos técnicos:**
- Usar **Spring Data JPA**
- Banco **H2** com script compatível com **DB2**
- Arquivos `schema.sql` e `data.sql` contendo pelo menos **2 projetos** e **15 tarefas**

---

## 💻 Parte 2 – Frontend (Angular)

Criar uma aplicação Angular com os seguintes elementos:

- **Formulário** para cadastrar tarefas (incluindo seleção de projeto)
- **Grid de listagem** com:
  - Paginação
  - Filtro por projeto
  - Botão de exclusão

A aplicação deve **consumir a API REST** criada na Parte 1.

---

## 🗃️ Parte 3 – Banco de Dados (H2 com sintaxe DB2)

Incluir no projeto:

- `schema.sql` e `data.sql` com criação e carga inicial de dados  
- **3 consultas SQL** de exemplo demonstrando:
  1. Paginação  
  2. Join entre `TAREFA` e `PROJETO`  
  3. Agrupamento por `STATUS`

---

## 📚 Parte 4 – Experiência com Adobe Flex (teórica)

Responder no `README.md` ou em arquivo separado:

1. Já trabalhou com Adobe Flex/ActionScript? Quando e em que contexto?  
2. Quais tipos de aplicações você desenvolveu?  
3. Você se considera apto a dar manutenção em sistemas legados em Flex?  

---

## 🚀 Entrega

- Submeter o projeto via **GitHub** (preferencial) ou link compartilhável (ZIP)  
- Incluir neste repositório:
  - Instruções para rodar **backend** e **frontend**
  - Tecnologias utilizadas
  - Respostas da **Parte 4**

**Prazo sugerido:** até **2 dias úteis**

---

## ✅ Critérios de Avaliação

| Critério | Peso |
|-----------|------|
| Organização e estrutura do código | Médio |
| Boas práticas e clareza | Alto |
| Funcionamento da aplicação | Alto |
| Cumprimento dos requisitos | Alto |
| Qualidade da modelagem e API | Médio |
| Experiência com Flex (descrição) | Baixo |

---

