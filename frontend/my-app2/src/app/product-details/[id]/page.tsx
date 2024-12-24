"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import { Typography } from '@mui/material';
import { products } from '@/Products/data';  
import ProductDetailComp from '../components/ProductDetailComp';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();  

  if (typeof id !== 'string') {
    return <Typography variant="h6">Product not found</Typography>;
  }

  const product = products.find(p => p.id === id);

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return <ProductDetailComp product={product} />;
};

export default ProductDetailsPage;



/*"use client";

import React from 'react';
import { useParams, useRouter } from 'next/navigation';  // Correct import for dynamic routes
import { Card, CardContent, CardMedia, Typography, Button, Box, Rating } from '@mui/material';
import { products } from '@/Products/data';  // Assuming static data for demonstration
import { useCart } from '@/contexts/CartContext';

const ProductDetailsPage: React.FC = () => {
  const { id } = useParams();  // Use useParams to get dynamic route parameters
  const router = useRouter();
  const { addToCart } = useCart();

  // Check if 'id' is a valid string
  if (typeof id !== 'string') {
    return <Typography variant="h6">Product not found</Typography>;
  }

  // Find the product based on the ID
  const product = products.find(p => p.id === id);

  // Handle case where product is not found
  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Card >
      <CardMedia
        component="img"
        sx={{ height: 300, objectFit: 'contain' }}  // Adjust size with sx prop
        image={product.image}
        alt={product.name}
      />
      <CardContent>
        <Typography variant="h4">{product.name}</Typography>
        <Typography variant="h6" color="textSecondary">
          {product.price}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Rating value={product.rating} precision={0.5} readOnly />
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {product.description}
        </Typography>
        <Typography variant="body2" color="textSecondary" sx={{ mt: 2 }}>
          Category: {product.category}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Brand: {product.brand}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {product.inStock ? 'In Stock' : 'Out of Stock'}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              AddToCart({
                id: product.id,
                name: product.name,
                price: product.price,
              });
              router.push('/cart');  // Navigate to the cart page
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductDetailsPage;*/









