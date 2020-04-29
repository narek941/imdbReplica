import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import { useSelector } from "react-redux";
import { selectWatchlistItems } from "../../redux/watchlist/watchlist.selectors";

import { getSingleDecimalValue } from "../../redux/movies/movies.utils";
import WatchlistBtn from "../watchlist-btn/watchlist-btn.component";

const NowPlayingItem = ({ collectionItem, width }) => {
  const {
    backdrop_path,
    title,
    vote_average,
    poster_path,
    id,
  } = collectionItem;

  const watchlistItems = useSelector(selectWatchlistItems);
  const item = watchlistItems.filter((item) => item.id === id);
  const selected = !!item & item.length ? item[0].selected : null;

  return (
    <div className="carousel-images">
      <div className="poster-img-container">
        <img
          className="d-block w-100 carousel-img poster-img"
          src={`https://image.tmdb.org/t/p/${
            width > 500 ? "w342" : "w154"
          }${poster_path}`}
          alt={title}
        />
      </div>

      <div className="backdrop-img-container">
        <div className="backdrop-img">
          <img
            className="d-block w-100 carousel-img"
            src={`https://image.tmdb.org/t/p/${width > 500 ? "w780" : "w500"}${
              backdrop_path || poster_path
            }`}
            alt={title}
          />
        </div>
        <div className="backdrop-caption">
          <h1>{title}</h1>
          <div className="info">
            <div className="rating">
              <span>{getSingleDecimalValue(vote_average)}</span>
              <FontAwesomeIcon icon={faStar} size="sm" />
            </div>
            <WatchlistBtn collectionItem={collectionItem} selected={selected} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NowPlayingItem;
