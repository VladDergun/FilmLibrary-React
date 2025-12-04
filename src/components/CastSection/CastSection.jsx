import { useRef, useState, useEffect } from "react";
import css from "./CastSection.module.css";
import placeholderImage from "../../../person-placeholder.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const CastSection = ({ cast }) => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollPosition();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollPosition);
      window.addEventListener("resize", checkScrollPosition);
      return () => {
        scrollElement.removeEventListener("scroll", checkScrollPosition);
        window.removeEventListener("resize", checkScrollPosition);
      };
    }
  }, [cast]);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  if (cast.length === 0) {
    return (
      <div className={css.section}>
        <h2 className={css.sectionTitle}>Cast</h2>
        <p className={css.noData}>No cast information available</p>
      </div>
    );
  }

  return (
    <div className={css.section}>
      <h2 className={css.sectionTitle}>Cast</h2>
      <div className={css.castContainer}>
        {showLeftArrow && (
          <button
            className={`${css.arrowLeft} ${css.arrowContainer}`}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <FaChevronLeft />
          </button>
        )}
        <div className={css.castGrid} ref={scrollRef}>
          {cast.slice(0, 12).map((actor) => (
            <div className={css.castCard} key={actor.id}>
              <img
                className={css.castImage}
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w185${actor.profile_path}`
                    : placeholderImage
                }
                alt={actor.name}
              />
              <div className={css.castInfo}>
                <p className={css.castName}>{actor.name}</p>
                <p className={css.castCharacter}>{actor.character}</p>
              </div>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button
            className={`${css.arrowRight} ${css.arrowContainer}`}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};
