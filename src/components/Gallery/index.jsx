import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import Axios from "../../Axios";
import { useGlobalContext } from "../../context/AppProvider";
import ImageItem from "./ImageItem";

function Gallery() {
  const { searchTerm } = useGlobalContext();
  // console.log(import.meta.env.VITE_API_KEY)

  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["gallery", searchTerm],
    queryFn: async () => {
      const response = await Axios.get(
        `/search/photos/?client_id=${import.meta.env.VITE_API_KEY}&query=${
          !searchTerm ? '""' : searchTerm
        }&per_page=14`
      );
      // console.log(response)
      const data = response.data.results;

      return data;
    },
    // gcTime: 10 * 1000, // v4: cacheTime
  });

  if (isPending)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "7rem" }}
      >
        <MoonLoader color="#36d7b7" />
      </div>
    );

  if (isError) return <>{error.message}</>;

  return (
    <section className="gallery container">
      {data.map((item) => {
        return <ImageItem key={item.id} item={item} />;
      })}
    </section>
  );
}

export default Gallery;
