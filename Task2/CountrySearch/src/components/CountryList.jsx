import CountryCard from "./CountryCard";

export const CountryList = ({ countries }) => {
  return (
    <>
      <div className="grid">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};


