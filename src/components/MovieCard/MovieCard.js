import { imgUrl } from "../../api/config";
import "./MovieCard.css";

function MovieCard({ movie }) {
  const url = movie.poster_path ? `${imgUrl}${movie.poster_path}` : null;

  return (
    <li className="movie-card">
      {url ? (
        <img src={url} alt={movie.title} />
      ) : (
        <div className="no-image">Sem imagem</div>
      )}
      <p>{movie.title}</p>
    </li>
  );
}

export default MovieCard;
