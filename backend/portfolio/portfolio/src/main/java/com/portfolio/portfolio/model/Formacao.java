package com.portfolio.portfolio.model;

import java.time.LocalDate;

public class Formacao {

    private int         id;
    private String      curso;
    private String      instituicao;
    private LocalDate   data;

    public Formacao(int id, String curso, String instituicao, LocalDate data){
        this.id             = id;
        this.curso          = curso;
        this.instituicao    = instituicao;
        this.data           = data;
    }

    public int getId() {
        return id;
    }

    public String getCurso() {
        return curso;
    }

    public String getInstituicao() {
        return instituicao;
    }

    public LocalDate getData() {
        return data;
    }
}
