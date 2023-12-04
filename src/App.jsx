import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Gallery from "./components/Gallery";
import SearchForm from "./components/SearchForm";
import Header from "./components/header";
import "./index.css";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Header />
        <SearchForm />
        <Gallery />
      </main>
    </QueryClientProvider>
  );
}

export default App;
