// React Imports
import React from 'react';

// Modules Imports

// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';

function Experiencias(){
    const DATA = [
        {
            nome:'Experiencia x',
            cargo:'Cargo x',
            empregador:'Nome do empregador',
            anoInicio:2020,
            mesInicio:4,
            anoFim:2022,
            mesFim:8,
            descricao:'Descrição das atividades...'
        },
        {
            cargo:'Cargo y',
            empregador:'Nome do empregador',
            anoInicio:2020,
            mesInicio:4,
            anoFim:2022,
            mesFim:8,
            descricao:'Descrição das atividades...'
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
            <Accordion 
                flush
                alwaysOpen
            >

                {DATA.map((experiencia, key)=>
                    <Accordion.Item 
                        className='mb-2' 
                        eventKey={key} 
                        key={key}
                    >

                        <Accordion.Header>
                            {`${experiencia.cargo} - ${mostraData(experiencia.anoInicio, experiencia.mesInicio)} A ${mostraData(experiencia.anoFim, experiencia.mesFim)}`.toUpperCase()}
                        </Accordion.Header>
                    
                        <Accordion.Body>
                            <h1>
                                {experiencia.empregador}
                            </h1>

                            <hr/>
                            
                            <p>
                                {experiencia.descricao}
                            </p>
                            
                        </Accordion.Body>
                    
                    </Accordion.Item>
                    )}

            </Accordion>    
        </>
    )
}
export default Experiencias;