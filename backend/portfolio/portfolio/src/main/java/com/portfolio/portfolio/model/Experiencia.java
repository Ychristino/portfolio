package com.portfolio.portfolio.model;

import java.time.LocalDate;

public class Experiencia {

    private int          id;
    private String       cargo;
    private String       empregador;
    private LocalDate    dataInicio;
    private LocalDate    dataFim;
    private String       descricao;

    public Experiencia(int id, String cargo, String empregador, LocalDate dataInicio, LocalDate dataFim, String descricao){
        this.id         = id;
        this.cargo      = cargo;
        this.empregador = empregador;
        this.dataInicio = dataInicio;
        this.dataFim    = dataFim;
        this.descricao  = descricao;
    }

    public int getId() {
        return id;
    }

    public String getCargo() {
        return cargo;
    }

    public String getEmpregador() {
        return empregador;
    }

    public LocalDate getDataInicio() {
        return dataInicio;
    }

    public LocalDate getDataFim() {
        return dataFim;
    }

    public String getDescricao() {
        return descricao;
    }
}
