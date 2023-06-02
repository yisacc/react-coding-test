import { QueryFunction } from "@tanstack/react-query";
import { Todo } from "./apiResponseTypes";

const fetchTodos: QueryFunction<Todo[], ["todos", number]> = async ({
  queryKey,
}) => {
  const page = queryKey[1];
  const limit = 10;
  const apiRes = await fetch(
    `https://jsonplaceholder.typicode.com/todos?_page=${page}&_limit=${limit}`
  );

  if (!apiRes.ok) {
    throw new Error("fetch todos not working correctly");
  }

  return apiRes.json();
};

export default fetchTodos;
