import MovieCard from "../MovieCard/MovieCard";
import NoImage from "../NoImage/NoImage";
import "./Gallery.css";

function Gallery({ data }) {
  const results = data;

  return (
    <div className="gallery-container">
      <h2>Resultados</h2>
      {results.length > 0 ? (
        <ul>
          {results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </ul>
      ) : (
        <NoImage />
      )}
    </div>
  );
}

export default Gallery;
