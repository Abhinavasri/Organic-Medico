import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Typography, Box } from '@mui/material';

const carouselItems = [
  {
    img: 'img1.png',
    title: 'Natural Cold Remedy',
    description: 'Find relief with organic honey and lemon.',
  },
  {
    img: 'https://via.placeholder.com/800x400?text=Image+2',
    title: 'Boost Immunity',
    description: 'Try turmeric and ginger for a natural boost.',
  },
  {
    img: 'https://via.placeholder.com/800x400?text=Image+3',
    title: 'Calm Digestive Issues',
    description: 'Peppermint tea is known to ease digestion.',
  },
  {
    img: 'https://via.placeholder.com/800x400?text=Image+4',
    title: 'Natural Sleep Aid',
    description: 'Chamomile tea can help improve sleep quality.',
  },
];

function CarouselItem({ item }) {
  return (
    <Paper
      sx={{
        position: 'relative',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: `url(${item.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          width: '100%',
          p: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" fontWeight="bold">
          {item.title}
        </Typography>
        <Typography variant="body1">{item.description}</Typography>
      </Box>
    </Paper>
  );
}

export default function CarouselComponent() {
  return (
    <Carousel
      indicators={true}
      navButtonsAlwaysVisible={true}
      animation="slide"
      autoPlay={true}
      interval={4000}  // Change interval in milliseconds
    >
      {carouselItems.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </Carousel>
  );
}
