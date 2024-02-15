import { FunctionComponent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../../components/MovieCard/MovieCard";

import "./Search.scss";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface SearchProps {}

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search: FunctionComponent<SearchProps> = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState<Movie[]>([]);
  const query = searchParams.get("q");

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryURL = `${searchUrl}?${apiKey}&query=${query}`;

    getTopRatedMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div>
      <h2>
        {movies.length != 0 && (
          <p>
            Resultados para: <span>{query}</span>
          </p>
        )}
      </h2>
      <div className="search-content">
        {movies.length === 0 && <p>Não ha resultados para esta pesquisa</p>}
        {movies &&
          movies.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
      </div>
    </div>
  );
};

export default Search;
