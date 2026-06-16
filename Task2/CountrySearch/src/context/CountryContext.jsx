import { createContext, useContext, useEffect, useState } from "react";
import { getCountries } from "../api/countriesApi";

const CountryContext = createContext();

export const CountryProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  async function fetchCountries() {
    try {
      const data = await getCountries();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <CountryContext.Provider
      value={{
        countries,
        search,
        setSearch,
        filter,
        setFilter,
      }}
    >
      {children}
    </CountryContext.Provider>
  );
};

export const useCountry = () => useContext(CountryContext);
