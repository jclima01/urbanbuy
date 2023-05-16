import { Grid, Typography, Box } from "@mui/material";
import { useSpring, animated } from "react-spring";
import Foto1 from "../../Img/Foto1.jpeg"

function ImageWithText() {
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
    <div >
    <Grid container spacing={10}>
      <Grid item xs={8} sm={5}>
        <img
          src={Foto1}
          alt="Mi imagen"
          style={{ maxWidth: "120%", height: "auto" }}
        />
      </Grid>
      <Grid item xs={12} md={6} sx={{ mt: 8 }}>
        <Box
          sx={{
            p: 5,
            bgcolor: "#f0f0f0",
            borderRadius: "20px",
          }}
          component={animated.div}
          style={{ ...slideIn, ...fadeIn }}
        >
          <Typography variant="h4" gutterBottom color="#17202A">
            Conoce UrbanBuy
          </Typography>
          <br />
          <br />
          <Typography variant="p" gutterBottom color="#17202A">
          UrbanBuy es un espacio donde tu puedes vender de una forma rápida, segura y sencilla, Aquí tú tienes todo el control decide qué y cómo venderte. En tan solo unos simples pasos tu ecommerce estará disponible para todos tus clientes  
          </Typography>
        </Box>
      </Grid>
    </Grid>
    </div>
  );
}

export default ImageWithText;
