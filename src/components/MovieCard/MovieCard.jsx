import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { memo } from "react";

export const MovieCard = memo(({ item, location }) => {
  const starCount = Math.floor(item.vote_average / 2);
  const imageUrl = `https://image.tmdb.org/t/p/w500${item.poster_path}`;
  
  return (
    <div className="film-box">
      <Link to={`/movies/${item.id}`} state={location}>
        <div className="film-inner">
          <div className="star-container">
            {Array.from({ length: starCount }).map((_, index) => (
              <FaStar key={index} size={28} className="star" />
            ))}
          </div>

          <div className="film-img">
            <img
              className="film-img"
              src={imageUrl}
              alt={item.title}
              width={200}
              height={250}
              loading="lazy"
            />
            <p className="film-name">{item.title}</p>
          </div>
          <div className="film-details"></div>
        </div>
      </Link>
    </div>
  );
});
