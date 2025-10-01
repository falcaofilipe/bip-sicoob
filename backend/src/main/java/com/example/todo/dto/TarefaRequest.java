package com.example.todo.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;

public record TarefaRequest(
    @NotBlank String titulo,
    String descricao,
    String status,
    @NotNull Long idProjeto
) {}
