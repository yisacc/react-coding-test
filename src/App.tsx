import "./App.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Beers from "./pets";
import AutoCompleteForm from "./autoCompleteForm";
import InfiniteScroll from "./infiniteScroll";
import Palindrome from "./palindrome";
import Countries from "./countries";
import FiveTimes from "./fiveClicks";
import DebounceAndThrottle from "./debounceAndThroattle";
import Ticker from "./ticker";

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
        {/* <Palindrome /> */}
        {/* <Countries /> */}
        {/* <FiveTimes /> */}
        {/* <DebounceAndThrottle /> */}
        {/* <Ticker /> */}
      </QueryClientProvider>
    </div>
  );
}

export default App;
