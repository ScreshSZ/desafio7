import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';

import Container from '@mui/material/Container';
import { Grid } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Button, CardActionArea, CardActions } from '@mui/material';

const Home = () => (
    <div>
    <header>
        <nav>

            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Zeniquel
                        </Typography>
                        <Button color="inherit">Ingresar</Button>
                    </Toolbar>
                </AppBar>
            </Box>


        </nav>
    </header>

    <main>
        <div className='hero'>
            <Grid container className='hero-contenedor'>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                   <h1>AQUI SE ENCUENTRA EL HERO DEL DESAFIO 7</h1>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                   <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                <Button variant="contained">Boton Hero</Button>
                </Grid>
            </Grid>
        </div>

        <section className='cards'>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../imagenes/card1.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </Grid>
              </Grid>

              <Grid>
                <Grid item xs={12} sm={12} md={6} lg={4}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../imagenes/card2.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </Grid>
              </Grid>

              <Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="../imagenes/card3.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
                </Grid>
              </Grid>
        </section>
    </main>

    <footer>
        <div className='contenido-footer'>
            <h5>AQUI SE ENCUENTRA EL FOOTER</h5>
            <a href='#'>Facebook</a>
            <a href='#'>Instagram</a>
            <a href='#'>Linkedin</a>
            <a href='#'>Twitter</a>
            <p>Todos los derechos reservados | Zeniquel Santiago 2022</p>
        </div>
    </footer>





</div>
);



export default Home;