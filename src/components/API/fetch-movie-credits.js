import axios from 'axios';

const API_KEY = '4c3007a9629b6abce42eca24ebb164b2';

const fetchMovieCredits = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    const data = response.data.cast;
    return data;
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieCredits };
