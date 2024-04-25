import axios from "axios";
import PropTypes from "prop-types";
import Swal from "sweetalert2";

const UpdateCoffeeForm = ({ coffee }) => {
  const { coffee: coffeeDetails } = coffee;
  const {
    _id: id,
    coffeeName,
    chef,
    supplier,
    taste,
    category,
    details,
    coffeePic,
  } = coffeeDetails;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const coffeeName = form.coffeeName.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const coffeePic = form.coffeePic.value;

    const coffee = {
      coffeeName,
      chef,
      supplier,
      taste,
      category,
      details,
      coffeePic,
    };

    try {
      const response = await axios.put(
        `https://coffee-store-server-arnab-saha.vercel.app/coffees/${id}`,
        coffee
      );
      const { data } = response;
      if (data?.modifiedCount) {
        Swal.fire({
          title: "Updated!",
          text: "Coffee details has been updated.",
          icon: "success",
        });
      }
    } catch {
      Swal.fire({
        title: "Failed",
        text: "Failed To update coffee details, try again",
        icon: "error",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">Name</label>
          <input
            defaultValue={coffeeName}
            type="text"
            name="coffeeName"
            placeholder="Enter coffee name"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">Chef</label>
          <input
            defaultValue={chef}
            type="text"
            name="chef"
            placeholder="Enter coffee chef"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">
            Supplier
          </label>
          <input
            defaultValue={supplier}
            type="text"
            name="supplier"
            placeholder="Enter coffee supplier"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">
            Taste
          </label>
          <input
            defaultValue={taste}
            type="text"
            name="taste"
            placeholder="Enter coffee taste"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">
            Category
          </label>
          <input
            defaultValue={category}
            type="text"
            name="category"
            placeholder="Enter coffee category"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
            required
          />
        </div>
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">
            Details
          </label>
          <input
            defaultValue={details}
            type="text"
            name="details"
            placeholder="Enter coffee details"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
            required
          />
        </div>
        <div className="space-y-2 col-auto md:col-span-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">
            Photo
          </label>
          <input
            defaultValue={coffeePic || ""}
            type="url"
            name="coffeePic"
            placeholder="Enter photo URL"
            className="bg-[#FFFFFF] rounded-md py-2 px-4 w-full focus:outline-[#E3B577]"
          />
        </div>
      </div>
      <button
        type="submit"
        className="border-2 border-[#331A15] bg-[#D2B48C] hover:bg-[#F5F4F1] rounded-md text-2xl text-[#331A15] hover:text-[#331A15] w-full py-2 mt-6"
      >
        Update Coffee Details
      </button>
    </form>
  );
};

UpdateCoffeeForm.propTypes = {
  coffee: PropTypes.object.isRequired,
};

export default UpdateCoffeeForm;
