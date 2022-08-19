// React Imports
import React from 'react';
import { useState } from 'react';

// Modules Imports
import Formacoes from './Informacoes/Formacoes';
import Experiencias from './Informacoes/Experiencias';
import Atributos from './Informacoes/Atributos';
import Atividades from './Informacoes/Atividades';
import Extras from './Informacoes/Extras';

// Bootstrap Imports
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Curriculum(){

    const DATA = [
        {
            titulo:'Atividades Atuais',
            corpo:<Atividades />,
        },
        {
            titulo:'Formações',
            corpo:<Formacoes />,
        },
        {
            titulo:'Experiências',
            corpo:<Experiencias />,
        },
        {
            titulo:'Skills',
            corpo: <Atributos />,
        },
        {
            titulo:'Atividades Extras',
            corpo:<Extras />,
        },
    ];

    const [card, setCard] = useState(DATA[0]);

    return(
        <>
            <Card className='mb-2'>
                <Card.Header>
                    <Nav
                        fill 
                        variant="tabs" 
                        defaultActiveKey="0"
                        onSelect={(elementoSelecionado)=> setCard(DATA[elementoSelecionado])}    
                    >
                        
                        <Nav.Item>
                            <Nav.Link eventKey="0">Atividades Atuais</Nav.Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                            <Nav.Link eventKey="1">Formações</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="2">Experiências</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="3">Atributos/Skills</Nav.Link>
                        </Nav.Item>

                        <Nav.Item>
                            <Nav.Link eventKey="4">Atividades extras</Nav.Link>
                        </Nav.Item>

                    </Nav>
                </Card.Header>
                
                <Card.Body>
                    <Card.Title>
                        <h1>{card.titulo}</h1>
                    </Card.Title>

                    <Card.Text>
                        <p>{card.corpo}</p>
                    </Card.Text>
                </Card.Body>

            </Card>
            <DropdownButton 
                variant='outline-secondary'
                as={ButtonGroup} 
                title="Baixar PDF" 
                id="bg-nested-dropdown"
            >
                <Dropdown.Item eventKey="1">English</Dropdown.Item>
                <Dropdown.Item eventKey="2">Portugês (BR)</Dropdown.Item>
            </DropdownButton>
        </>
    )
}

export default Curriculum;