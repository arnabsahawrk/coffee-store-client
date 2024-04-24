import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";
import ShowcaseBanner from "../components/Banner/ShowcaseBanner";
import ShowcaseInstagramPic from "../components/Banner/ShowcaseInstagramPic";
import ProductSection from "../components/Products/ProductSection";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <HomeBanner />
        <ShowcaseBanner />
        <ProductSection />
        <ShowcaseInstagramPic />
      </section>
    </>
  );
};

export default HomePage;
