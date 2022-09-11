package com.portfolio.portfolio.service;

import com.portfolio.portfolio.dto.NovoProjetoForm;
import com.portfolio.portfolio.dto.ProjetoView;
import com.portfolio.portfolio.mapper.ProjetoFormMapper;
import com.portfolio.portfolio.mapper.ProjetoViewMapper;
import com.portfolio.portfolio.model.Projeto;

import java.util.ArrayList;

public class ProjetoService {

    private ArrayList<Projeto>    lstProjetos           = new ArrayList<>();
    private ProjetoViewMapper     projetoViewMapper     = new ProjetoViewMapper();
    private ProjetoFormMapper     projetoFormMapper     = new ProjetoFormMapper();
    private String                notFoundMessage       = "Currículo não encontrado";

    public ArrayList<ProjetoView> listar(){
        ArrayList<ProjetoView> lstReturn = new ArrayList<>();
        for(Projeto p : lstProjetos){
            lstReturn.add(
                    new ProjetoView(
                            p.getTitulo(),
                            p.getDescricao(),
                            p.getUrl()
                    )
            );
        }
        return lstReturn;
    }

    public ProjetoView cadastrar(NovoProjetoForm form) {
        form.id = lstProjetos.size() +1;
        Projeto projeto = projetoFormMapper.map(form);
        lstProjetos.add(projeto);
        return projetoViewMapper.map(projeto);
    }

}
