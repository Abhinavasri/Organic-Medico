"use client";
import React from 'react';
import { Grid, Container } from '@mui/material'; 
import { products } from '@/Products/data';
import ProductListingComp from './components/ProductListingComp';
import CustomizedBreadcrumbs from '@/components/global/NavigationBC';

const ProductListingPage: React.FC = () => {
  return (
    <Container>
      <CustomizedBreadcrumbs />

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductListingComp product={product} /> 
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductListingPage;




/*import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { mobiles } from '@/Products/data';

const ProductListingPage: React.FC = () => {
  return (
    <Grid container spacing={4}>
      {mobiles.map((mobile) => (
        <Grid item xs={12} sm={6} md={4} key={mobile.id}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 2 }}>
            <CardMedia
              component="img"
              sx={{ height: 120, width: 100 }}  // Adjust size with sx prop
              image={mobile.image}
              alt={mobile.name}
            />
            <CardContent>
              <Typography variant="h6">{mobile.name}</Typography>
              <Typography variant="body2" color="textSecondary">{mobile.description}</Typography>
              <Typography variant="h5" color="primary">{mobile.price}</Typography>
              <Link href={`/product-details/${mobile.id}`} passHref>
                <Button variant="contained" color="primary">View Details</Button>
              </Link>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductListingPage;*/


