import { createContext, useState } from "react";
import axios from "axios";
import { apiKey, apiUrl } from "../api/config";
const MovieContext = createContext();

function MovieProvider({ children }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  async function searchMovies(query) {
    setLoading(true);
    try {
      const response = await axios.get(
        `${apiUrl}/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`,
      );
      setMovies(response.data.results);
    } catch (error) {
      console.log("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MovieContext.Provider value={{ movies, loading, searchMovies }}>
      {children}
    </MovieContext.Provider>
  );
}

export { MovieContext, MovieProvider };
