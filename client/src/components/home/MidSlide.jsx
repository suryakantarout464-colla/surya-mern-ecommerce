import Slide from "./Slide"
import { Box,styled } from "@mui/material";

const Component = styled(Box)`
  position: absolute;
  top: 390px;       // thoda niche kar diya
  right: 100px;        // abhi bilkul right side chipak ke
  width: 150px;    // jitna ad ka normal width hai utna hi rakho
  z-index: 10;

  @media (max-width: 960px) {
    display: none; // mobile me hide
  }
`;

const RightComponent = styled (Box) (({theme}) => ({

padding: '5px',
marginTop:'80px',
marginLeft:'10px',
width:'17%',
textAlign:'canter',
[theme.breakpoints.down('md')]:{
  display:'none'
}
}));


const MidSlide = ({products, title, timer}) => {
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

  return (
    <Component>
    
       <RightComponent>
         <img src={adURL} alt="ad" style={{ width: 217}} />
       </RightComponent>
    </Component>
  )
}
export default MidSlide;