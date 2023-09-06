import { useState, useEffect } from 'react';
import { Notify } from 'notiflix';

import { Searchbar } from 'components/Searchbar/Searchbar';

import { MovieList } from '../MovieList/MovieList';

import { fetchSearch } from 'components/API/fetch-search-movie';
import { useSearchParams } from 'react-router-dom';

const Movie = () => {
  const [searchFilmList, setSearchFilmList] = useState();
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParams = searchParams.get('query');

  const onSubmit = event => {
    const inputQuery = event.target.elements.input.value.toLowerCase().trim();
    if (inputQuery === '') {
      Notify.info(
        `It seems you didn't write enything, please specify what exactly you are looking for`
      );
    } else {
      if (inputQuery === queryParams) {
        Notify.info(
          `It seems your query duplicate previous, please write another one`
        );
      } else {
        setSearchParams({ query: inputQuery });
      }
    }
  };

  useEffect(() => {
    if (queryParams === '' || queryParams === null) {
      return;
    } else {
      async function searchMovies() {
        try {
          await fetchSearch(queryParams)
            .then(response => {
              if (response.total_results === 0) {
                Notify.warning(
                  'Sorry, there are no movies matching your search query. Please try again.'
                );
                setSearchFilmList();
              } else {
                setSearchFilmList(response.results);
              }
            })
            .catch(error => console.log(error));
        } catch (error) {
          console.log(error);
        }
      }
      searchMovies();
    }
  }, [queryParams]);

  return (
    <div>
      <Searchbar onSubmit={onSubmit} />
      <ul>
        {searchFilmList !== undefined && (
          <MovieList filmList={searchFilmList} />
        )}
      </ul>
    </div>
  );
};

export default Movie;
