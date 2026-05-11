import { useState, useContext } from "react";
import { Box, Button, Typography, styled, Badge } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";
import LoginDialog from "../login/LoginDialog";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  margin: "0 3% 0 auto",
  "& > button, & > p, & > div": {
    marginRight: 40,
    fontSize: 16,
    alignItems: "center",
    cursor: "pointer",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
    textAlign: "center",
    margin: "20px auto",
    "& > button, & > p, & > div": {
      marginRight: 0,
      marginBottom: 20,
    },
  },
}));

const Container = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  color: "inherit",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    justifyContent: "center",
    marginTop: 10,
  },
}));

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #fff;
  padding: 5px 40px;
  border-radius: 2px;
  text-transform: none;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
  &:hover {
    background: #f1f1f1;
  }
`;

const CustomButtons = ({ closeDrawer }) => {
  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const openDialog = () => setOpen(true);

  const handleCartClick = () => {
    if (closeDrawer) closeDrawer();
    setTimeout(() => navigate("/cart"), 100);
  };

  return (
    <>
      <Wrapper>
        {account ? (
          <Profile account={account} setAccount={setAccount} closeDrawer={closeDrawer} />
        ) : (
          <LoginButton variant="contained" onClick={openDialog}>
            Login
          </LoginButton>
        )}

        <Typography style={{ marginTop: 4, width: 135 }}>Become a Seller</Typography>
        <Typography style={{ marginTop: 4 }}>More</Typography>

        <Container onClick={handleCartClick}>
          <Badge badgeContent={cartItems?.length} color="secondary">
            <ShoppingCart style={{ marginRight: 8 }} />
          </Badge>
          <Typography style={{ marginLeft: 10 }}>Cart</Typography>
        </Container>
      </Wrapper>

      <LoginDialog open={open} setOpen={setOpen} />
    </>
  );
};

export default CustomButtons;
