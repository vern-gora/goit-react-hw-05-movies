import axios from 'axios';

const API_KEY = '4c3007a9629b6abce42eca24ebb164b2';

const fetchMovieDetails = async movieId => {
  const URL = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`;
  try {
    const response = await axios.get(URL);
    const data = response.data;

    const smallPoster = data.poster_path;
    const title = data.title;
    const user_score = Math.round(data.vote_average * 10);
    const overview = data.overview;
    const genres = data.genres.map(genre => genre.name).join(', ');
    const id = data.id;

    return {
      smallPoster,
      title,
      user_score,
      overview,
      genres,
      id,
    };
  } catch (error) {
    console.log(error);
  }
};

export { fetchMovieDetails };
