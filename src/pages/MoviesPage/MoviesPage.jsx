import { Header } from "../../components/Header/Header";
import { fetchMovies, discoverMovies, discoverMoviesByGenres } from "../../api/api";
import { MoviesGallery } from "../../components/MoviesGallery/MoviesGallery";
import toast, { Toaster } from "react-hot-toast";
import css from "./MoviesPage.module.css";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { Footer } from "../../components/Footer/Footer";
import { GenreDropdown } from "../../components/GenreDropdown/GenreDropdown";

export default function MoviesPage() {
  const [params, setParams] = useSearchParams();
  const filter = params.get("filter") ?? "";
  const [query, setQuery] = useState(filter);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [showMoreBtn, setShowMoreBtn] = useState(true);
  const [page, setPage] = useState(1);

  const [selectedGenreId, setSelectedGenreId] = useState(null);

  const [data, setData] = useState({
    items: [],
    loading: false,
    error: false,
  });

  function handleSubmit(event) {
    event.preventDefault();
    const searchValue = event.target.elements.query.value.trim();

    if (searchValue === "") {
      toast.error("Empty string!");
      return;
    }

    setPage(1);
    setData({
      items: [],
      loading: false,
      error: false,
    });

    params.set("filter", searchValue);
    setParams(params);
  }
  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    const filterParam = params.get("filter");
    const genreIdParam = params.get("genreId");

    if (filterParam && filterParam !== query) {
      setQuery(filterParam);
      setSelectedGenreId(null);
      setPage(1);
      setData({ items: [], loading: false, error: false });
    } else if (genreIdParam && genreIdParam !== selectedGenreId) {
      setSelectedGenreId(genreIdParam);
      setQuery("");
      setPage(1);
      setData({ items: [], loading: false, error: false });
    }
  }, [params, query, selectedGenreId]);
  useEffect(() => {
    async function fetchData() {
      try {
        setData((prev) => ({ ...prev, loading: true, error: false }));

        let response;
        if (selectedGenreId) {
          response = await discoverMoviesByGenres(selectedGenreId, page);
        } else if (query === "") {
          response = await discoverMovies(page);
        } else {
          response = await fetchMovies(query, page);
        }

        setData((prev) => {
          const existingIds = new Set(prev.items.map(item => item.id));
          const newItems = response.results.filter(item => !existingIds.has(item.id));
          return { ...prev, items: [...prev.items, ...newItems] };
        });
        setShowMoreBtn(true);
        if (page >= response.total_pages) {
          setShowMoreBtn(false);
        }
      } catch (error) {
        setData((prev) => {
          return { ...prev, error: true };
        });
      } finally {
        setData((prev) => {
          return { ...prev, loading: false };
        });
      }
    }

    fetchData();
  }, [query, selectedGenreId, page]);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 400) {
        setShowScrollBtn(true);
      } else {
        setShowScrollBtn(false);
      }
    };

    window.addEventListener('scroll', handleScrollEvent);
    return () => window.removeEventListener('scroll', handleScrollEvent);
  }, []);

  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleGenreSelect = (genre) => {
    setPage(1);
    setData({
      items: [],
      loading: false,
      error: false,
    });

    params.delete("filter");
    params.set("genreId", genre.id);
    setParams(params);
  };

  return (
    <>
      <Header></Header>

      <Toaster position="top-right"></Toaster>
      <div className="app-wrapper">
        <div className={css.descriptionSection}>
          <h2 className={css.descriptionTitle}>Discover Amazing Movies</h2>
          <p className={css.descriptionText}>
            Explore our extensive collection of films from every genre imaginable. 
            Use our genre filter to find exactly what you're looking for, or search 
            for specific titles. Dive into the world of cinema and discover your next 
            favorite movie. Learn more about the film industry's evolution in our 
            <Link to="/about" className={css.aboutLink}> About section</Link>.
          </p>
        </div>
        <div className={css.genreSection}>
          <GenreDropdown onGenreSelect={handleGenreSelect} />
        </div>


        {data.error && <p className="error">Ooooops... Try reloading the page</p>}

        {data.items.length > 0 && <MoviesGallery arr={data.items} />}
        {data.loading && <Loader />}
        {data.items.length > 0 && !data.loading && showMoreBtn && (
          <button onClick={handleLoadMore} className={css.btn}>
            Load more
          </button>
        )}
        {data.items.length > 0 && showScrollBtn && (
          <button className="scroll" onClick={handleScroll}>
            Scroll to top
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}
