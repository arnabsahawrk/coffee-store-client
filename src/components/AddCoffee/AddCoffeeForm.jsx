const AddCoffeeForm = () => {
  const handleSubmit = (e) => {
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

    console.log(coffee);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label className="text-xl text-[#1B1A1ACC] font-semibold">Name</label>
          <input
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
        Add Coffee
      </button>
    </form>
  );
};

export default AddCoffeeForm;
