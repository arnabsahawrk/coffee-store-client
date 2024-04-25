import { SlCup } from "react-icons/sl";
import productBg from "../../assets/images/more/1.png";
import Products from "./Products";
import { Link } from "react-router-dom";

const ProductSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${productBg})` }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <div className="container mx-auto px-4 lg:px-[100px] py-10 text-center space-y-4">
        <p className="text-[#1B1A1A]">--- Sip & Savor ---</p>
        <h1 className="text-[#331A15] text-3xl md:text-4xl lg:text-[55px]">
          Our Popular Products
        </h1>
        <Link
          to="addCoffee"
          className="bg-[#E3B577] hover:bg-[#F5F4F1] border-2 border-[#331A15] py-1 px-4 text-white hover:text-[#331A15] text-lg md:text-xl lg:text-2xl inline-flex gap-2 items-center"
        >
          Add Coffee <SlCup className="text-[#331A15] text-lg" />
        </Link>
        <Products />
      </div>
    </section>
  );
};

export default ProductSection;
