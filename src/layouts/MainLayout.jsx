import { Outlet } from "react-router-dom";
import Nav from "../components/common/Nav";
import Footer from "../components/common/Footer";

const MainLayout = () => {
  return (
    <main className="text-pretty">
      <Nav />
      <Outlet />
      <Footer />
    </main>
  );
};

export default MainLayout;
