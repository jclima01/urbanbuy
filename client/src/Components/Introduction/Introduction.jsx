import { Container, Row, Col } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import chica from "../../Img/chica.png";

function Introduction() {
  const slideIn = useSpring({
    transform: "translateX(0%)",
    from: { transform: "translateX(100%)" },
    config: { duration: 2000 },
  });

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 2000 },
  });

  return (
    <div>
      <Container>
        <Row>
          <Col xs={8} sm={5}>
            <img
              src={chica}
              alt="Mi imagen"
              style={{ maxWidth: "120%", height: "auto" }}
            />
          </Col>
          <Col xs={12} md={6} className="mt-5 mt-md-0">
            <animated.div
              style={{ ...slideIn, ...fadeIn }}
              className="p-5 bg-light rounded"
            >
              <div style={{ marginTop: "1rem" }}>
                <h4 className="text-dark mb-4">Conoce UrbanBuy</h4>
                <p className="text-dark">
                Tu plataforma de ventas ágil y confiable.
UrbanBuy es mucho más que una simple plataforma de ventas en línea. Es un espacio diseñado para ofrecerte una experiencia completa y satisfactoria al vender tus productos. Nos enfocamos en brindarte una solución ágil y confiable, para que puedas alcanzar tus objetivos de negocio de manera efectiva.
<br/><br/>
En UrbanBuy, tú tienes el control total. Puedes decidir qué productos quieres ofrecer, cómo deseas presentarlos y qué estrategias de venta implementar. Te proporcionamos las herramientas necesarias para que puedas gestionar tu ecommerce de manera sencilla y eficiente.
                </p>
              </div>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Introduction;
