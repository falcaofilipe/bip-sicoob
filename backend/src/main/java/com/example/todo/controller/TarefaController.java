package com.example.todo.controller;

import com.example.todo.domain.Tarefa;
import com.example.todo.dto.TarefaRequest;
import com.example.todo.service.TarefaService;
import jakarta.validation.Valid;
import org.springframework.data.domain.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {
  private final TarefaService service;
  public TarefaController(TarefaService service) {
    this.service = service;
  }

  @PostMapping
  public Tarefa criar(@RequestBody @Valid TarefaRequest req) {
    return service.criar(req);
  }

  @DeleteMapping("/{id}")
  public void excluir(@PathVariable Long id) {
    service.excluir(id);
  }

  @GetMapping
  public Page<Tarefa> listar(
      @RequestParam(defaultValue = "0") int page,
      @RequestParam(defaultValue = "10") int size,
      @RequestParam(required = false) Long idProjeto) {
    Pageable pageable = PageRequest.of(page, size, Sort.by(Sort.Direction.DESC, "dataCriacao"));
    return service.listar(idProjeto, pageable);
  }
}