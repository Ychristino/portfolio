// React Imports
import React from 'react';

// Modules Imports

// Bootstrap Imports
import Card from 'react-bootstrap/Card';

function Formacoes(){
    const DATA = [
        {
            nome:'Formaçao x',
            instituicao:'Nome Instituição',
            ano:2022,
            mes:4
        },
        {
            nome:'Formaçao y',
            instituicao:'Nome Instituição',
            ano:2022,
            mes:8
        },
    ]

    const mostraData = function (ano, mes){
        let dado = new Date();
        var format = { year: 'numeric', month: 'long'};

        dado.setFullYear(ano);
        dado.setMonth(mes);

        return dado.toLocaleDateString('pt-BR', format)
    }

    return(
        <>
            {DATA.map((formacao, key)=>

                <Card 
                    className='mb-2' 
                    key={key}
                >
                    <Card.Header>
                        {mostraData(formacao.ano, formacao.mes).toUpperCase() }
                    </Card.Header>
                    
                    <Card.Body>
                            <p>
                                {(`${formacao.nome} - ${formacao.instituicao}`).toUpperCase()}
                            </p>
                    </Card.Body>
                </Card>
            
            )}
        </>
    )
}
export default Formacoes;