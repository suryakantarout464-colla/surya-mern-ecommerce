import { useEffect } from "react";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import { styled, Box } from "@mui/material";
import { getProducts } from "../../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";

const Component = styled(Box)`
  padding: 10px 10px;
  background: #F2F2F2;
`;

const chunkArray = (arr, size) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
};

const Home = () => {
  const { products } = useSelector((state) => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const productChunks = chunkArray(products, 7);

  const slideTitles = [
    "Deal of the Day",
    "Best Of Electronics",
    "Men's Jeans",
    "New Phones",
    "Men's Shoe's & Slippers",
    "Furniture Deals",
    "Women's Dress",
    "Top Deals On Accessories",
  ];

  return (
    <>
      <NavBar />
      <Component>
        <Banner />

        {/* First Slide */}
        {productChunks.length > 0 && (
          <Slide
            products={productChunks[0]}
            title={slideTitles[0]}
            timer={true}
          />
        )}

        {/* Niche 3 photo wale fixed slide */}
        <MidSlide products={[]} title="" timer={false} />

        {/* COVID photo wala fixed slide */}
        <MidSection />

        {/* Baaki slides jo tum add karoge (7 products per slide) */}
        {productChunks.slice(1).map((chunk, index) => (
          <Slide
            key={index + 1}
            products={chunk}
            title={slideTitles[index + 1] || `Slide ${index + 2}`}
            timer={false}
          />
        ))}

      </Component>
    </>
  );
};

export default Home;
