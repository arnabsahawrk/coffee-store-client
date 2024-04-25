import coffeeCup from "../assets/images/coffee/5.png";
import PropTypes from "prop-types";

const CoffeeDetailsInfo = ({ coffee }) => {
  const { coffee: coffeeDetails } = coffee;
  const { coffeeName, chef, supplier, taste, category, details, coffeePic } =
    coffeeDetails;

  return (
    <div className="bg-[#F4F3F0] rounded-md p-10 lg:p-16 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-20 lg:gap-24">
      <img
        className="object-cover max-w-[351px]"
        src={coffeePic || coffeeCup}
        alt="Coffee"
      />
      <div className="space-y-2 text-center md:text-left text-[#5C5B5B] text-xl">
        <p className="text-[#331A15] text-3xl lg:text-4xl font-bold">
          Niceties
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Name: </span>{" "}
          {coffeeName || "Americano Coffee"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Chef: </span>{" "}
          {chef || "Mr. Matin Paul"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Supplier: </span>{" "}
          {supplier || "Cappu Authorizer"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Taste: </span>{" "}
          {taste || "Sweet and hot"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Category: </span>{" "}
          {category || "Americano"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Details: </span>{" "}
          {details || "Espresso with hot water"}
        </p>
      </div>
    </div>
  );
};

CoffeeDetailsInfo.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default CoffeeDetailsInfo;
