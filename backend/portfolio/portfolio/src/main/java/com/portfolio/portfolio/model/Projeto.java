package com.portfolio.portfolio.model;

public class Projeto {

    public int id;
    public String titulo;
    public String descricao;
    public String url;

    public Projeto(int id, String titulo, String descricao, String url) {
        this.id = id;
        this.titulo = titulo;
        this.descricao = descricao;
        this.url = url;
    }

    public int getId() {
        return id;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getDescricao() {
        return descricao;
    }

    public String getUrl() {
        return url;
    }
}
