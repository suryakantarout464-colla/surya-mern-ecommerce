import {
  Typography,
  Box,
  styled,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;
const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;
const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;

  & > td {
    font-size: 14px;
    margin-top: 10px;
    border:none;
  }
`;

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTo: 5, color: "#878787", fontSize: 14 }}>
        8 Ratings & 1 Reviews
        <Box component="span">
          <img src={fassured} style={{ width: 77, marginLeft: 20 }} />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>{" "}
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>{" "}
        &nbsp; &nbsp; &nbsp;
        <Box component="span" style={{ color: "#388E3c" }}>
          {product.price.discount} off
        </Box>
      </Typography>
      <Typography>Available offers</Typography>
      <SmallText>
        <Typography>
          <StyledBadge />
          Get extra 34% off upto ₹600 on 5 item(s) (price inclusive of
          cashback/coupon)T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Buy 2 items save ₹20; Buy 3 or more save ₹40See all productsT&C
        </Typography>
        <Typography>
          <StyledBadge />
          5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per
          statement quarterT&C
        </Typography>
        <Typography>
          <StyledBadge />
          10% cashback on Axis Bank Flipkart Debit Card up to ₹750T&C
        </Typography>
        <Typography>
          <StyledBadge />
          Up To ₹30 Instant Cashback on BHIM Payments App. Min Order Value ₹199.
          Offer Valid Once Per UserT&C
        </Typography>
        <Typography>
          <StyledBadge />
          EMI starting from ₹208/month
        </Typography>
      </SmallText>
  <Box display="flex" justifyContent="center" mt={2}>
  <Table style={{ maxWidth: "600px" }}>
    <TableBody>
   <ColumnText>
  <TableCell style={{ color: "#878787", width: "150px", textAlign: "left" }}>
    Delivery
  </TableCell>
  <TableCell style={{ fontWeight: 600 }}>
    Delivery by {date.toDateString()} | ₹40{" "}
  </TableCell>
</ColumnText>

<ColumnText>
  <TableCell style={{ color: "#878787", width: "150px", textAlign: "left" }}>
    Warranty
  </TableCell>
  <TableCell>No Warranty</TableCell>
</ColumnText>

<ColumnText>
  <TableCell style={{ color: "#878787", width: "150px", textAlign: "left" }}>
    Seller
  </TableCell>
  <TableCell>
    <Box component="span" style={{ color: "#2874f0" }}>SuperComNet</Box>
    <Typography>GST invoice Available</Typography>
    <Typography>
      View more Sellers Starting from ₹{product.price.cost}
    </Typography>
  </TableCell>
</ColumnText>

<ColumnText>
  <TableCell style={{ color: "#878787", width: "150px", textAlign: "left" }}>
    Description
  </TableCell>
  <TableCell
    style={{
      whiteSpace: "normal",
      wordWrap: "break-word",
      maxWidth: "300px",
    }}
  >
    {product.description}
  </TableCell>
</ColumnText>

    </TableBody>
  </Table>
</Box>


    </>
  );
};

export default ProductDetail;
