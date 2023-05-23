import Carousel from 'react-bootstrap/Carousel';
import style from './SliderEcommerceClient.module.css';

const SliderComponent = ({ products }) => {
  return (
    <div className={style.slider}>
      <h3 className={style.sliderTitle}>Productos destacados</h3>
      <Carousel>
        {products.map((product, index) => (
          <Carousel.Item key={product._id}>
            <img className={style.img} src={product.imageUrl} alt={product.productName} />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default SliderComponent;
