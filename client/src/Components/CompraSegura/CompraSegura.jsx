import React from 'react';
import compra1 from '../../Img/compra1.avif';
import compra2 from '../../Img/compra2.avif';
import compra3 from '../../Img/compra3.avif';
import '../CompraSegura/CompraSegura.css';

function CompraSegura() {
  return (
    <div className="image-container">
      <div className="cardA">
        <img src={compra1} className="card-img-top" alt="..."  />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="cardA">
        <img src={compra2} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
      <div className="cardA">
        <img src={compra3} className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CompraSegura;
