import { Helmet } from "react-helmet-async";
import HomeBanner from "../components/Banner/HomeBanner";
import ShowcaseBanner from "../components/Banner/ShowcaseBanner";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section>
        <HomeBanner />
        <ShowcaseBanner />
      </section>
    </>
  );
};

export default HomePage;
