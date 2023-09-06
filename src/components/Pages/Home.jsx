import { useEffect, useState } from 'react';
import { fetchTrendingTodayMovies } from '../API/fetch-trending-today';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    async function getMovieList() {
      try {
        const movieList = await fetchTrendingTodayMovies();
        setFilmList(movieList);
      } catch (error) {
        console.log(error);
      }
    }
    getMovieList();
  }, []);

  return (
    <>
      <h1
        style={{
          paddingTop: '16px',
          paddingBottom: '16px',
          textDecoration: 'none',
          marginRight: '25px',
          color: '#3f51b5',
        }}
      >
        Trending today
      </h1>
      <ul
        style={{
          listStyle: 'none',
          padding: 0,
        }}
      >
        <MovieList filmList={filmList} />
      </ul>
    </>
  );
};

export default Home;
