import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomePage from "../pages/HomePage";
import AddCoffeePage from "../pages/AddCoffeePage";
import CoffeeDetailsPage from "../pages/CoffeeDetailsPage";
import axios from "axios";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffeePage />,
      },
      {
        path: "/coffeeDetails/:id",
        element: <CoffeeDetailsPage />,
        loader: ({ params }) =>
          axios.get(
            `https://coffee-store-server-arnab-saha.vercel.app/coffees/${params.id}`
          ),
      },
      {
        path: "/updateCoffee/:id",
        element: <UpdateCoffeePage />,
        loader: ({ params }) =>
          axios.get(
            `https://coffee-store-server-arnab-saha.vercel.app/coffees/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
