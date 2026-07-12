import {
  Box,
  Button,
  styled,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
} from "@mui/material";
import {
  ShoppingCart as Cart,
  FlashOn as Flash,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";

const LeftContainer = styled(Box)(({ theme }) => ({
  minWidth: "40%",
  padding: "40px 0 0 80px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 40px",
  },
}));

const Image = styled("img")(({ theme }) => ({
  padding: "15px",
  display: "block",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%",
  },
}));

const StyleButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: 2,
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginBottom: 10,
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity] = useState(1);
  const [open, setOpen] = useState(false);

  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
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
            items: [{ ...product, quantity }],
            totalAmount: product.price.cost * quantity,
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

  return (
    <LeftContainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
          margin: "auto",
          textAlign: "center",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>

      <StyleButton
        variant="contained"
        onClick={addItemToCart}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyleButton>

      <StyleButton
        variant="contained"
        onClick={() => setOpen(true)}
        style={{ background: "#fb541b" }}
      >
        <Flash />
        Buy Now
      </StyleButton>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Confirm Order</DialogTitle>

        <DialogContent>
          <Typography variant="h6">
            {product.title.shortTitle}
          </Typography>

          <Typography sx={{ mt: 2 }}>
            Price : ₹{product.price.cost}
          </Typography>

          <Typography>
            Quantity : {quantity}
          </Typography>

          <Typography>
            Payment : Cash on Delivery
          </Typography>
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)}>
            Cancel
          </Button>

          <Button
            variant="contained"
            color="success"
            onClick={buyNow}
          >
            Confirm Order
          </Button>
        </DialogActions>
      </Dialog>
    </LeftContainer>
  );
};

export default ActionItem;