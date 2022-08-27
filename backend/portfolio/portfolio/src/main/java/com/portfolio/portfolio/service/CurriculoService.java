package com.portfolio.portfolio.service;

import com.portfolio.portfolio.dto.AtualizacaoCurriculoForm;
import com.portfolio.portfolio.dto.CurriculoView;
import com.portfolio.portfolio.dto.NovoCurriculoForm;
import com.portfolio.portfolio.exception.NotFoundException;
import com.portfolio.portfolio.mapper.CurriculoFormMapper;
import com.portfolio.portfolio.mapper.CurriculoViewMapper;
import com.portfolio.portfolio.model.Curriculo;
import com.portfolio.portfolio.model.Lingua;

import java.util.ArrayList;

public class CurriculoService {
    private ArrayList<Curriculo>    lstCurriculos       = new ArrayList<>();
    private CurriculoViewMapper     curriculoViewMapper = new CurriculoViewMapper();
    private CurriculoFormMapper     curriculoFormMapper = new CurriculoFormMapper();
    private String                  notFoundMessage     = "Currículo não encontrado";


    public ArrayList<CurriculoView> listar(){
        ArrayList<CurriculoView> lstReturn = new ArrayList<>();
        for(Curriculo c : lstCurriculos){
            lstReturn.add(
                    new CurriculoView(
                            c.getId(),
                            c.getAtividadesAtuais(),
                            c.getFormacoes(),
                            c.getExperiencias(),
                            c.getAtributos(),
                            c.getAtividadesExtras()
                    )
            );
        }
        return lstReturn;
    }

    public CurriculoView buscaLinguaCurriculo(Lingua lingua) throws NotFoundException {
        Curriculo curriculo = lstCurriculos.stream().filter(
                c->
                        c.getLingua() == lingua
        ).findFirst().orElseThrow(()-> new NotFoundException(notFoundMessage));
            return curriculoViewMapper.map(curriculo);
    }

    public CurriculoView cadastrar(NovoCurriculoForm form) {
        form.id = lstCurriculos.size() +1;
        Curriculo curriculo = curriculoFormMapper.map(form);
        lstCurriculos.add(curriculo);
        return curriculoViewMapper.map(curriculo);
    }

    public CurriculoView atualizar(AtualizacaoCurriculoForm form) throws NotFoundException {
        Curriculo curriculo = lstCurriculos.stream().filter(
                c->
                        c.getId() == form.id
        ).findFirst().orElseThrow(()-> new NotFoundException(notFoundMessage));
        Curriculo novoCurriculo = new Curriculo(
                curriculo.getId(),
                form.atividadesAtuais,
                curriculo.formacoes, curriculo.experiencias, curriculo.atributos, form.atividadesExtras,
                form.lingua
        );
        lstCurriculos.remove(curriculo);
        lstCurriculos.add(curriculo);
        return curriculoViewMapper.map(novoCurriculo);
    }


}
