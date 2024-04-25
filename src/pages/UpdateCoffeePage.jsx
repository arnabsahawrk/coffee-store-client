import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import UpdateCoffee from "../components/UpdateCoffee/UpdateCoffee";

const UpdateCoffeePage = () => {
  const { data } = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Update Coffee</title>
      </Helmet>
      <section>
        <UpdateCoffee coffee={data} />
      </section>
    </>
  );
};

export default UpdateCoffeePage;
