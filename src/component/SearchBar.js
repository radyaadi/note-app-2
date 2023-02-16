import React, { useContext } from 'react';
import LocaleContext from '../context/LocaleContext';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder={
          locale === 'id'
            ? 'Cari judul catatan disini..'
            : 'Search note title here'
        }
        value={keyword}
        onChange={(event) => keywordChange(event.target.value)}
      />
    </section>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
