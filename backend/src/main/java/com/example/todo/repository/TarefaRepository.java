package com.example.todo.repository;

import com.example.todo.domain.Tarefa;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TarefaRepository extends JpaRepository<Tarefa, Long> {
  Page<Tarefa> findByProjeto_Id(Long idProjeto, Pageable pageable);
}
