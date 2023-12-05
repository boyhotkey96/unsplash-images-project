import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import "./index.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
      <main>
        <Header />
        <SearchForm />
        <Gallery />
      </main>
    </QueryClientProvider>
  );
}

export default App;
