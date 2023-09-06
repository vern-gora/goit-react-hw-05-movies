import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

import css from './MovieList.module.css';

export const MovieList = ({ filmList }) => {
  const location = useLocation();
  return (
    <div>
      {filmList.map(elem => (
        <li key={elem.id} className={css.Nav}>
          <Link to={`/movies/${elem.id}`} state={{ from: location }}>
            {elem.original_title}
          </Link>
        </li>
      ))}
    </div>
  );
};

MovieList.propTypes = {
  filmList: PropTypes.array.isRequired,
};
