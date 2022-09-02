package com.portfolio.portfolio.mapper;

import com.portfolio.portfolio.dto.CurriculoView;
import com.portfolio.portfolio.model.Curriculo;

public class CurriculoViewMapper implements Mapper<Curriculo, CurriculoView> {

    @Override
    public CurriculoView map(Curriculo curriculo) {
        return new CurriculoView(
                curriculo.getId(),
                curriculo.getAtividadesAtuais(),
                curriculo.getFormacoes(),
                curriculo.getExperiencias(),
                curriculo.getAtributos(),
                curriculo.getAtividadesExtras(),
                curriculo.getLingua()
        );
    }
}