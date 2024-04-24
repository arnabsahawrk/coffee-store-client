import cupOne from "../../assets/images/cups/Rectangle 9.png";
import cupTwo from "../../assets/images/cups/Rectangle 10.png";
import cupThree from "../../assets/images/cups/Rectangle 11.png";
import cupFour from "../../assets/images/cups/Rectangle 12.png";
import cupFive from "../../assets/images/cups/Rectangle 13.png";
import cupSix from "../../assets/images/cups/Rectangle 14.png";
import cupSeven from "../../assets/images/cups/Rectangle 15.png";
import cupEight from "../../assets/images/cups/Rectangle 16.png";

const ShowcaseInstagramPic = () => {
  return (
    <section>
      <div className="container mx-auto px-4 lg:px-[100px] py-10 text-center space-y-4">
        <p className="text-[#1B1A1A]">Follow Us Now</p>
        <h1 className="text-[#331A15] text-3xl md:text-4xl lg:text-[55px]">
          Follow on Instagram
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:pt-3">
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupThree}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupTwo}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupOne}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupFour}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupFive}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupSix}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupSeven}
            alt="Instagram Coffee Pic"
          />
          <img
            className="object-cover w-full h-[300px] rounded-xl"
            src={cupEight}
            alt="Instagram Coffee Pic"
          />
        </div>
      </div>
    </section>
  );
};

export default ShowcaseInstagramPic;
