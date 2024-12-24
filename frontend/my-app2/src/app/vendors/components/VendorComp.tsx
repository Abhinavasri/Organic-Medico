// src/components/VendorComponent.tsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia, Button } from '@mui/material';
import { Vendor } from '@/contexts/CartContext'; 
import { products } from '@/Products/data';
import CustomizedBreadcrumbs from '@/components/global/NavigationBC';

interface VendorComponentProps {
  vendor: Vendor;
}

const VendorComponent: React.FC<VendorComponentProps> = ({ vendor }) => {
  return (
    <div>
    <CustomizedBreadcrumbs />
    <Card sx={{ maxWidth: 345, mb: 2 }}>
      <CardMedia
        component="img"
        sx={{ width: 50, height: 60, mr: 2 }} 
        image={vendor.image} 
        alt={vendor.name}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {vendor.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {vendor.location}
        </Typography>
        {/* You can add more details about the vendor here */}
      </CardContent>
      <Button
        size="small"
        color="primary"
        onClick={() => alert(`More details about ${vendor.name}`)} // Adjust action as needed
        sx={{ m: 1 }}
      >
        More Details
      </Button>
    </Card>
    </div>
  );
};

export default VendorComponent;
