import useCoffeeDataFetch from "../../hooks/useCoffeeDataFetch";
import Spinner from "../common/Spinner";
import Product from "./Product";

const Products = () => {
  const { coffees, isLoading, refetch } = useCoffeeDataFetch();

  return isLoading ? (
    <Spinner />
  ) : coffees.length ? (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-5">
      {coffees.map((coffee) => (
        <Product key={coffee._id} coffee={coffee} refetch={refetch} />
      ))}
    </div>
  ) : (
    <p className="text-2xl md:text-3xl lg:text-[49px] pt-5">
      No Coffee Added So Far!!!
    </p>
  );
};

export default Products;
