import { useCountry } from "../context/CountryContext";

export const Header = () => {
  const { search, setSearch, filter, setFilter } = useCountry();

  return (
    <header className="header">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option value="">All</option>
        <option value="independent">Independent</option>
        <option value="dependent">Dependent</option>
      </select>
    </header>
  );
};
