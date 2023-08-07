import Details from "./Details";
import SearchParams from "./SearchParams";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOption: {
    queries: {
      scaleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>
          <Link to="/" />
        </header>
        <Routes>
          <Route path="/details/:id" element={<Details />}></Route>
          <Route path="/" element={<SearchParams />} />
        </Routes>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

export default App;
