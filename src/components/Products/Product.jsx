import { FaEye } from "react-icons/fa6";
import { IoPencil } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import coffeeCup from "../../assets/images/coffee/5.png";
import PropTypes from "prop-types";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Product = ({ coffee, refetch }) => {
  const { _id, coffeeName, chef, coffeePic } = coffee;

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Are you sure that you want to delete it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#331A15",
      confirmButtonText: "Ok",
    }).then(async (result) => {
      try {
        if (result.isConfirmed) {
          const response = await axios.delete(
            `https://coffee-store-server-arnab-saha.vercel.app/coffees/${id}`
          );
          const { data } = response;
          if (data?.deletedCount) {
            Swal.fire({
              title: "Good Luck !!!",
              text: "Deleted coffee details.",
              icon: "success",
            });
            refetch();
          }
        }
      } catch {
        Swal.fire({
          title: "Failed",
          text: "Failed to delete coffee details, try again.",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-4 p-7 bg-[#F5F4F1] rounded-lg">
      <img
        className="object-cover max-w-[192.23px]"
        src={coffeePic || coffeeCup}
        alt="Coffee"
      />
      <div className="space-y-4 text-center lg:text-left text-[#5C5B5B] text-xl">
        <p>
          <span className="font-semibold text-[#1B1A1A]">Name: </span>{" "}
          {coffeeName || "Americano Coffee"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Chef: </span>{" "}
          {chef || "Mr. Matin Paul"}
        </p>
        <p>
          <span className="font-semibold text-[#1B1A1A]">Price: </span> 890 Taka
        </p>
      </div>
      <ul className="flex gap-4 lg:flex-col">
        <Link to={`coffeeDetails/${_id}`}>
          <li className="p-1 rounded-md bg-[#D2B48C]">
            <FaEye className="text-white" />
          </li>
        </Link>
        <li className="p-1 rounded-md bg-[#3C393B]">
          <IoPencil className="text-white" />
        </li>
        <li
          onClick={() => {
            handleDelete(_id);
          }}
          className="p-1 rounded-md bg-[#EA4744]"
        >
          <MdDelete className="text-white" />
        </li>
      </ul>
    </div>
  );
};

Product.propTypes = {
  coffee: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default Product;
