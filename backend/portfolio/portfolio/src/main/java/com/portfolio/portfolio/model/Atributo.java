package com.portfolio.portfolio.model;

public class Atributo {

    private int     id;
    private String  atributo;

    public Atributo(int id, String atributo){
        this.id         = id;
        this.atributo   = atributo;
    }

    public int getId() {
        return id;
    }

    public String getAtributo() {
        return atributo;
    }
}
