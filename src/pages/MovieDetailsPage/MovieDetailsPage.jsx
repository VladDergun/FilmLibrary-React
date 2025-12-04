import { Link, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails, fetchCast, fetchReviews } from "../../api/api";
import { useEffect, useState, useRef } from "react";
import { Header } from "../../components/Header/Header";
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";
import { CastSection } from "../../components/CastSection/CastSection";
import { ReviewsSection } from "../../components/ReviewsSection/ReviewsSection";
import { Footer } from "../../components/Footer/Footer";
import css from "./MovieDetailsPage.module.css";
import { Loader } from "../../components/Loader/Loader";
import moment from "moment";

export default function MovieDetailsPage() {
  const location = useLocation();

  const BackLinkRef = useRef(location.state);
  const [error, setError] = useState(false);
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(true);

  const { movieId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const [movieData, castData, reviewsData] = await Promise.all([
          fetchMovieDetails(movieId),
          fetchCast(movieId),
          fetchReviews(movieId)
        ]);
        
        setMovie(movieData);
        setCast(castData.cast || []);
        setReviews(reviewsData || []);
        const releaseDate = moment(movieData.release_date).format("YYYY");
        setDate(releaseDate);
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  if (loading) {
    return (
      <>
        <Header />
        <Loader />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      {movie && (
        <>
          {movie.backdrop_path ? (
            <div 
              className={css.backdrop}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
              }}
            >
              <div className={css.backdropOverlay}></div>
              <Link to={BackLinkRef.current ?? "/movies"}>
                <button className={css.btn_}>Go back</button>
              </Link>
            </div>
          ) : (
            <Link to={BackLinkRef.current ?? "/movies"}>
              <button className={css.btn_noBackdrop}>Go back</button>
            </Link>
          )}
          
          <h1 className={css.trendText}>
            {movie.title} ({date})
          </h1>

          <div className={css.mainContent}>
            <div className={css.topSection}>
              <img
                className={css.img}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {error && (
                <p style={{ color: "red" }}>
                  Ooooops... Try reloading the page
                </p>
              )}
              <MovieInfo movie={movie} />
            </div>

            <CastSection cast={cast} />
            <ReviewsSection reviews={reviews} />
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
