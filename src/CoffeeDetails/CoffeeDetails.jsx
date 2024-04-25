import addCoffeeBg from "../assets/images/more/11.png";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import CoffeeDetailsInfo from "./CoffeeDetailsInfo";

const CoffeeDetails = (coffee) => {
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
        <CoffeeDetailsInfo coffee={coffee} />
      </div>
    </section>
  );
};

export default CoffeeDetails;
