import useCoffeeDataFetch from "../../hooks/useCoffeeDataFetch";
import Spinner from "../common/Spinner";
import Product from "./Product";

const Products = () => {
  const { coffees, isLoading } = useCoffeeDataFetch();

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
      {coffees.map((coffee) => (
        <Product key={coffee._id} coffee={coffee} />
      ))}
    </div>
  );
};

export default Products;
