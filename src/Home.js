import React from "react";
import requests from "./requests";
import "./Home.css";
import Banner from "./Banner";
import HotstarCard from "./HotstarCard";

function Home() {
  return (
    <>
      <Banner />
      <div className="home">
        <div className="home__action">
          <HotstarCard
            title="Top Rated Movies"
            url={requests.fetchTopRated}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard
            title="Top Action Movies"
            url={requests.fetchActionMovies}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard
            title="Top Sci-Fi Movies"
            url={requests.fetchSciFi}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard
            title="Top Horror Movies"
            url={requests.fetchHorrorMovies}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard
            title="Top Animation Movies"
            url={requests.fetchAnimation}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard
            title="Top Comedy Movies"
            url={requests.fetchComedyMovies}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard
            title="Top Mystery Movies"
            url={requests.fetchMystery}
            islarge
          />
        </div>
        <div className="home__action">
          <HotstarCard title="Top Tv" url={requests.fetchTv} islarge />
        </div>
      </div>
    </>
  );
}

export default Home;
