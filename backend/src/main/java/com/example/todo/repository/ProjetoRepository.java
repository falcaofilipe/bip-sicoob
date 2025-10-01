package com.example.todo.repository;

import com.example.todo.domain.Projeto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjetoRepository extends JpaRepository<Projeto, Long> { }
