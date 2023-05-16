import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from '../../img/A.jpeg';
import B from '../../img/B.jpeg';
import C from '../../img/C.jpeg';
import '../Slider/Slider.css'

function Slider() {
  return (
    <div className='Slider'>
    <Container style={{backgroundColor:'rgb(236, 203, 214)', padding:'50px',backgroundSize: 'cover', borderRadius:'10px'}}>
      <Row >
        <Col xs={12} md={6}>
          <Carousel style={{borderRadius:'10px'}}>
            <Carousel.Item>
              <img className="d-block w-100" src={A} alt="First slide" style={{ maxWidth: "100%", maxHeight: "300px" , borderRadius: '15px'}} />
              <Carousel.Caption>
                
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={B} alt="Second slide" style={{ maxWidth: "100%", maxHeight: "300px" , borderRadius: '15px' }} />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src={C} alt="Third slide" style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: '15px' }} />
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col xs={12} md={6}>
          <h1 style={{fontSize:'80px', color:'rgb( 139, 69, 19)'}} >Conoce nuestras Opciones</h1>
          
        </Col>
      </Row>
      
    </Container>
    </div>
  );
}

export default Slider;