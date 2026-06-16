import { Link } from "react-router-dom";

const CountryCard = ({ country }) => {
  return (
    <Link
      to={`/country/${country.name.common}`}
      className="card"
    >
      <img
        src={country.flags.png}
        alt={country.name.common}
      />

      <h3>{country.name.common}</h3>

      <p>
        <strong>Code:</strong> {country.cca3}
      </p>

      <p>
        <strong>Region:</strong> {country.region}
      </p>

      <p>
        <strong>Borders:</strong>{" "}
        {country.borders?.join(", ") || "No Borders"}
      </p>
    </Link>
  );
};

export default CountryCard;