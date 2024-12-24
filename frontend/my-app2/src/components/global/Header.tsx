import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home'; 
import ContactMailIcon from '@mui/icons-material/ContactMail'; 
import InfoIcon from '@mui/icons-material/Info'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const Navbar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Button color="inherit" href="#home" startIcon={<HomeIcon /> }>
          Home
        </Button>
        <Button color="inherit" href="#about" startIcon={<InfoIcon />}>
          About Us
        </Button>
        <Button color="inherit"  href="/product-listing" startIcon={<ShoppingBagIcon />}>
          Our Products
        </Button>
        <Button color="inherit" href="#contact" startIcon={<ContactMailIcon />}>
          Contact
        </Button>
        <Button color="inherit" href="/cart" startIcon={<AddShoppingCartIcon />}>
          Cart
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;



/* 
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
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
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
*/
