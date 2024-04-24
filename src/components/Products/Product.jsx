import { FaEye } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import coffeeCup from "../../assets/images/coffee/5.png";

const Product = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-7 bg-[#F5F4F1] rounded-lg">
      <img className="object-cover max-w-[192.23px]" src={coffeeCup} alt="" />
      <div className="space-y-4 text-center lg:text-left text-[#5C5B5B] text-xl">
        <p>
          <span className="font-semibold text-[#1B1A1A]">Name: </span> Americano
          Coffee
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Chef: </span> Mr. Matin
          Paul
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Price: </span> 890 Taka
        </p>
      </div>
      <ul className="flex gap-4 lg:flex-col">
        <li className="p-1 rounded-md bg-[#D2B48C]">
          <FaEye className="text-white" />
        </li>
        <li className="p-1 rounded-md bg-[#3C393B]">
          <IoPencil className="text-white" />
        </li>
        <li className="p-1 rounded-md bg-[#EA4744]">
          <MdDelete className="text-white" />
        </li>
      </ul>
    </div>
  );
};

export default Product;
