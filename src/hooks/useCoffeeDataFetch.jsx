import axios from "axios";
import { useEffect, useState } from "react";

const useCoffeeDataFetch = () => {
  const [coffees, setCoffees] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [toggle, setToggle] = useState(false);

  const fetchCoffees = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        "https://coffee-store-server-arnab-saha.vercel.app/coffees"
      );
      const { data } = response;
      setCoffees(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Fetch to coffees data.", err);
    }
  };

  const refetch = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    fetchCoffees();
  }, [toggle]);

  return { coffees, isLoading, refetch };
};

export default useCoffeeDataFetch;
