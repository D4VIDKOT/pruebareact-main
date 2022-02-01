import React, { useEffect,useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { useNavigate } from 'react-router-dom';



const json=[
  {
      "id": 1,
      "name": "IPhone 6S",
      "category": "Mobile"
  },
  {
      "id": 2,
      "name": "Samsung Galaxy",
      "category": "Mobile"
  },
  {
      "id": 3,
      "name": "Lenovo",
      "category": "Laptop"
  },
  {
      "id": 5,
      "name": "DELL",
      "category": "laptop"
  }
]

const ListAll = (props) => {
  const navigate = useNavigate(); 
  
  const [data,setData]=useState(json)
  console.log('data :', data);

  useEffect(() => {
    fetch('http://192.168.112.102:8880/getAllItems')
    .then((response) => {
      
      return response.json()
    })
    .then((articulos) => {
      setData(articulos)
    }).catch((err) => {console.log(err)});
  },[])


  const consult=(id)=>{
    navigate('/item');
    localStorage.setItem("item", JSON.stringify(id));
  }

  return (
    <Container>
    <Row className='mt-4'>       
          <Col className='mt-4'>
            {data.map(datos=>(
            <Card style={{maxWidth:'360px'}} className='mx-auto p-4'>
                     <p className='text-center'><b>Nombre: </b>{datos.name}</p> 
                     <p className='text-center'><b>Tipo: </b>{datos.category}</p>                      
                     <Button 
                      onClick={()=>consult(datos)}
                      variant="success">
                      Consultar 
                      </Button>
                </Card>)) }
                                             
          </Col>
    </Row>
</Container>);
};

export default ListAll;
