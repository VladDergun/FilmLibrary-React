import css from "./MovieInfo.module.css";

export const MovieInfo = ({ movie }) => {
  return (
    <div className={css.movieInfo}>
      {movie.tagline && (
        <p className={css.tagline}>"{movie.tagline}"</p>
      )}
      <p className={css.text}>{movie.overview}</p>
      
      <div className={css.infoGrid}>
        <div className={css.infoItem}>
          <span className={css.infoLabel}>User Score:</span>
          <span className={css.infoValue}>
            {Math.round(movie.vote_average * 10)}% ({movie.vote_count} votes)
          </span>
        </div>
        
        {movie.runtime > 0 && (
          <div className={css.infoItem}>
            <span className={css.infoLabel}>Runtime:</span>
            <span className={css.infoValue}>
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </span>
          </div>
        )}
        
        <div className={css.infoItem}>
          <span className={css.infoLabel}>Status:</span>
          <span className={css.infoValue}>{movie.status}</span>
        </div>
        
        {movie.budget > 0 && (
          <div className={css.infoItem}>
            <span className={css.infoLabel}>Budget:</span>
            <span className={css.infoValue}>${movie.budget.toLocaleString()}</span>
          </div>
        )}
        
        {movie.revenue > 0 && (
          <div className={css.infoItem}>
            <span className={css.infoLabel}>Revenue:</span>
            <span className={css.infoValue}>${movie.revenue.toLocaleString()}</span>
          </div>
        )}
      </div>

      <h2 className={css.h2}>Genres</h2>
      <div className={css.genreList}>
        {movie.genres.map((item) => (
          <span className={css.genre} key={item.id}>
            {item.name}
          </span>
        ))}
      </div>
      
      {movie.spoken_languages && movie.spoken_languages.length > 0 && (
        <>
          <h2 className={css.h2}>Languages</h2>
          <div className={css.languageList}>
            {movie.spoken_languages.map((lang) => (
              <span className={css.language} key={lang.iso_639_1}>
                {lang.english_name}
              </span>
            ))}
          </div>
        </>
      )}
      
      {movie.production_companies && movie.production_companies.length > 0 && (
        <>
          <h2 className={css.h2}>Production Companies</h2>
          <div className={css.companyList}>
            {movie.production_companies.map((company) => (
              <div className={css.company} key={company.id}>
                {company.logo_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w92${company.logo_path}`}
                    alt={company.name}
                    className={css.companyLogo}
                  />
                ) : (
                  <span className={css.companyName}>{company.name}</span>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};
