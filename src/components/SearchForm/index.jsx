import { QueryClient, useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Axios from "../../Axios";
import { useGlobalContext } from "../../context/AppProvider";

// const url = 'https://api.unsplash.com/search/photos/?client_id=SZs5aeh5tS8c_wBxEmKZXGkqycsjKvjNoIFILdOvPpo&query=person'
function SearchForm() {
  const { setSearchTerm } = useGlobalContext();
  const [searchValue, setSearchValue] = useState("");
  const queryClient = new QueryClient();

  // Mutations
  const mutation = useMutation({
    mutationFn: async (name) => {
      const response = await Axios.get(
        `/search/photos/?client_id=${
          import.meta.env.VITE_API_KEY
        }&query=${name}`
      );
      const data = await response.data;
      // console.log(data)

      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["gallery", searchValue] });
      // queryClient.setQueryData(['gallerys', mutation.data.results])
    },
  });
  // console.log(mutation);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchTerm(searchValue);
    mutation.mutate(searchValue);
  };

  return (
    <section className="form-container container">
      <h1>Unsplash images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          name={searchValue}
          id=""
          placeholder="cat"
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button className="btn btn-submit" type="submit">
          Search
        </button>
      </form>
    </section>
  );
}

export default SearchForm;
