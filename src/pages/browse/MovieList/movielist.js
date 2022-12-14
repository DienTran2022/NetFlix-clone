import React, { useState, useEffect } from "react";
import { imageSizePath } from "../../../data/link";
import MovieDetail from "../movieDetail/movieDetail";
import moviesStyle from "./movielist.module.css";
import useFetch from "../../../hooks/useFetch";

/// Tạo Component MovieList nhận 3 tham số đầu vào
const MovieList = ({ fetchUrl, title, isLarge }) => {
  const { movies, fetchMovies } = useFetch(fetchUrl);
  const [show, setShow] = useState(false);
  const [info, setInfo] = useState("");
  const [infoClick, setInfoClick] = useState("");
  useEffect(() => {
    async function fecthData() {
      await fetchMovies();
    }
    fecthData();
  }, [fetchMovies]);
  ////////////////////////////////////////////////
  /**
   * Hàm xử lý lấy data hiển thị infoMovie và logic hiển thị
   * @param {dữ liệu json} movie
   */
  const handleInfoMovie = (movie) => {
    setInfo(movie);

    if (infoClick === movie.name || infoClick === movie.original_title) {
      setShow(() => setShow(!show));
      setInfoClick("");
    } else {
      setInfoClick(movie.name || movie.original_title);
    }
  };

  return (
    <div>
      <h1 className={moviesStyle["title"]}>{title}</h1>
      <div className={moviesStyle["list"]}>
        {movies.map((item) => {
          return (
            <div className={moviesStyle["list-poster"]} key={item.id}>
              <img
                className={
                  isLarge
                    ? moviesStyle["list-img"]
                    : moviesStyle["list-img-large"]
                }
                onClick={() => handleInfoMovie(item)}
                src={`${imageSizePath}${
                  isLarge ? item.poster_path : item.backdrop_path
                }`}
                alt={item.name}
                key={item.id}
              />
            </div>
          );
        })}
      </div>
      {show && <MovieDetail data={info} />}
    </div>
  );
};

export default MovieList;
