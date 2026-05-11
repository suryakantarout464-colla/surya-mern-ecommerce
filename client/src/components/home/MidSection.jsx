import { imageURL } from "../../constants/data";
import { Grid, styled } from "@mui/material";

const Wrapper = styled("div")`
  margin-top: 10px;
  padding: 0 8px;
`;
const Image = styled('img')(({theme}) => ({
  marginTop:10,
  width:'100%',
  display:"flex",
  justifyContent:"space-between",
  [theme.breakpoints.down ('md')]:{
    objectFit:'cover',
    height:120,
  }
}));

const MidSection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';


  return (
    <>
    <Wrapper>
      <Grid container spacing={2}>
        {imageURL.map((image, index) => (
          <Grid key={index} size={{ xs: 12, sm: 12, md: 4, lg: 4 }}>
            <img
              src={image}
              alt="image"
              style={{ width: "100%", display: "block", borderRadius: "8px" }}
            />
          </Grid>
        ))}
      </Grid>
    </Wrapper>

    <Image src={url} alt="covid" />
    </>
  );
};

export default MidSection;
