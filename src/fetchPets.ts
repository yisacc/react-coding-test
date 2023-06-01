import { QueryFunction } from "@tanstack/react-query";
import { BeerApiResponse } from "./apiResponseTypes";

const fetchPets: QueryFunction<BeerApiResponse, ["pets", number]> = async ({
  queryKey,
}) => {
  const param = queryKey[1];

  const apiRes = await fetch(`http://pets-v2.dev-apis.com/pets?page=${param}`);

  if (!apiRes.ok) {
    throw new Error("beers fetch not ok");
  }

  return apiRes.json();
};
export default fetchPets;
