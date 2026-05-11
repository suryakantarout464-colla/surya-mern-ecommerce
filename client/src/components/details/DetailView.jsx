import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useParams}  from 'react-router-dom'
import { getProductDetails } from "../../redux/actions/productAction";
import { Box, Typography,styled, Grid} from "@mui/material";
import ActionItem from "./ActionItem";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
background:#F2F2F2;
margin-top:55px;
`;
const Container = styled(Grid)(({theme}) => ({
background:'#FFFFFF',
display:'flex',
[theme.breakpoints.down('md')]:{
  margin:0
}
}))


const RightContainer = styled(Grid)(({theme}) => ({
  marginTop: '50px',
  padding: '0 20px',      // 👈 thoda padding
  [theme.breakpoints.down('md')]: {
    marginTop: '20px',
    textAlign: 'center'   // 👈 mobile me center alignment
  }
}))



const DetailView = () =>{

const dispatch = useDispatch();
const {id} = useParams();

const {loading, product} = useSelector(state => state.getProductDetails)



useEffect(()=>{
  if(product && id !==product.id)
  dispatch(getProductDetails(id))
},[dispatch, id,loading, product])
console.log(product);
  return (
   <Component>
    {
    product && Object.keys(product).length && 
        <Container container>
            <Grid item lg={4} md={4} sm={8} xs={12}>
            <ActionItem product={product}/>
            </Grid>
            <RightContainer item lg={8} md={8} sm={8} xs={12}>
             <ProductDetail product={product}/>
            </RightContainer>
        </Container>
    }
   </Component>
  )
}

export default DetailView;