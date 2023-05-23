import Carousel from 'react-bootstrap/Carousel';

      {/* eslint-disable react/prop-types */}
const SliderComponent = ({ products }) => {
  return (
    <div style={{marginTop:'-20px'}}>
      {/* eslint-disable react/prop-types */}
    <Carousel>
      {products.map((product) => (
      <Carousel.Item key={product._id}>
        <img className="d-block w-100" src={product.imageUrl} alt={product.productName} />
      </Carousel.Item>
      ))}
    </Carousel>
    </div>
  );
};

export default SliderComponent;
