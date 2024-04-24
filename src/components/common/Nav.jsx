import logo from "../../assets/images/more/logo1.png";
import navBg from "../../assets/images/more/15.jpg";
const Nav = () => {
  return (
    <nav
      style={{ backgroundImage: `url(${navBg})` }}
      className="bg-no-repeat bg-center bg-cover"
    >
      <h1 className="text-white text-3xl md:text-4xl lg:text-6xl flex items-center gap-2 justify-center py-2">
        <img
          className="w-[45px] md:w-[51px] lg:w-[75px] h-[60px] md:h-[66px] lg:h-[90px] object-cover"
          src={logo}
          alt="Espresso Emporium"
        />
        Espresso Emporium
      </h1>
    </nav>
  );
};

export default Nav;
