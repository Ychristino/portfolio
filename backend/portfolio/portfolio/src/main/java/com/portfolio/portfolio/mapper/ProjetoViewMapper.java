package com.portfolio.portfolio.mapper;

import com.portfolio.portfolio.dto.ProjetoView;
import com.portfolio.portfolio.model.Projeto;

public class ProjetoViewMapper implements Mapper<Projeto, ProjetoView> {


    @Override
    public ProjetoView map(Projeto projeto) {
        return new ProjetoView(
                projeto.titulo,
                projeto.descricao,
                projeto.url
        );
    }
}
