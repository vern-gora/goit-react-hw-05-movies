import axios from 'axios';

const API_KEY = '4c3007a9629b6abce42eca24ebb164b2';

const fetchTrendingTodayMovies = async (page = 1) => {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await axios.get(URL);
    const trendList = response.data.results;
    return trendList;
  } catch (error) {
    console.log(error);
  }
};

export { fetchTrendingTodayMovies };
