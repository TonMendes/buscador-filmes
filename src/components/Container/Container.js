import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MovieContext } from "../../Context/PhotoContext";
import Gallery from "../Gallery/Gallery";
import Loader from "../Loader/Loader";

function Container() {
  const { searchTerm } = useParams();
  const { movies, loading, searchMovies } = useContext(MovieContext);

  useEffect(() => {
    searchMovies(searchTerm);
  }, [searchTerm]);

  return <div>{loading ? <Loader /> : <Gallery data={movies} />}</div>;
}

export default Container;
