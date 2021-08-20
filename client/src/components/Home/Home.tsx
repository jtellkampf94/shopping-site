import { Fragment } from "react";

import HomeSlider from "../HomeSlider/HomeSlider";
import Banner from "../Banner/Banner";
import ProductArea from "../ProductArea/ProductArea";

const Home: React.FC = () => {
  return (
    <Fragment>
      <HomeSlider />
      <Banner />
      <ProductArea />
    </Fragment>
  );
};

export default Home;
