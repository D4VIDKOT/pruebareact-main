import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const ConsultItem = (props) => {

      let id=localStorage.getItem('item');
      let data= JSON.parse(id)
      console.log('data :', data);
      console.log('id :', id);
      const deletes=()=>{            
            console.log('eliminar uno :' );
      }
  return <Container>
  <Row className='mt-4'>       
        <Col className='mt-4'>
          
          <Card style={{maxWidth:'360px'}} className='mx-auto p-4'>
                   <p className='text-center'><b>Nombre: </b>{data.name}</p> 
                   <p className='text-center'><b>Tipo: </b>{data.category}</p>                      
                   <Button 
                  onCLick={(e)=>deletes(e)}
                   variant="success">
                    Eliminar
                    </Button>
              </Card>
                                           
        </Col>
  </Row>
</Container>;
};

export default ConsultItem;
