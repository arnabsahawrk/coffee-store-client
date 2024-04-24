import footerBg1 from "../../assets/images/more/13.jpg";
import footerBg2 from "../../assets/images/more/24.jpg";
import FooterDetails from "./FooterDetails";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <footer>
      <section
        style={{ backgroundImage: `url(${footerBg1})` }}
        className="bg-no-repeat bg-center bg-cover pt-10 pb-5 bg-[#f6f6f6] bg-opacity-50"
      >
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-between items-center gap-4 py-2 lg:px-[100px]">
          <FooterDetails />
          <FooterContact />
        </div>
      </section>
      <section
        style={{ backgroundImage: `url(${footerBg2})` }}
        className="bg-no-repeat bg-center bg-cover"
      >
        <p className="text-lg lg:text-xl text-white py-2 text-center">
          Copyright Espresso Emporium ! All Rights Reserved
        </p>
      </section>
    </footer>
  );
};

export default Footer;
