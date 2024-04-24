import homeBanner from "../../assets/images/more/3.png";

const HomeBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${homeBanner})` }}
      className="bg-no-repeat bg-center bg-cover h-[350px] md:h-[500px] lg:h-[600px]"
    >
      <div className="container mx-auto px-4 h-full flex justify-center lg:justify-end items-center">
        <div className="space-y-4 lg:mr-[100px] text-center lg:text-left">
          <h1 className="text-white text-3xl md:text-4xl lg:text-[55px]">
            Would you like a Cup of Delicious Coffee?
          </h1>
          <p className="text-white max-w-[663px]">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of every moment!!! Enjoy the
            beautiful moments and make them memorable.
          </p>
          <button className="text-[#242222] bg-[#E3B577] border border-[#E3B577] hover:bg-transparent hover:text-white hover:border-white text-lg md:text-xl lg:text-2xl py-1 px-4">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
