import { Box, InputBase, List, ListItem, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  width: 38%;
  background: #fff;
  margin-left: 19px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  position: relative;
`;

const InputSearchBase = styled(InputBase)`
  padding-left: 20px;
  width: 100%;
`;

const SearchIconWrapper = styled(Box)`
  color: blue;
  padding: 5px;
  display: flex;
`;
const ListWrapper = styled(List)`
  position: absolute;
  top: 36px;   /* margin-top ke jagah top use karo */
  background: #FFFFFF;
  color: #000;
  width: 100%;  /* dropdown bar full width cover kare */
  max-height: 300px;  /* optional: scroll ke liye limit */
  overflow-y: auto;   /* optional */
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2); /* thoda style */
  border-radius: 4px;
  z-index: 10; /* ensure upar aaye */
`;



const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <SearchContainer>
      <InputSearchBase
        placeholder="Search for Products, brands and more"
        value={text}
        onChange={(e) => getText(e.target.value)}
      />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>

      {text && (
        <ListWrapper
      
        >
          {products
            .filter((product) =>
              product.title.longTitle
                .toLowerCase()
                .includes(text.toLowerCase())
            )
            .map((product, index) => (
              <ListItem key={index}>
                <Link 
               to ={`/product/${product.id}`}
               onClick={()=>  setText('')}
               style={{textDecoration:'none',color:'inherit'}}
               >

                {product.title.longTitle}

                </Link >
                </ListItem>
            ))}
        </ListWrapper>
      )}
    </SearchContainer>
  );
};

export default Search;
