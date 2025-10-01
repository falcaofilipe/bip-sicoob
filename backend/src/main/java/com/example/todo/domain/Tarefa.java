package com.example.todo.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "TAREFA")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Tarefa {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private Long id;

  @NotBlank
  @Column(name = "TITULO", nullable = false)
  private String titulo;

  @Column(name = "DESCRICAO")
  private String descricao;

  @Column(name = "STATUS")
  private String status;

  @Column(name = "DATA_CRIACAO", nullable = false)
  private LocalDateTime dataCriacao;

  @ManyToOne(fetch = FetchType.LAZY)
  @JoinColumn(name = "ID_PROJETO", nullable = false)
  private Projeto projeto;

  @PrePersist
  public void prePersist() {
    if (dataCriacao == null) dataCriacao = LocalDateTime.now();
  }
}