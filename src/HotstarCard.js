import React, { useState, useEffect } from "react";
import "./HotstarCard.css";
import axios from "./axios";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

function HotstarCard({ title, url, islarge }) {
  const [movies, setmovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  const image_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(url);
      setmovies(res.data.results);
    }
    fetchdata();
    settrailerUrl("");
  }, [url]);

  const opts = { height: "380px", width: "100%", playerVars: { autoplay: 1 } };

  const handleclick = (val) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(val?.title || " ")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          settrailerUrl(urlParams.get("v"));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <>
      <div className="hotstarcard">
        <h3> {title} </h3>
        <div className="hotstarcard__image">
          {movies.map((val, index) => {
            return (
              <img
                onClick={() => {
                  handleclick(val);
                }}
                src={`${image_url}${
                  islarge ? val.poster_path : val.backdrop_path
                }`}
                alt={val.name}
                key={index}
                className={!islarge && "hotstarcard__smallimage"}
              />
            );
          })}
        </div>

        {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default HotstarCard;
