import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import errorIMG from "../assets/images/404/404.gif";

const ErrorPage = () => {
  return (
    <section className="container mx-auto px-4 pt-10">
      <div className="flex flex-col items-center justify-center">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] text-3xl"
        >
          <FaArrowLeftLong className="text-[#331A15]" /> Back to home
        </Link>
        <img className="object-cover" src={errorIMG} alt="404" />
      </div>
    </section>
  );
};

export default ErrorPage;
