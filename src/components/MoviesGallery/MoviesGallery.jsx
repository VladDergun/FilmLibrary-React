import { useLocation } from "react-router-dom";
import { memo } from "react";
import { MovieCard } from "../MovieCard/MovieCard";

export const MoviesGallery = memo(({ arr }) => {
  const location = useLocation();
  return (
    <>
      {arr.length > 0 && (
        <div className="main-content">
          {arr.map((item) => (
            <MovieCard 
              key={item.id} 
              item={item} 
              location={location}
            />
          ))}
        </div>
      )}
    </>
  );
});
