import React, { useEffect, useState } from "react";
import "./Banner.css";
import { useParams } from "react-router";
import axios from "./axios";
import { selectOption } from "./features/optionSlice";
import { useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 

function Banner() {
  const [movies, setmovies] = useState([]);
  const islarge = true;
  const { type } = useParams();
  const option = useSelector(selectOption);
  const image_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchdata() {
      const res = await axios.get(option);
      setmovies(res.data.results);
    }

    fetchdata();
  }, [option]);

  return (
    <>
      <div className="banner">
        <Carousel>
          {movies.map((val, index) => {
            return (
              <div className="banner__main">
                <div className="banner__left">
                  <h3> {val.title} </h3>
                  {type ? (
                    <h4>
                      {type[0].toUpperCase()}
                      {type?.substr(1)}.{val.release_date.substr(0, 4)}{" "}
                    </h4>
                  ) : null}
                  <p> {val.overview.substr(0,200)}... </p>
                </div>
                <img
                  key={index}
                  alt={val.name}
                  src={`${image_url}${
                    islarge ? val.poster_path : val.backdrop_path
                  }`}
                />
              </div>
            );
          })}
        </Carousel>
      </div>
    </>
  );
}

export default Banner;