// React Imports
import React from 'react';

// Modules Imports

// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import { Row } from 'react-bootstrap';

function Projetos(){

    const DATA = [
        {
            nome:'Projeto 01',
            descricao:'Descrição do projeto 01'
        },
        {
            nome:'Projeto 02',
            descricao:'Descrição do projeto 02'
        }
    ];
    

    return(
        <>
            <Accordion 
                flush
                alwaysOpen
                className='mb-2'  
            >
                {DATA.map((projeto, key) =>
                    <Accordion.Item 
                        className='mb-2'  
                        eventKey={key} 
                        key={key}
                    >
                        <Accordion.Header>{projeto.nome}</Accordion.Header>
                        <Accordion.Body>
                            <Row className='mb-3'>
                                {projeto.descricao}
                            </Row>
                            <Row>
                                <Button
                                    className='mb-2'  
                                    variant="outline-secondary"
                                >
                                    Conhecer
                                </Button>
                            </Row>
                        </Accordion.Body>
                    </Accordion.Item>
                )}    
            </Accordion>  
        </>
    )
}

export default Projetos;