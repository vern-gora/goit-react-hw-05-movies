import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiSearch } from 'react-icons/bi';

import css from './Searchbar.module.css';

export const Searchbar = ({ onSubmit }) => {
  const [inputText, setInputText] = useState('');

  const onSubmitHandler = event => {
    event.preventDefault();
    onSubmit(event);
  };

  const onInputChange = event => {
    setInputText(event.target.value);
  };

  return (
    <>
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={onSubmitHandler}>
          <button type="submit" className={css.SearchFormButton}>
            <BiSearch className={css.Icon} size={24} />
            <span className={css.SearchFormButtonLabel}>Search</span>
          </button>

          <input
            className={css.SearchFormInput}
            type="text"
            autoComplete="off"
            name="input"
            autoFocus
            placeholder="Search movie"
            value={inputText}
            onInput={onInputChange}
          />
        </form>
      </header>
    </>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
