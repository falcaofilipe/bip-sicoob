package com.example.todo.controller;

import com.example.todo.domain.Projeto;
import com.example.todo.repository.ProjetoRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/projetos")
@CrossOrigin(origins = "*")
public class ProjetoController {
  private final ProjetoRepository repo;
  public ProjetoController(ProjetoRepository repo) {
    this.repo = repo;
  }
  @GetMapping
  public List<Projeto> listar() {
    return repo.findAll();
  }
}