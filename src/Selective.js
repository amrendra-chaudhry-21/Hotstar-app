import React, { useState, useEffect } from "react";
import "./Selective.css";
import { useSelector } from "react-redux";
import { selectOption } from "./features/optionSlice";
import { useParams } from "react-router";
import Banner from "./Banner";
import HotstarCard from "./HotstarCard";
import axios from "./axios";

function Selective() {
  const islarge = true;
  const { type } = useParams();
  const option = useSelector(selectOption);
  const [movies, setmovies] = useState([]);
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
      <Banner />
      <HotstarCard url={option} title="Latest Episode" />
      <HotstarCard url={option} title={type} islarge />

      <div className="selective">
        {movies.map((val, index) => {
          return (
            <img
              src={`${image_url}${
                islarge ? val.poster_path : val.backdrop_path
              }`}
              key={index}
              alt={val.name}
            />
          );
        })}
      </div>
    </>
  );
}
export default Selective;
