
"use client";
import React from 'react';
import { Container } from '@mui/material';
import CartItems from './Components/cartItems';
import SavedItems from './Components/SavedItems';
import CustomizedBreadcrumbs from '@/components/global/NavigationBC';

const CartPage: React.FC = () => {
  return (
    <Container>
      <CustomizedBreadcrumbs />
      <CartItems />
      <SavedItems />
    </Container>
  );
};

export default CartPage;




/*"use client";
import React from 'react';
import { Container, Typography, List, ListItem, ListItemText, Button, Box, TextField, IconButton } from '@mui/material';
import { useCart } from '@/contexts/CartContext';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CartPage: React.FC = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    updateCartItemQuantity,
    saveForLater,
    savedItems,
    addToCart,
    removeFromSaved,
  } = useCart();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(id); // Remove item if quantity is set to less than 1
    } else {
      updateCartItemQuantity(id, quantity);
    }
  };

  return (
    <Container>
      <Typography variant="h3" gutterBottom>Cart</Typography>
      {cart.length > 0 ? (
        <>
          <List>
            {cart.map((item) => (
              <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <ListItemText
                  primary={item.name}
                  secondary={`Price: ${item.price} | Quantity: ${item.quantity}`}
                />

                <Box display="flex" alignItems="center">
                  <IconButton
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    aria-label="decrease quantity"
                  >
                    <RemoveIcon />
                  </IconButton>
                  <TextField
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value, 10))}
                    inputProps={{ min: 1, style: { textAlign: 'center', width: '40px' } }}
                  />
                  <IconButton
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    aria-label="increase quantity"
                  >
                    <AddIcon />
                  </IconButton>
                </Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => saveForLater(item.id)}
                  sx={{ ml: 2 }}
                >
                  Save For Later
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </Button>
              </ListItem>
            ))}
          </List>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => alert('Proceeding to checkout!')}  // Replace with your checkout logic
            >
              Checkout
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={clearCart}
              sx={{ ml: 2 }}
            >
              Clear Cart
            </Button>
          </Box>
        </>
      ) : (
        <Typography variant="body1">Your cart is empty.</Typography>
      )}

    
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>Saved Items</Typography>
      {savedItems.length > 0 ? (
        <List>
          {savedItems.map((item) => (
            <ListItem key={item.id} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <ListItemText
                primary={item.name}
                secondary={`Price: ${item.price}`}
              />
              <Box>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    addToCart({ ...item, quantity: 1 });  // Move item back to the cart with default quantity 1
                    removeFromSaved(item.id);  // Remove from saved items
                  }}
                  sx={{ mr: 2 }}
                >
                  Move to Cart
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => removeFromSaved(item.id)}  // Remove from saved items
                >
                  Remove
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography variant="body1">No saved items.</Typography>
      )}
    </Container>
  );
};

export default CartPage;*/



