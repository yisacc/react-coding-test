import { useQuery, useQueryClient } from "@tanstack/react-query";
import fetchPets from "./fetchPets";
import { useEffect, useState } from "react";

const Pets = () => {
  const queryClient = useQueryClient();
  const [page, setPage] = useState(0);
  const { status, data, isPreviousData } = useQuery({
    queryKey: ["pets", page],
    queryFn: fetchPets,
    keepPreviousData: true,
  });
  useEffect(() => {
    if (!isPreviousData && data?.hasNext) {
      queryClient.prefetchQuery({
        queryKey: ["pets", page + 1],
        queryFn: fetchPets,
      });
    }
  }, [data?.hasNext, isPreviousData, page, queryClient]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {data?.pets?.map((pet) => (
        <p key={pet.id}>{pet.name}</p>
      ))}

      <button
        disabled={page === 0}
        onClick={() => {
          setPage((old) => old - 1);
        }}
      >
        Previous
      </button>
      <button
        disabled={isPreviousData || !data?.hasNext}
        onClick={() => {
          setPage((old) => (data?.hasNext ? old + 1 : old));
        }}
      >
        Next
      </button>
    </div>
  );
};
export default Pets;
