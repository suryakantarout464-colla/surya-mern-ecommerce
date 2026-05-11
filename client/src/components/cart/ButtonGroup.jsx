import { Button, ButtonGroup as MuiButtonGroup, styled } from "@mui/material";
import { useDispatch } from "react-redux";
import { increaseQty, decreaseQty } from "../../redux/actions/cartActions";

const Component = styled(MuiButtonGroup)`
  margin-top: 30px;
`;

const StyledButton = styled(Button)`
  border-radius: 50%;
`;

// ✅ Center button specially style
const QtyDisplay = styled(Button)`
  border-radius: 50%;
  font-weight: 700;       // bold
  pointer-events: none;   // disable click
`;

const QuantityButtonGroup = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <Component>
      <StyledButton onClick={() => dispatch(decreaseQty(item.id))}>-</StyledButton>
      <QtyDisplay>{item.qty}</QtyDisplay>
      <StyledButton onClick={() => dispatch(increaseQty(item.id))}>+</StyledButton>
    </Component>
  );
};

export default QuantityButtonGroup;
