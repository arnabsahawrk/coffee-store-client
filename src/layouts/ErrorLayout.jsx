import Footer from "../components/common/Footer";
import Nav from "../components/common/Nav";
import ErrorPage from "../pages/ErrorPage";

const ErrorLayout = () => {
  return (
    <main className="text-pretty">
      <Nav />
      <ErrorPage />
      <Footer />
    </main>
  );
};

export default ErrorLayout;
