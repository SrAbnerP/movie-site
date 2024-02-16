import { FunctionComponent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import { FaStar } from "react-icons/fa";

import "./MovieDetails.scss";
import formatCurrency from "../../utils/formatCurrency";

interface Movie {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
  budget: number;
  revenue: number;
  runtime: number;
  overview: string;
}

interface MovieDetailsProps {}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;
const imageUrl = import.meta.env.VITE_IMG;

const MovieDetails: FunctionComponent<MovieDetailsProps> = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();

  const getMovie = async (url: string) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${apiKey}`;

    getMovie(movieUrl);
  }, []);

  return (
    <div className="movie-details">
      {movie && (
        <div className="main-movie-details">
          <img src={imageUrl + movie.poster_path} alt={movie.title} />
          <div className="info-movie-details">
            <div className="title-movie-details">
              <h2>{movie.title}</h2>
              <h4>
                <FaStar />
                &nbsp;
                {movie.vote_average}
              </h4>
            </div>

            <h3>
              <BsGraphUp /> Orçamento:
            </h3>
            <p>{formatCurrency(movie.budget)}</p>

            <h3>
              <BsWallet2 /> Receita:
            </h3>
            <p>{formatCurrency(movie.revenue)}</p>

            <h3>
              <BsHourglassSplit /> Duração:
            </h3>
            <p>{movie.runtime}</p>

            <h3>
              <BsFillFileEarmarkTextFill /> Descrição:
            </h3>
            <p>{movie.overview}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieDetails;
