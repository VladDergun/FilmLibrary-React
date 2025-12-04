import { useState, useEffect, useRef } from "react";
import { fetchGenres } from "../../api/api";
import css from "./GenreDropdown.module.css";

export const GenreDropdown = ({ onGenreSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const loadGenres = async () => {
      try {
        setLoading(true);
        const genresData = await fetchGenres();
        setGenres(genresData);
      } catch (error) {
        console.error("Failed to fetch genres:", error);
      } finally {
        setLoading(false);
      }
    };

    if (isOpen && genres.length === 0) {
      loadGenres();
    }
  }, [isOpen, genres.length]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleGenreClick = (genre) => {
    onGenreSelect(genre);
    setIsOpen(false);
  };

  const calculateColumns = () => {
    if (genres.length <= 10) return 1;
    return Math.ceil(genres.length / 10);
  };

  const getGenreColumns = () => {
    const columns = calculateColumns();
    const itemsPerColumn = Math.ceil(genres.length / columns);
    const result = [];
    
    for (let i = 0; i < columns; i++) {
      const start = i * itemsPerColumn;
      const end = start + itemsPerColumn;
      result.push(genres.slice(start, end));
    }
    
    return result;
  };

  return (
    <div className={css.genreDropdown} ref={dropdownRef}>
      <button 
        className={css.genreButton}
        onClick={() => setIsOpen(!isOpen)}
      >
        Genres
        <svg className={css.arrowIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M6 9l6 6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      {isOpen && (
        <div className={css.dropdownContent}>
          {loading ? (
            <div className={css.loading}>Loading genres...</div>
          ) : (
            <div className={css.genreGrid} style={{ gridTemplateColumns: `repeat(${calculateColumns()}, 1fr)` }}>
              {getGenreColumns().map((column, columnIndex) => (
                <div key={columnIndex} className={css.genreColumn}>
                  {column.map((genre) => (
                    <button
                      key={genre.id}
                      className={css.genreItem}
                      onClick={() => handleGenreClick(genre)}
                    >
                      {genre.name}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
