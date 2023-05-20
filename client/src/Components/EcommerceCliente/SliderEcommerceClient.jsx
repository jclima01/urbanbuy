import React from 'react';
import Carousel from 'react-bootstrap/Carousel';


import imagenCl3 from '../../Img/imagenCl3.jpg'
import portadaC2 from '../../Img/portadaC2.jpg'
import portadaC3 from '../../Img/portadaC3.jpg'

const SliderComponent = () => {
  return (
    <div style={{marginTop:'-20px'}}>
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={imagenCl3} alt="Image 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={portadaC2} alt="Image 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={portadaC3} alt="Image 3" />
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default SliderComponent;
