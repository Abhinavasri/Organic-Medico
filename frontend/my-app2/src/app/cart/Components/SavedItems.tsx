"use client";
import React from 'react';
import { List, ListItem, ListItemText, Button, Box, Typography, Link, IconButton } from '@mui/material';
import { useCart } from '@/contexts/CartContext';
import DeleteIcon from '@mui/icons-material/Delete';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { products } from '@/Products/data';

const SavedItems: React.FC = () => {
  const { savedItems, addToCart, removeFromSaved } = useCart();
  const router = useRouter();

  const navigateToVendor = (vendorId: string) => {
    router.push(`/vendors/${vendorId}`);
  };

  const navigateToProductdetails = (productId: string) => {
    router.push(`/product-details/${productId}`);
  }

  console.log('Cart items:', savedItems);

  return (
    <>
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Saved Items
      </Typography>
      {savedItems.length > 0 ? (
        <List>
          {savedItems.map((item) => {
            console.log('Rendering item:', item);
            const product = products.find((product) => product.id === item.id);

            return (
              <ListItem
                key={item.id}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
              >
                {product && (
                  <Box component="img" src={product.image} alt={item.name} sx={{ width: 60, height: 60, mr: 2 }} 
                  onClick={() => navigateToProductdetails(item.id)}
                  />
                )}
                <ListItemText
                  primary={item.name}
                  secondary={
                    <>
                      {`Price: ${item.price} | Vendor: `}
                      {item.vendor ? (
                        <Link
                          component="button"
                          variant="body2"
                          onClick={() => navigateToVendor(item.vendor.id)}
                        >
                          {`${item.vendor.name}`}
                        </Link>
                      ) : (
                        'Unknown Vendor'
                      )}
                    </>
                  }
                />
                <Box>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => {
                      addToCart({ ...item, quantity: 1 });
                      removeFromSaved(item.id);
                    }}
                    sx={{ mr: 2 }}
                  >
                    Move to Cart
                  </Button>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => removeFromSaved(item.id)}
                  > Remove
                    </Button>
                </Box>
              </ListItem>
            );
          })}
        </List>
      ) : (
        <Typography variant="body1">No saved items.</Typography>
      )}
    </>
  );
};

export default SavedItems;


/*<IconButton
                    color="error"
                    onClick={() => removeFromSaved(item.id)}
                  >
                    <DeleteIcon/> 
                    </IconButton> 
                    */