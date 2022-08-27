package com.portfolio.portfolio.model;


import java.util.List;
public class Curriculo {

    public int                  id;
    public String               atividadesAtuais;
    public List<Formacao>       formacoes;
    public List<Experiencia>    experiencias;
    public List<Atributo>       atributos;
    public String               atividadesExtras;
    public Lingua               lingua;

    public Curriculo(int id, String atividadesAtuais, List<Formacao> formacoes, List<Experiencia> experiencias, List<Atributo> atributos, String atividadesExtras, Lingua lingua){
        this.id                 = id;
        this.atividadesAtuais   = atividadesAtuais;
        this.formacoes          = this.formacoes;
        this.experiencias       = this.experiencias;
        this.atributos          = this.atributos;
        this.atividadesExtras   = atividadesExtras;
        this.lingua             = lingua;
    }

    public int getId() {
        return id;
    }

    public String getAtividadesAtuais() {
        return atividadesAtuais;
    }

    public List<Formacao> getFormacoes() {
        return formacoes;
    }

    public List<Experiencia> getExperiencias() {
        return experiencias;
    }

    public List<Atributo> getAtributos() {
        return atributos;
    }

    public String getAtividadesExtras() {
        return atividadesExtras;
    }

    public Lingua getLingua() {
        return lingua;
    }
}