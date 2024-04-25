import { Helmet } from "react-helmet-async";
import CoffeeDetails from "../CoffeeDetails/CoffeeDetails";
import { useLoaderData } from "react-router-dom";

const CoffeeDetailsPage = () => {
  const { data } = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Coffee Details</title>
      </Helmet>
      <section>
        <CoffeeDetails coffee={data} />
      </section>
    </>
  );
};

export default CoffeeDetailsPage;
