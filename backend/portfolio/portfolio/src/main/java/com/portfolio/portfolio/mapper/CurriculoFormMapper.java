package com.portfolio.portfolio.mapper;

import com.portfolio.portfolio.dto.NovoCurriculoForm;
import com.portfolio.portfolio.model.Curriculo;

public class CurriculoFormMapper {
    public Curriculo map(NovoCurriculoForm curriculo) {
        return new Curriculo(
                curriculo.id,
                curriculo.atividadesAtuais,
                curriculo.formacoes,
                curriculo.experiencias,
                curriculo.atributos,
                curriculo.atividadesExtras,
                curriculo.lingua
        );
    }
}
