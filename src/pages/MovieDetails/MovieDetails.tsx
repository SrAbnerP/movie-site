import { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import "./MovieDetails.scss";

interface MovieDetailsProps {}

const moviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const MovieDetails: FunctionComponent<MovieDetailsProps> = () => {
  return <div className="movie-details">MovieDatails</div>;
};

export default MovieDetails;
