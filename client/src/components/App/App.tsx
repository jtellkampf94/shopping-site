import { Fragment } from "react";
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeSlider from "../HomeSlider/HomeSlider";
import ProductArea from "../ProductArea/ProductArea";

const App: React.FC = () => {
  return (
    <Fragment>
      <Header />
      <HomeSlider />
      <Banner />
      <ProductArea />
      <Footer />
    </Fragment>
  );
};

export default App;
