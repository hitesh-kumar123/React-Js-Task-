import { useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
import { CountryList } from "../components/CountryList";
import { IoArrowBackSharp } from "react-icons/io5";

export const CountryRegionPage = () => {
  const navigate = useNavigate();
  const { regionName } = useParams();
  const { countries } = useCountry();

  const regionCountries = countries.filter(
    (country) => country.region.toLowerCase() === regionName.toLowerCase(),
  );

  return (
    <>
      <div>
        <button onClick={() => navigate(-1)} className="backbtn">
          <IoArrowBackSharp />
        </button>
        <h1>{regionName} Countries</h1>
        <CountryList countries={regionCountries} />
      </div>
    </>
  );
};
