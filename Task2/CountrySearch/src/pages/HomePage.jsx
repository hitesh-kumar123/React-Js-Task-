import { useEffect, useState } from "react";
import {CountryList} from "../components/CountryList";
import { useCountry } from "../context/CountryContext";

export const HomePage = () => {
  const { countries, search, filter } = useCountry();
  const [currentPage, setCurrentPage] = useState(1);
  console.log(currentPage);
  console.log(setCurrentPage);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentPage(1);
  }, [search, filter]);

  const countriesPerPage = 10;

  const filteredCountries = countries.filter((country) => {
    const matchesSearch =
      country.name.common.toLowerCase().includes(search.toLowerCase()) ||
      country.region.toLowerCase().includes(search.toLowerCase()) ||
      country.cca3.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === ""
        ? true
        : filter === "independent"
          ? country.independent === true
          : country.independent === false;

    return matchesSearch && matchesFilter;
  });
  const lastIndex = currentPage * countriesPerPage;
  const firstIndex = lastIndex - countriesPerPage;

  const currentCountries = filteredCountries.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredCountries.length / countriesPerPage);

  return (
    <>
      <CountryList countries={currentCountries} />

      <div className="pagination">
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
};
