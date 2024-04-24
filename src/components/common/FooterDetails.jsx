import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaSquareXTwitter,
} from "react-icons/fa6";
import logo from "../../assets/images/more/logo1.png";
import { FaPhoneAlt } from "react-icons/fa";
const FooterDetails = () => {
  return (
    <div className="space-y-3 lg:space-y-4 flex flex-col items-center lg:items-start text-center lg:text-left">
      <img
        className="w-[45px] md:w-[51px] lg:w-[75px] h-[60px] md:h-[66px] lg:h-[90px] object-cover"
        src={logo}
        alt="Espresso Emporium"
      />
      <h1 className="text-3xl md:text-4xl lg:text-[45px] text-[#331A15]">
        Espresso Emporium
      </h1>
      <p className="text-lg lg:text-xl text-[#1B1A1A] max-w-[663px]">
        Always ready to be your friend. Come & Contact with us to share your
        memorable moments, to share with your best companion.
      </p>
      <ul className="text-[#331A15] text-3xl flex gap-2 items-center">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaSquareXTwitter />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <ul className="space-y-2 lg:space-y-4 flex flex-col items-center lg:items-start">
        <li className="text-3xl md:text-4xl lg:text-[45px] text-[#331A15]">
          Get in Touch
        </li>
        <li className="flex items-center gap-2 text-lg lg:text-xl">
          <FaPhoneAlt className="text-[#331A15]" />
          <span className="text-[#1B1A1A]">+88 015178 24 769</span>
        </li>
        <li className="flex items-center gap-2 text-lg lg:text-xl">
          <FaEnvelope className="text-[#331A15]" />
          <span className="text-[#1B1A1A]">info@gmail.com</span>
        </li>
        <li className="flex items-center gap-2 text-lg lg:text-xl">
          <FaLocationDot className="text-[#331A15]" />
          <span className="text-[#1B1A1A]">
            72, Wall street, King Road, Dhaka
          </span>
        </li>
      </ul>
    </div>
  );
};

export default FooterDetails;
