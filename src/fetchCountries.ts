import { QueryFunction } from "@tanstack/react-query";
import { Country } from "./apiResponseTypes";

const fetchCountries: QueryFunction<
  Country[],
  ["countries", { name: string; area: string; region: string }]
> = async ({ queryKey }) => {
  const apiRes = await fetch(
    "https://restcountries.com/v2/all?fields=name,region,area"
  );
  if (!apiRes.ok) {
    throw new Error("fetch countries have error");
  }

  return apiRes.json();
};

export default fetchCountries;
