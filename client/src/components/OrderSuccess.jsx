import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const OrderSuccess = () => {
  const navigate = useNavigate();

  return (
    <Box
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <Typography variant="h4" style={{ color: "green", marginBottom: 20 }}>
        🎉 Order Placed Successfully!
      </Typography>

      <Typography variant="body1" style={{ marginBottom: 20 }}>
        Thank you for shopping with us 😊
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate("/")}
      >
        Continue Shopping
      </Button>
    </Box>
  );
};

export default OrderSuccess;