"use client";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoading, setisLoading] = useState(true);
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const response = await fetch(
      "https://nomad-movies.nomadcoders.workers.dev/movies"
    );
    const json = await response.json();
    setMovie(json);
    setisLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h1>{isLoading ? "Loading" : JSON.stringify(movie)}</h1>
    </div>
  );
}
