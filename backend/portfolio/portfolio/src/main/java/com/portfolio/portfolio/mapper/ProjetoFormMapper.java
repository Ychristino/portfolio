package com.portfolio.portfolio.mapper;

import com.portfolio.portfolio.dto.NovoCurriculoForm;
import com.portfolio.portfolio.dto.NovoProjetoForm;
import com.portfolio.portfolio.model.Projeto;

public class ProjetoFormMapper {

    public Projeto map(NovoProjetoForm projeto) {
        return new Projeto(
            projeto.id,
            projeto.titulo,
            projeto.descricao,
            projeto.url
        );
    }

}
