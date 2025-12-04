import { Header } from "../../components/Header/Header";
import { fetchTopRated, fetchTrendings } from "../../api/api";
import { useEffect, useState } from "react";
import { TrendingList } from "../../components/TrendingList/TrendingList";
import { Footer } from "../../components/Footer/Footer";
import css from "../HomePage/HomePage.module.css";
import { Loader } from "../../components/Loader/Loader";

export default function HomePage() {
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(true);
  const [showScrollBtn, setShowScrollBtn] = useState(false);
  const [topRated, setTopRated] = useState([]);
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchData() {
      try {
        setLoader(true);
        const trendingData = await fetchTrendings(1, controller);
        const topRatedData = await fetchTopRated(1, controller);
        
        // Set top rated movies (limited to 10)
        setTopRated(topRatedData.data.results.slice(0, 10));
        
        // Set trending movies (limited to 20)
        setTrending(trendingData.data.results.slice(0, 20));
      } catch (error) {
        if (error.code !== "ERR_CANCELED") {
          setError(true);
        }
      } finally {
        setLoader(false);
      }
    }

    fetchData();

    return () => controller.abort();
  }, []);


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


  return (
    <>
      <Header />

      {/* Top Rated Section */}
      <div className={css.sectionTitle}>Top Rated Movies</div>
      {error && <p className={css.error}>Ooooops... Try reloading the page</p>}
      <TrendingList arr={topRated} />
      
      {/* Trending Section */}
      <div className={css.sectionTitle}>Trending Today</div>
      <TrendingList arr={trending} />
      
      {loader && <Loader />}
      
      {showScrollBtn && (
        <button onClick={handleScroll} className="scroll">
          Scroll to top
        </button>
      )}
      
      <Footer />
    </>
  );
}
