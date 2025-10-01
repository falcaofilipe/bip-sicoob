INSERT INTO PROJETO (NOME) VALUES ('Projeto Apollo');
INSERT INTO PROJETO (NOME) VALUES ('Projeto Hermes');

INSERT INTO TAREFA (TITULO, DESCRICAO, STATUS, DATA_CRIACAO, ID_PROJETO) VALUES
('Planejar backlog', 'Refinar épicos e histórias', 'Aberta', CURRENT_TIMESTAMP - 10 DAY, 1),
('Criar endpoints iniciais', 'Auth e CRUD base', 'Em Progresso', CURRENT_TIMESTAMP - 9 DAY, 1),
('Montar CI/CD', 'Pipeline GitHub Actions', 'Aberta', CURRENT_TIMESTAMP - 8 DAY, 1),
('Definir layout Angular', 'Estrutura de módulos', 'Aberta', CURRENT_TIMESTAMP - 7 DAY, 1),
('Documentar API', 'Swagger/OpenAPI', 'Aberta', CURRENT_TIMESTAMP - 6 DAY, 1),
('Modelar entidades', 'Projeto/Tarefa', 'Concluída', CURRENT_TIMESTAMP - 5 DAY, 1),
('Teste de integração', 'Controller + Repository', 'Aberta', CURRENT_TIMESTAMP - 4 DAY, 1),
('Criar componente lista', 'Listagem com paginação', 'Em Progresso', CURRENT_TIMESTAMP - 3 DAY, 2),
('Criar componente form', 'Cadastro de tarefa', 'Aberta', CURRENT_TIMESTAMP - 2 DAY, 2),
('Excluir tarefa', 'Botão de exclusão', 'Aberta', CURRENT_TIMESTAMP - 2 DAY, 2),
('Filtro por projeto', 'Dropdown de projeto', 'Aberta', CURRENT_TIMESTAMP - 1 DAY, 2),
('Ordenação por data', 'DESC por dataCriacao', 'Concluída', CURRENT_TIMESTAMP - 12 HOUR, 2),
('Melhorar UX', 'Feedback visual', 'Aberta', CURRENT_TIMESTAMP - 6 HOUR, 2),
('Ajustar CORS', 'Liberar Angular local', 'Concluída', CURRENT_TIMESTAMP - 3 HOUR, 1),
('Revisar README', 'Instruções de execução', 'Aberta', CURRENT_TIMESTAMP - 1 HOUR, 1),
('Teste manual', 'Fluxo completo', 'Aberta', CURRENT_TIMESTAMP - 30 MINUTE, 2);