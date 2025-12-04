import axios from "axios";

const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

export const fetchTrendings = async (pages, controller) => {
  const url = `${baseUrl}/trending/movie/day?language=en-US&page=${pages}`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    signal: controller.signal,
  };
  const data = await axios.get(url, options);
  return data;
};


export const fetchTopRated = async (pages, controller) => {
  const url = `${baseUrl}/movie/top_rated?language=en-US&page=${pages}`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    signal: controller.signal,
  };
  const data = await axios.get(url, options);
  return data;
};

export const fetchMovieDetails = async (movie_id) => {
  const url = `${baseUrl}/movie/${movie_id}`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const data = await axios.get(url, options);
  return data.data;
};

export const fetchCast = async (movie_id) => {
  const url = `${baseUrl}/movie/${movie_id}/credits`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const data = await axios.get(url, options);
  return data.data;
};

export const fetchReviews = async (movie_id) => {
  const url = `${baseUrl}/movie/${movie_id}/reviews`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const data = await axios.get(url, options);
  return data.data.results;
};

export const fetchMovies = async (query, page) => {
  const url = `${baseUrl}/search/movie`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
    params: {
      query,
      page,
    },
  };
  const data = await axios.get(url, options);
  return data.data;
};


export const fetchGenres = async () => {
  const url = `${baseUrl}/genre/movie/list?language=en`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const data = await axios.get(url, options);
  return data.data.genres;
}; 

export const discoverMovies = async (page = 1) => {
  const url = `${baseUrl}/discover/movie?language=en&page=${page}`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const data = await axios.get(url, options);
  return data.data;
};

export const discoverMoviesByGenres = async (genres, page = 1) => {
  const url = `${baseUrl}/discover/movie?language=en&with_genres=${genres}&page=${page}`;
  const options = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  };
  const data = await axios.get(url, options);
  return data.data;
}; 

