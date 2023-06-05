import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Beers from "./pets";
import AutoCompleteForm from "./autoCompleteForm";
import InfiniteScroll from "./infiniteScroll";
import Palindrome from "./palindrome";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        {/* <Beers />
        <AutoCompleteForm /> */}
        {/* <InfiniteScroll /> */}
        <Palindrome />
      </QueryClientProvider>
    </div>
  );
}

export default App;
