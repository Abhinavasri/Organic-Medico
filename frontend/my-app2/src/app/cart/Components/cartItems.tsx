"use client";
import React from 'react';
import {
  List,
  ListItem,
  ListItemText,
  Button,
  Box,
  TextField,
  IconButton,
  Typography,
  Link,
} from '@mui/material';
import { CartItem, useCart } from '@/contexts/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import DeleteIcon from '@mui/icons-material/Delete';
import { useRouter } from 'next/navigation';
import {products} from '@/Products/data'
import ClearCartDialog from './ClearCart';

const CartItems: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart, saveForLater, savedItems } = useCart();
  const router = useRouter();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id);
    } else {
      updateCartItemQuantity(id, quantity);
    }
  };

  const handleSaveForLater = (item: CartItem) => {
    saveForLater(item.id);
  };

  const navigateToVendor = (vendorId: string) => {
    router.push(`/vendors/${vendorId}`);
  };

  const navigateToProductdetails = (productId: string) => {
    router.push(`/product-details/${productId}`);
  }

  console.log('Cart items:', cart);

  return (
    <>
      <Typography variant="h3" gutterBottom>
        Cart
      </Typography>
      {cart.length > 0 ? (
        <>
          <List>
            {cart.map((item) => {
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
                        {`Price: ${item.price} | Quantity: ${item.quantity} | Vendor: `}
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
                  <Box display="flex" alignItems="center"
                        sx={{
                          border: '1px solid #ccc',
                          borderRadius: '4px',
                          padding: '4px 8px',
                          ml: 2,
                        }}
                  >
                    <IconButton
                      onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                      aria-label="decrease quantity"
                      size="small"
                    >
                      <RemoveIcon />
                    </IconButton>
                    <Typography variant="body1" sx={{ mx: 1 }}>
                      {item.quantity}
                    </Typography>
                    <IconButton
                      onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                      aria-label="increase quantity"
                      size="small"
                    >
                      <AddIcon />
                    </IconButton>
                  </Box>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleSaveForLater(item)}  
                    sx={{ ml: 2 }}
                  >
                    Save For Later
                  </Button>

                  <Button
                     variant="outlined"
                     color="error"
                      onClick={() => removeFromCart(item.id)}
                      sx={{ ml: 2 }}
                  >
                    Remove
                  </Button>

                </ListItem>
              );
            })}
          </List>
          <Box mt={2}>
            <Button variant="contained" color="primary" onClick={() => alert('Proceeding to checkout!')}>
              Checkout
            </Button>
            
              <ClearCartDialog />
           
          </Box>
        </>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}
    </>
  );
};

export default CartItems;
