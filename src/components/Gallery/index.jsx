import { useQuery } from "@tanstack/react-query";
import { MoonLoader } from "react-spinners";
import Axios from "../../Axios";
import { useGlobalContext } from "../../context/AppProvider";
import ImageItem from "./ImageItem";

function Gallery() {
  const { searchTerm } = useGlobalContext();

  // Queries
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["gallery", searchTerm],
    queryFn: async () => {
      const response = await Axios.get(
        `/search/photos/?client_id=SZs5aeh5tS8c_wBxEmKZXGkqycsjKvjNoIFILdOvPpo&query=${
          !searchTerm ? '""' : searchTerm
        }`
      );
      // console.log(response)
      const data = response.data.results;

      return data;
    },
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
    <section className="gallery">
      {data.map((item) => {
        return <ImageItem key={item.id} item={item} />;
      })}
    </section>
  );
}

export default Gallery;
