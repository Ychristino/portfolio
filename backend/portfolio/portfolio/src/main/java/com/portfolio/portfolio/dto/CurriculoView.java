package com.portfolio.portfolio.dto;

import com.portfolio.portfolio.model.Atributo;
import com.portfolio.portfolio.model.Experiencia;
import com.portfolio.portfolio.model.Formacao;
import com.portfolio.portfolio.model.Lingua;

import java.util.List;

public class CurriculoView {

    public int                  id;
    public String               atividadesAtuais;
    public List<Formacao>       formacoes;
    public List<Experiencia>    experiencias;
    public List<Atributo>       atributos;
    public String               atividadesExtras;

    public CurriculoView(int id, String atividadesAtuais, List<Formacao> formacoes, List<Experiencia> experiencias, List<Atributo> atributos, String atividadesExtras){
        this.id                 = id;
        this.atividadesAtuais   = atividadesAtuais;
        this.formacoes          = formacoes;
        this.experiencias       = experiencias;
        this.atributos          = atributos;
        this.atividadesExtras   = atividadesExtras;
    }
}
