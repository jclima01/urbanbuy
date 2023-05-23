import React from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import A from '../../Img/A.jpeg';
import B from '../../Img/B.jpeg';
import C from '../../Img/C.jpeg';
import '../Slider/Slider.css'

function Slider() {
  return (
    <div className='Slider'>
    <Container style={{ padding:'50px',backgroundSize: 'cover', borderRadius:'10px'}}>
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
          <h1 style={{fontSize:'60px', color:'black'}} >Descubre una nueva forma de verder tus productos</h1>
          {/* <button className='button-slider'>DESCUBRE TUS OPORTUNIDADES</button> */}
        </Col>
      </Row>
      
    </Container>
    </div>
  );
}

export default Slider;
