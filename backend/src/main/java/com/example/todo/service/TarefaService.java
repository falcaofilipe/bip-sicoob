package com.example.todo.service;

import com.example.todo.domain.Projeto;
import com.example.todo.domain.Tarefa;
import com.example.todo.dto.TarefaRequest;
import com.example.todo.repository.ProjetoRepository;
import com.example.todo.repository.TarefaRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class TarefaService {
  private final TarefaRepository tarefaRepo;
  private final ProjetoRepository projetoRepo;

  public TarefaService(TarefaRepository tarefaRepo, ProjetoRepository projetoRepo) {
    this.tarefaRepo = tarefaRepo;
    this.projetoRepo = projetoRepo;
  }

  public Tarefa criar(TarefaRequest req) {
    Projeto projeto = projetoRepo.findById(req.idProjeto())
        .orElseThrow(() -> new IllegalArgumentException("Projeto não encontrado: " + req.idProjeto()));
    Tarefa t = Tarefa.builder()
        .titulo(req.titulo())
        .descricao(req.descricao())
        .status(req.status() == null ? "Aberta" : req.status())
        .projeto(projeto)
        .build();
    return tarefaRepo.save(t);
  }

  public void excluir(Long id) {
    if (!tarefaRepo.existsById(id)) return;
    tarefaRepo.deleteById(id);
  }

  public Page<Tarefa> listar(Long idProjeto, Pageable pageable) {
    if (idProjeto != null) {
      return tarefaRepo.findByProjeto_Id(idProjeto, pageable);
    }
    return tarefaRepo.findAll(pageable);
  }
}