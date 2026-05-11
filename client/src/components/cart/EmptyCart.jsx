import { Typography, Box, styled } from "@mui/material";

const Outer = styled(Box)`
  background: #f5f5f5;     /* 🔹 off-white poore screen pe */
  min-height: 100vh;       /* full screen height */
  display: flex;
  justify-content: center;
  align-items: center; 
    
`;

const Component = styled(Box)`
  height: 65vh;
  width: 60%;
  background: #fff;        /* 🔹 white inner box */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* halka shadow */
`;

const Image = styled("img")({
  width: "200px",
  marginBottom: "20px",
});

const EmptyCart = () => {
  const imgurl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";

  return (
    <Outer>
      <Component>
        <Image src={imgurl} alt="empty" />
        <Typography variant="h6">Your Cart is Empty</Typography>
        <Typography style={{ color: "#878787", marginTop: 10 }}>
          Add items to it now
        </Typography>
      </Component>
    </Outer>
  );
};

export default EmptyCart;
