import axios from 'axios';

const API_KEY = '4c3007a9629b6abce42eca24ebb164b2';

const fetchMovieReviews = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    const data = response.data.results;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieReviews };
