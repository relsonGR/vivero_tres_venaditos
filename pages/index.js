import {
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { Assignment, Devices } from "@mui/icons-material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { useRouter } from "next/router";
import datos from './api/products/index.json';
import React, { useState, useEffect } from "react";
import ImageCarousel from "../components/carousel/ImageCarousel";

const images = [
  '../img/Vivero/slider1.jpg',
  '../img/Vivero/slider2.jpg',
  '../img/Vivero/slider3.jpg'
];

function Home({ user }) {
  
  const [productos, setProductos] = useState([]);
  
  const router = useRouter();
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    setProductos(datos.plantas);
  }, []);
  
  useEffect(() => {
    // Genera una muestra aleatoria de 3 plantas
    const shuffledProducts = productos.sort(() => 0.5 - Math.random());
    const selectedProducts = shuffledProducts.slice(0, 3);
    setRandomProducts(selectedProducts);
  }, [productos]);

  useEffect(() => {
    setProductos(datos.plantas);
  }, []);


  return (
    <Paper>
      <Typography
        variant="h3"
        gutterBottom
        align="center"
        sx={{ mt: 2, fontWeight: "bold" }}
      >
        Bienvenido a Vivero Tres Venaditos
      </Typography>

      <ImageCarousel images={images} />
     
      <Typography
        variant="h6"
        gutterBottom
        align="center"
        sx={{ mb: 2, padding: 4 }}
      >
        Tu destino para plantas y servicios de jardinería
      </Typography>


      <Grid container spacing={2} justifyContent="center">

        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/300"
              alt="Cactus"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Cactus
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Planta de interior fácil de cuidar
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" fullWidth>
                Ver más
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card variant="outlined">
            <CardMedia
              component="img"
              height="200"
              image="https://via.placeholder.com/300"
              alt="Orquídea"
            />
            <CardContent>
              <Typography variant="h6" component="div">
                Orquídea
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Flor exótica para interiores
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" fullWidth>
                Ver más
              </Button>
            </CardActions>
          </Card>
        </Grid>
        {/* Agrega más tarjetas de productos según sea necesario */}
      </Grid>

      <CardMedia
        component="img"
        height="300"
        image="../img/Vivero/mostrar1.jpg"
        alt="Vivero"
        sx={{ mt: 2 }}
      />

      <Typography variant="h5" gutterBottom align="center" sx={{ mt: 2 }}>
        Nuestros Servicios
      </Typography>

      <List sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Assignment />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Diseño de Jardines" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <Devices />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Mantenimiento de Plantas" />
        </ListItem>
      </List>

      <Typography
        variant="body1"
        align="center"
        sx={{ mt: 2, mb: 4, mx: 2 }}
      >
        Somos una empresa dedicada a proporcionar las mejores plantas y servicios
        de jardinería para nuestros clientes. ¡Déjanos ayudarte a hacer de tu
        jardín un lugar hermoso y vibrante!
      </Typography>
    </Paper>
  );
}

export default Home;
