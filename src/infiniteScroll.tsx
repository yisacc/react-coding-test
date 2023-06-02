import { useInfiniteQuery } from "@tanstack/react-query";
import { useState } from "react";
import fetchTodos from "./fetchTodos";

const InfiniteScroll = () => {
  const [page, setPage] = useState(0);
  const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(["todos", page], fetchTodos, {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage =
          lastPage.length === 10 ? allPages.length + 1 : undefined;
        return nextPage;
      },
    });

  return (
    <div className="app">
      {isSuccess &&
        data.pages.map((page) =>
          page.map((todo, i) => (
            <article className="article">
              <h2>{todo.title}</h2>
              <p>Status: {todo.completed ? "Completed" : "To Complete"}</p>
            </article>
          ))
        )}
    </div>
  );
};
export default InfiniteScroll;
