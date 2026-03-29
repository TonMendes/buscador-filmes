import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../Context/PhotoContext";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";

const categoryNames = {
  popular: "Populares",
  now_playing: "Em Cartaz",
  top_rated: "Mais Votados",
  upcoming: "Lançamentos",
};
function CategoryContainer() {
  const { category } = useParams();
  const { movies, loading, getByCategory } = useContext(MovieContext);

  useEffect(() => {
    getByCategory(category);
  }, [category]);
  return <div> {loading ? <Loader /> : <Gallery data={movies} />}</div>;
}
export default CategoryContainer;
