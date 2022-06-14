import React, { useState } from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import { Search } from "@material-ui/icons";
import { Avatar } from "@material-ui/core";
import { Menu, MenuItem } from "@material-ui/core";
import { Link } from "react-router-dom";
import requests from "./requests";
import { setOption } from "./features/optionSlice";
import { useDispatch } from "react-redux";

function Header() {
  const [anchorE1, setAnchorE1] = useState(null);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    setAnchorE1(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorE1(null);
  };

  return (
    <>
      <div className="header">
        <div className="header__left">
          <MenuIcon />
          <Link to="/" className="header__logo">
            <img
              src="https://secure-media.hotstarext.com/web-assets/prod/images/brand-logos/disney-hotstar-logo-dark.svg"
              alt="hotstar logo"
            />
          </Link>
          <Link
            to="/tv"
            onClick={() => {
              dispatch(setOption(requests.fetchTv));
            }}
          >
            TV
          </Link>
          <Link
            to="/movies"
            onClick={() => {
              dispatch(setOption(requests.fetchActionMovies));
            }}
          >
            Movies
          </Link>
          <Link
            to="/sports"
            onClick={() => {
              dispatch(setOption(requests.fetchSciFi));
            }}
          >
            Sports
          </Link>
          <Link
            to="/news"
            onClick={() => {
              dispatch(setOption(requests.fetchMystery));
            }}
          >
            News
          </Link>
          <Link
            to="/premium"
            onClick={() => {
              dispatch(setOption(requests.fetchAnimation));
            }}
          >
            Premium
          </Link>
          <Link
            to="/disney"
            onClick={() => {
              dispatch(setOption(requests.fetchHorrorMovies));
            }}
          >
            Disney
          </Link>
        </div>

        <div className="header__right">
          <div className="header__input">
            <input type="text" placeholder="search" />
            <Search />
          </div>
          <p>UPGRADE</p>
          <Avatar
            onMouseOver={handleClick}
            className="header__avatar"
            src="https://lh3.googleusercontent.com/ogw/ADea4I4vDLz64qTDwhTTulpSyICe3La-CpHEF3RcFkMnFw=s64-c-mo"
          >
            {" "}
          </Avatar>

          <Menu
            id="simple-menu"
            anchorEl={anchorE1}
            keepmounted
            open={Boolean(anchorE1)}
            onClose={handleClose}
            PaperProps={{
              style: {
                background: "#192133",
                color: "white",
              },
            }}
          >
            <MenuItem className="header__menuitem"> Watchlist </MenuItem>
            <MenuItem className="header__menuitem"> My account </MenuItem>
          </Menu>
        </div>
      </div>
    </>
  );
}

export default Header;
