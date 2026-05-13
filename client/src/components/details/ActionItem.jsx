import { Box, Button, styled } from "@mui/material";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import { useState } from "react";
import { payUsingPaytm } from "../../service/api";
import { post } from "../../utils/paytm";

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
  margin: "auto", // 👈 ye center karega
  [theme.breakpoints.down("sm")]: {
    maxWidth: "80%", // 👈 mobile view me thoda responsive
  },
}));

const StyleButton = styled(Button)(({ theme }) => ({
  width: "48%",
  height: "50px",
  borderRadius: 2,
  [theme.breakpoints.down("sm")]: {
    width: "100%", // 👈 mobile me pura width lega
    marginBottom: 10,
  },
}));

const ActionItem = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);
  const { id } = product;

  const addItemToCart = () => {
    dispatch(addToCart(id, quantity));
    navigate("/cart");
  };

  const buyNow = async () => {
  let response =await payUsingPaytm({amount:500, email : 'codeforinterview01@ReportGmailerrorred.com'})
  let information = {
    action:'https://securegw.paytm.in/order/process',
    params: response
  }
  post(information);
  }

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
        onClick={() => addItemToCart()}
        style={{ marginRight: 10, background: "#ff9f00" }}
      >
        <Cart />
        Add to Cart
      </StyleButton>
  <StyleButton
  variant="contained"
  onClick={() => window.open(
    "https://www.sandbox.paypal.com/checkoutweb/signup?ssrt=1756708191237&flowlogging_id=f899065160056&token=8SV35018XF528280C&useraction=commit&flowType=WPS&rcache=1&country.x=IN&locale.x=en_GB&locale.x=en_IN&country.x=IN", 
    "_blank" // new tab me open hoga
  )}
  style={{ background: "#fb541b" }}
>
  <Flash /> Buy Now
</StyleButton>

    </LeftContainer>
  );
};

export default ActionItem;
