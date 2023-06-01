import React from 'react';
import logo from './logo.svg';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Beers from './pets';


const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:Infinity,
      cacheTime:Infinity,
    }
  }
})
function App() {
  return (
    <div className="App">
<QueryClientProvider client={queryClient}>
<Beers />
</QueryClientProvider>
    </div>
  );
}

export default App;
