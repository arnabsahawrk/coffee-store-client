import { Helmet } from "react-helmet-async";
import AddCoffee from "../components/AddCoffee/AddCoffee";

const AddCoffeePage = () => {
  return (
    <>
      <Helmet>
        <title>Add Coffee</title>
      </Helmet>
      <section>
        <AddCoffee />
      </section>
    </>
  );
};

export default AddCoffeePage;
