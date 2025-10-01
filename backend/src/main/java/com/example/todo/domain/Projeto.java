package com.example.todo.domain;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.*;

@Entity
@Table(name = "PROJETO")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor @Builder
public class Projeto {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "ID")
  private Long id;

  @NotBlank
  @Column(name = "NOME", nullable = false)
  private String nome;
}