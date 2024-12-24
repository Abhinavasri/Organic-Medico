"use client";

import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box, Rating} from '@mui/material';
import { useRouter } from 'next/navigation';
import { useCart } from '@/contexts/CartContext';
import ProductImages from './ProductImages';
import Link from 'next/link';
import CustomizedBreadcrumbs from '@/components/global/NavigationBC';

interface ProductDetailProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
    images: string[];
    rating: number;
    description: string;
    category: string;
    brand: string;
    inStock: boolean;
  };
}

const ProductDetailComp: React.FC<ProductDetailProps> = ({ product }) => {

  const router = useRouter();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState<string>(product.image);

  return (
    <div>
      <CustomizedBreadcrumbs />
    
    <Card>
      <ProductImages
        mainImage={selectedImage} 
        images={product.images}  // Pass the images array
        onImageSelect={setSelectedImage} 
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
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
              });
              router.push('/cart'); 
            }}
          >
            Add to Cart
          </Button>
        </Box>
        <Box sx={{ mt: 2 }}>
        <Link href={`/`} passHref>
          <Button variant="contained" color="primary">
            Back to Listings
          </Button>
        </Link>
        </Box>
      </CardContent>
    </Card>
    </div>
  );
};

export default ProductDetailComp;


/*<CardMedia
        component="img"
        sx={{ height: 300, objectFit: 'contain' }}
        image={product.image}
        alt={product.name}
      />*/