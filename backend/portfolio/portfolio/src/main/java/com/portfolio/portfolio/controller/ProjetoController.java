package com.portfolio.portfolio.controller;

import com.portfolio.portfolio.dto.*;
import com.portfolio.portfolio.exception.NotFoundException;
import com.portfolio.portfolio.model.Lingua;
import com.portfolio.portfolio.service.CurriculoService;
import com.portfolio.portfolio.service.ProjetoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/projeto")
@CrossOrigin("*")
public class ProjetoController {

    private ProjetoService service = new ProjetoService();

    @GetMapping
    public List<ProjetoView> listar(){ return service.listar(); }

    @PostMapping
    public ResponseEntity<ProjetoView> cadastrar(@RequestBody NovoProjetoForm form, UriComponentsBuilder uriBuilder){
        ProjetoView projetoView = service.cadastrar(form);
        URI uri = uriBuilder.path("/projeto/").build().toUri();
        return ResponseEntity.created(uri).body(projetoView);
    }

}
