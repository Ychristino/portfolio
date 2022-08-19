// React Imports
import React from 'react';

// Modules Imports

// Bootstrap Imports
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Atributos(){
    const DATA = [
        'Atributo 1',
        'Atributo 2',
    ]

    return(
        <>
            <Row
                className='mb-2' 
                md={1} 
                lg={2}
            >
                
                {DATA.map((atributo, key)=>
                    <Col md={12} lg={6}>
                        {atributo.toUpperCase()}
                        <hr/>
                    </Col>
                )}
                
            </Row>
        </>
    )
}
export default Atributos;