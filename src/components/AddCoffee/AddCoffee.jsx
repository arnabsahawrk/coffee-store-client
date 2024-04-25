import addCoffeeBg from "../../assets/images/more/11.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import AddCoffeeForm from "./AddCoffeeForm";

const AddCoffee = () => {
  return (
    <section
      style={{ backgroundImage: `url(${addCoffeeBg})` }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <div className="container mx-auto px-4 lg:px-[100px] py-10 space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[#374151] text-3xl hover:bg-[#D2B48C] rounded-lg py-2 px-4"
        >
          <FaArrowLeftLong className="text-[#331A15]" /> Back to home
        </Link>
        <div className="space-y-4 bg-[#F4F3F0] rounded-md p-10 lg:p-16">
          <h1 className="text-3xl md:text-4xl lg:text-[45px] text-[#374151] text-center">
            Add New Coffee
          </h1>
          <p className="text-base md:text-lg text-[#1B1A1AB2] max-w-[932px] text-center mx-auto">
            Bring your freshest coffee offerings to market. Simply provide the
            details, imagery and tasting notes to feature your latest seasonal
            blends, rare micro-lots or signature roasts. This dedicated space
            allows you to make your premium beans visible and available to
            customers of discerning coffee lovers.
          </p>
          <AddCoffeeForm />
        </div>
      </div>
    </section>
  );
};

export default AddCoffee;
