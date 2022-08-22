// React Imports
import React from 'react';
import { useState, useEffect } from 'react';


// Modules Imports

// Bootstrap Imports
import Card from 'react-bootstrap/Card';

function Formacoes(props){

    return(
        <>
            {props.formacoes.map((formacao, key)=>

                <Card 
                    className='mb-2' 
                    key={key}
                >
                    <Card.Header>
                        {(formacao.ano, formacao.mes).toUpperCase() }
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