import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Paper, { PaperProps } from '@mui/material/Paper';
import Draggable from 'react-draggable';
import { useCart } from '@/contexts/CartContext';

function PaperComponent(props: PaperProps) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

export default function ClearCartDialog() {
  const [open, setOpen] = React.useState(false);

  const { clearCart } = useCart();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirmClearCart = () => {
    clearCart(); 
    handleClose(); 
  };

  return (
    <React.Fragment>
      {/* Button to open the dialog */}
      <Button variant="outlined" color="secondary" onClick={handleClickOpen} sx={{ml: 2}}>
        Clear Cart
      </Button>

      {/* Draggable Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        {/* Draggable Dialog Title */}
        <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
          Clear Cart
        </DialogTitle>
        
        {/* Dialog Content */}
        <DialogContent>
          <DialogContentText>
            Are you sure you want to clear your cart?
          </DialogContentText>
        </DialogContent>

        {/* Dialog Actions */}
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmClearCart} color="secondary">
           Yes
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
