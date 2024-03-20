import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Card_img from '../modals/products_img';
import { Chip, Grid } from '@mui/material';
import ImgFull from '../modals/img';

const truncateText = (text, maxLength) => {
  return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
};


export default function ServiceCards({products}) {
  
  const [view, setView] = React.useState(false);
  const [viewImg, setViewImg] = React.useState(false);

  const handleView = () => {
    setView(true);
  }

  const handleViewImg = () => {
    setViewImg(true);
  }

  const cancelView = () => {
    setView(false);
  }
  
  const cancelViewImg = () => {
    setViewImg(false);
  }



  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        component="img"
        alt={products.nombre}
        height="140"
        
        onClick={handleViewImg}
        image={products.imagen}//"/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>

        <Typography gutterBottom variant="h5" component="div">          
            {products.nombre}
        </Typography>
        <Grid item xs={12}>
              <Chip color='success' fontWeight="normal" sx={{ fontWeight: '600' }} label={`$${products.precio}`} />
        </Grid>
        
        <Typography>
        {truncateText(products.descripcion, 150)}
        </Typography>

      </CardContent>
      <CardActions>
        <Button size="large" sx={{ width: '100%' }} onClick={handleView}>Ver más</Button>
        {/*<Button size="small">Learn More</Button>*/}
      </CardActions>

      <Card_img open={view} cancelView={cancelView} imageUrl={products.imagen} nombrePlanta = {products.nombre} descripcionPlanta={products.descripcion}/>
      <ImgFull open={viewImg} cancelView={cancelViewImg} imageUrl={products.imagen} />
    </Card>

    
  );
}
