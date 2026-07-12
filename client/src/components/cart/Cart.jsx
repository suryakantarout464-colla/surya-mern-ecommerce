import { Typography, Box, styled, Button } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalView from "./TotalView";
import EmptyCart from "./EmptyCart";
import { useNavigate } from "react-router-dom";

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

  const placeOrder = async () => {
    try {
     await fetch("https://surya-mern-ecommerce.onrender.com/api/create-order", {
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
      });

      navigate("/order-success");

    } catch (error) {
      console.log("Order error:", error);
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
            onClick={placeOrder}   // ✅ yaha change
          >
            Place Order
          </StyledButton>
        </ButtonWrapper>
      </Left>

      <Right>
        <TotalView cartItems={cartItems} />
      </Right>
    </Container>
  ) : (
    <EmptyCart />
  );
};

export default Cart;