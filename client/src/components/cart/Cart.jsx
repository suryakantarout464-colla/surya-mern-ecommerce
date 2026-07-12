import {
  Typography,
  Box,
  styled,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  padding: "30px 135px",
  background: "#f2f2f2",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    padding: "15px",
  },
}));

const Left = styled(Box)(({ theme }) => ({
  flex: 0.7,
  marginRight: "10px",
  [theme.breakpoints.down("md")]: {
    marginRight: 0,
  },
}));

const Right = styled(Box)(({ theme }) => ({
  flex: 0.3,
  [theme.breakpoints.down("md")]: {
    marginTop: "20px",
  },
}));

const Header = styled(Box)({
  padding: "15px 24px",
  background: "#fff",
  fontWeight: 600,
});

const ButtonWrapper = styled(Box)(({ theme }) => ({
  padding: "16px 22px",
  background: "#fff",
  boxShadow: "0 -2px 10px 0 rgb(0 0 0 / 10%)",
  borderTop: "1px solid #f0f0f0",
  display: "flex",
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  background: "#fb641b",
  color: "#fff",
  width: "250px",
  height: "51px",
  borderRadius: "4px",
  "&:hover": {
    background: "#e55a12",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

const Cart = () => {
  const navigate = useNavigate();   
  const { cartItems } = useSelector((state) => state.cart);
const [open, setOpen] = useState(false);

 const placeOrder = async () => {
  try {
    const response = await fetch(
      "https://surya-mern-ecommerce.onrender.com/api/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: "user123",
          items: cartItems,
          totalAmount: cartItems.reduce(
            (total, item) => total + item.price.cost * item.quantity,
            0
          ),
          paymentMethod: "COD",
        }),
      }
    );

    if (response.ok) {
      setOpen(false);
      navigate("/");
    } else {
      alert("Order Failed");
    }
  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  }
};

  return cartItems.length ? (
    <Container>
      <Left>
        <Header>
          <Typography>My Cart ({cartItems.length})</Typography>
        </Header>

        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        <ButtonWrapper>
          <StyledButton
            variant="contained"
             onClick={() => setOpen(true)} // ✅ yaha change
          >
            Place Order
          </StyledButton>
        </ButtonWrapper>
      </Left>

      <Right>
        <TotalView cartItems={cartItems} />
      </Right>

<Dialog open={open} onClose={() => setOpen(false)}>
  <DialogTitle>Confirm Order</DialogTitle>

  <DialogContent>
    <Typography>
      Total Items: {cartItems.length}
    </Typography>

    <Typography>
      Total Amount: ₹
      {cartItems.reduce(
        (total, item) => total + item.price.cost * item.quantity,
        0
      )}
    </Typography>

    <Typography>
      Payment Method: Cash on Delivery
    </Typography>
  </DialogContent>

  <DialogActions>
    <Button onClick={() => setOpen(false)}>
      Cancel
    </Button>

    <Button
      variant="contained"
      color="success"
      onClick={placeOrder}
    >
      Confirm Order
    </Button>
  </DialogActions>
</Dialog>
      
    </Container>
  ) : (
    <EmptyCart />
  );
};

export default Cart;