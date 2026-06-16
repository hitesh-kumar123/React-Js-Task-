import { Link, useNavigate, useParams } from "react-router-dom";
import { useCountry } from "../context/CountryContext";
import { IoArrowBackSharp } from "react-icons/io5";

export const CountryDetailsPage = () => {
  const { countryName } = useParams();
  const { countries } = useCountry();
  const navigate = useNavigate();

  const country = countries.find((item) => item.name.common === countryName);

  if (!country) {
    return <h2>Country Not Found</h2>;
  }

  return (
    <>
      <button onClick={() => navigate(-1)} className="backbtn">
        <IoArrowBackSharp />
      </button>

      <div className="details">
        <img src={country.flags.png} alt={country.name.common} />

        <h2>{country.name.common}</h2>

        <p>
          <strong>Code:</strong> {country.cca3}
        </p>

        <p>
          <strong>Region:</strong>{" "}
          <Link to={`/country-region/${country.region}`}>
            {" "}
            {country.region}
          </Link>
        </p>

        <p>
          <strong>Borders:</strong>{" "}
          {country.borders?.join(", ") || "No Borders"}
        </p>
      </div>
    </>
  );
};
