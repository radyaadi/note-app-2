import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ keyword, keywordChange }) => {
  return (
    <section className="search-bar">
      <input
        type="text"
        placeholder="Type title here..."
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
