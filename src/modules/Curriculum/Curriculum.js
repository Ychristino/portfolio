// React Imports
import React from 'react';
import { useState, useEffect } from 'react';

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
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Spinner from 'react-bootstrap/Spinner';

function Curriculum(){
    const [data, setData] = useState({});
    const [isLoading, setisLoading] = useState(true);
    const [card, setCard] = useState({});

    const abas = [
        {
            titulo:'Atividades Atuais',
            corpo:<Atividades atividadesAtuais={data.atividadesAtuais}/>,
        },
        {
            titulo:'Formações',
            corpo:<Formacoes formacoes={data.formacoes}/>,
        },
        {
            titulo:'Experiências',
            corpo:<Experiencias experiencias={data.experiencias} />,
        },
        {
            titulo:'Skills',
            corpo: <Atributos atributos={data.atributos} />,
        },
        {
            titulo:'Atividades Extras',
            corpo:<Extras atividadesExtras={data.atividadesExtras} />,
        },
    ];
    
    useEffect(()=> {
        fetch('http://localhost:8080/curriculo/PT_BR')
            .then((response)=> response.json())
            .then((data)=> {
                setData(data);
                setCard(abas[0])
                setisLoading(false);
            })
            .catch((err)=> console.error(`Alguma coisa deu errado... ${err}`));
    }, []);

    console.log(card)

    if(isLoading) return <Spinner animation="border" />
    else return(
        <>
            <Card className='mb-2'>
                <Card.Header>
                    <Nav
                        fill 
                        variant="tabs" 
                        defaultActiveKey="0"
                        onSelect={(elementoSelecionado)=> setCard(abas[elementoSelecionado])}    
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
                        {card.corpo}
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