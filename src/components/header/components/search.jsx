import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Search = ({
  className,
  onSubmit,
  action,
  method,
  visuallyHiddenText,
  id,
  ...rest
}) => {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <div className={classNames('nhsuk-header__search', className)}>
      <button
        className="nhsuk-header__search-toggle"
        type="button"
        id="toggle-search"
        onClick={() => setShowSearch(!showSearch)}
        aria-controls="search"
        aria-label="Open search"
      >
        <svg
          className="nhsuk-icon nhsuk-icon__search"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
        </svg>
        <span className="nhsuk-u-visually-hidden">Search</span>
      </button>
      <div
        className={classNames('nhsuk-header__search-wrap', {
          'js-show': showSearch
        })}
      >
        <form
          className="nhsuk-header__search-form"
          onSubmit={onSubmit}
          action={action}
          method={method}
          role="search"
        >
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label className="nhsuk-u-visually-hidden" htmlFor={id}>
            {visuallyHiddenText}
          </label>
          <div
            className="autocomplete-container"
            id="autocomplete-container"
          ></div>
          <input className="nhsuk-search__input" id={id} {...rest} />
          <button className="nhsuk-search__submit" type="submit">
            <svg
              className="nhsuk-icon nhsuk-icon__search"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z"></path>
            </svg>
            <span className="nhsuk-u-visually-hidden">Search</span>
          </button>
          <button
            className="nhsuk-search__close"
            type="button"
            onClick={() => setShowSearch(false)}
            id="close-search"
          >
            <svg
              className="nhsuk-icon nhsuk-icon__close"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
            </svg>
            <span className="nhsuk-u-visually-hidden">Close search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

Search.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  onSubmit: PropTypes.func,
  action: PropTypes.string,
  method: PropTypes.string,
  id: PropTypes.string,
  visuallyHiddenText: PropTypes.string
};
Search.defaultProps = {
  name: 'search-field',
  type: 'search',
  placeholder: 'Search',
  autoComplete: 'off',
  className: '',
  onSubmit: () => {},
  action: '',
  method: '',
  id: '',
  visuallyHiddenText: 'Search the NHS website'
};

export default Search;
