package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.AtualizacaoCurriculoForm;
import com.portfolio.portfolio.dto.CurriculoView;
import com.portfolio.portfolio.dto.NovoCurriculoForm;
import com.portfolio.portfolio.exception.NotFoundException;
import com.portfolio.portfolio.model.Curriculo;
import com.portfolio.portfolio.model.Lingua;
import com.portfolio.portfolio.service.CurriculoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/curriculo")
@CrossOrigin("*")
public class CurriculoController {

    private CurriculoService service = new CurriculoService();
    @GetMapping
    public List<CurriculoView> listar(){ return service.listar(); }

    @GetMapping("/{lingua}")
    public CurriculoView buscaLinguaCurriculo(@PathVariable Lingua lingua) throws NotFoundException{
        return service.buscaLinguaCurriculo(lingua);
    }

    @PostMapping
    public ResponseEntity<CurriculoView> cadastrar(@RequestBody NovoCurriculoForm form, UriComponentsBuilder uriBuilder){
        CurriculoView clienteView = service.cadastrar(form);
        URI uri = uriBuilder.path("/cliente/" + clienteView.id).build().toUri();
        return ResponseEntity.created(uri).body(clienteView);
    }

    @PutMapping
    public ResponseEntity<CurriculoView> atualizar(@RequestBody AtualizacaoCurriculoForm form) throws NotFoundException {
        CurriculoView clientView = service.atualizar(form);
        return ResponseEntity.ok(clientView);
    }

    @DeleteMapping("/{id}")
    public void deletar(){

    }
}
