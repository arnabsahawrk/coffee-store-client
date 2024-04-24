const FooterContact = () => {
  return (
    <div className="space-y-3 lg:space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
      <h1 className="text-3xl md:text-4xl lg:text-[45px] text-[#331A15]">
        Connect with Us
      </h1>
      <form className="space-y-2 lg:space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="bg-[#FFFFFF] rounded-md py-1 px-3 w-full focus:outline-[#E3B577]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="bg-[#FFFFFF] rounded-md py-1 px-3 w-full focus:outline-[#E3B577]"
        />
        <textarea
          name="message"
          rows={5}
          cols={5}
          placeholder="Message"
          className="bg-[#FFFFFF] rounded-md py-1 px-3 w-full focus:outline-[#E3B577]"
        />
        <button
          type="submit"
          className="border-2 border-[#331A15] rounded-full text-lg md:text-xl lg:text-2xl py-2 px-4"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default FooterContact;
