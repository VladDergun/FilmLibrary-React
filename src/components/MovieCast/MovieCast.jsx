import { useEffect, useState } from "react";
import { fetchCast } from "../../api/api";
import { useParams } from "react-router-dom";

import css from "./MovieCast.module.css";
import placeholderImage from "../../../person-placeholder.jpg";

export default function MovieCast() {
  const { movieId } = useParams();
  const [error, setError] = useState(false);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedCast = await fetchCast(movieId);
        setCast(fetchedCast.cast);
      } catch (error) {
        setError(true);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <>
      {error && <p className={css.error}>Ooooops... Try reloading the page</p>}
      <div className={css.wrapper}>
        {cast.map((item) => (
          <div className={css.box} key={item.id}>
            <img
              className={css.image}
              src={
                item.profile_path
                  ? `https://image.tmdb.org/t/p/w500${item.profile_path}`
                  : placeholderImage
              }
              alt={item.name}
              width={160}
              height={200}
            />
            <div className={css.tbox}>
              <p className={css.text}>{item.name}</p>
              <p className={css.text}>({item.character})</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
