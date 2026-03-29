import { imgUrl } from "../../api/config";
import "./MovieCard.css";
import { useState } from "react";

function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);

  const url = movie.poster_path ? `${imgUrl}${movie.poster_path}` : null;

  return (
    <>
      <li className="movie-card" onClick={() => setShowModal(true)}>
        {url ? (
          <img src={url} alt={movie.title} />
        ) : (
          <div className="no-image">Sem imagem</div>
        )}
        <div className="movie-info">
          <p className="movie-title">{movie.title}</p>
          <span className="movie-rating">
            ⭐ {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </li>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {url && <img src={url} alt={movie.title} />}
            <div className="modal-info">
              <h2>{movie.title}</h2>
              <p className="modal-rating">⭐ {movie.vote_average.toFixed(1)}</p>
              <p className="modal-date">Lançamento: {movie.release_date}</p>
              <p className="modal-desc">
                {movie.overview || "Descrição não disponível."}
              </p>
              <button onClick={() => setShowModal(false)}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default MovieCard;
