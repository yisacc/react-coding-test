import { useQuery } from "@tanstack/react-query";
import fetchCountries from "./fetchCountries";

const Countries = () => {
  const { data, status } = useQuery(
    ["countries", { name: "yisacc", region: "addis", area: "ethiopia" }],
    fetchCountries
  );

  if (status === "loading") {
    return <div>loading...</div>;
  }
  return (
    <div>
      {data?.map((country, index) => (
        <h1 key={index}>{country.name}</h1>
      ))}
    </div>
  );
};

export default Countries;
