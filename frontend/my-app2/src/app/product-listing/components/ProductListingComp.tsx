import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';

interface ProductProps {
  product: {
    id: string;
    name: string;
    details: string;
    price: string;
    image: string;
  };
}

const ProductListingComp: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card sx={{ width: '300px', height: '300px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
      <CardMedia
        component="img"
        sx={{ height: 120, width: 100 }} 
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h6">{product.name}</Typography>
        <Typography variant="body2" color="textSecondary">
          {product.details}
        </Typography>
        <Typography variant="h5" color="primary">
          {product.price}
        </Typography>
        <Link href={`/product-details/${product.id}`} passHref>
          <Button variant="contained" color="primary">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductListingComp;
