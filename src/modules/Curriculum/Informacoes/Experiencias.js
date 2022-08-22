// React Imports
import React from 'react';
import { useState, useEffect } from 'react';


// Modules Imports

// Bootstrap Imports
import Accordion from 'react-bootstrap/Accordion';

function Experiencias(props){

    return(
        <>
            <Accordion 
                flush
                alwaysOpen
            >

                {props.experiencias.map((experiencia, key)=>
                    <Accordion.Item 
                        className='mb-2' 
                        eventKey={key} 
                        key={key}
                    >

                        <Accordion.Header>
                            {`${experiencia.cargo} - ${experiencia.dataInicio} A ${experiencia.dataFinal}`.toUpperCase()}
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