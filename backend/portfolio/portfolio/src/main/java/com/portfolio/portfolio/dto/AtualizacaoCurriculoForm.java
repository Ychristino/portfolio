package com.portfolio.portfolio.dto;

import com.portfolio.portfolio.model.Atributo;
import com.portfolio.portfolio.model.Experiencia;
import com.portfolio.portfolio.model.Formacao;
import com.portfolio.portfolio.model.Lingua;

import java.util.List;

public class AtualizacaoCurriculoForm {

    public int                  id;
    public String               atividadesAtuais;
    public List<Formacao>       formacoes;
    public List<Experiencia>    experiencias;
    public List<Atributo>       atributos;
    public String               atividadesExtras;
    public Lingua               lingua;
}
