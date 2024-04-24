import coffeeCup from "../../assets/images/icons/1.png";
import sticker from "../../assets/images/icons/2.png";
import coffeeSeed from "../../assets/images/icons/3.png";
import coffeePaperCup from "../../assets/images/icons/4.png";

const ShowcaseBanner = () => {
  return (
    <section className="bg-[#ECEAE3] py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-6 lg:px-[100px]">
        <div className="gap-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <img
            className="size-[70px] object-cover"
            src={coffeeCup}
            alt="Coffee Cup"
          />
          <h2 className="text-[#331A15] text-2xl md:text-3xl lg:text-[35px]">
            Awesome Aroma
          </h2>
          <p className="text-[#1B1A1A] max-w-[300px]">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>
        <div className="gap-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <img
            className="size-[70px] object-cover"
            src={sticker}
            alt="Sticker"
          />
          <h2 className="text-[#331A15] text-2xl md:text-3xl lg:text-[35px]">
            High Quality
          </h2>
          <p className="text-[#1B1A1A] max-w-[300px]">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="gap-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <img
            className="size-[70px] object-cover"
            src={coffeeSeed}
            alt="Coffee Seed"
          />
          <h2 className="text-[#331A15] text-2xl md:text-3xl lg:text-[35px]">
            Pure Grades
          </h2>
          <p className="text-[#1B1A1A] max-w-[300px]">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="gap-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
          <img
            className="size-[70px] object-cover"
            src={coffeePaperCup}
            alt="Coffee Paper Cup"
          />
          <h2 className="text-[#331A15] text-2xl md:text-3xl lg:text-[35px]">
            Proper Roasting
          </h2>
          <p className="text-[#1B1A1A] max-w-[300px]">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </section>
  );
};

export default ShowcaseBanner;
