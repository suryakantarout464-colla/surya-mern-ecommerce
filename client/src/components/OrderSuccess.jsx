import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderSuccess = ({ open, handleClose }) => {
  const navigate = useNavigate();

  const continueShopping = () => {
    handleClose();
    navigate("/");
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle style={{ textAlign: "center", color: "green" }}>
        🎉 Order Placed Successfully!
      </DialogTitle>

      <DialogContent>
        <Typography align="center">
          Thank you for shopping with us 😊
        </Typography>

        <Typography
          align="center"
          style={{ marginTop: 10, color: "#555" }}
        >
          Your order has been received and will be processed shortly.
        </Typography>
      </DialogContent>

      <DialogActions style={{ justifyContent: "center", paddingBottom: 20 }}>
        <Button
          variant="contained"
          onClick={continueShopping}
        >
          Continue Shopping
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default OrderSuccess;