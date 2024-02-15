import { FunctionComponent, useEffect, useState } from "react";

import MovieCard from "../../components/MovieCard/MovieCard";

import "./Home.scss";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
}

interface HomeProps {}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home: FunctionComponent<HomeProps> = () => {
  const [topMovies, setTopMovies] = useState<Movie[]>([]);

  const getTopRatedMovies = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="home">
      {topMovies &&
        topMovies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
    </div>
  );
};

export default Home;
