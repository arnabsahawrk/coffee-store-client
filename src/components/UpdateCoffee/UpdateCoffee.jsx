import addCoffeeBg from "../../assets/images/more/11.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import UpdateCoffeeForm from "./UpdateCoffeeForm";

const UpdateCoffee = (coffee) => {
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
            Update Existing Coffee Details
          </h1>
          <p className="text-base md:text-lg text-[#1B1A1AB2] max-w-[932px] text-center mx-auto">
            Maintain accurate and enticing listings as your stock rotates. This
            section allows you to modify product descriptions, pricing, imagery
            and inventory levels for your current coffee offerings. Utilize
            these update capabilities to provide the latest details to browsing
            shoppers.
          </p>
          <UpdateCoffeeForm coffee={coffee} />
        </div>
      </div>
    </section>
  );
};

export default UpdateCoffee;
