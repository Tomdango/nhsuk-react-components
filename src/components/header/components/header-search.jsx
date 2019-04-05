import React from 'react';

class HeaderSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchToggle: false,
      currentSearch: ''
    };
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSearchToggle() {
    const { searchToggle } = this.state;
    this.setState({ searchToggle: !searchToggle });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { currentSearch } = this.state;
    const { onSubmit } = this.props;
    if (onSubmit) {
      onSubmit(currentSearch);
    }
  }

  render() {
    const { hiddenLabel } = this.props;
    const { searchToggle, currentSearch } = this.state;
    return (
      <div className="nhsuk-header__search">
        <button
          className={`nhsuk-header__search-toggle ${
            searchToggle ? 'is-active' : ''
          }`}
          id="toggle-search"
          type="button"
          aria-expanded={searchToggle}
          onClick={this.handleSearchToggle}
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
            <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
          </svg>
          <span className="nhsuk-u-visually-hidden">Search</span>
        </button>
        <div
          className={`nhsuk-header__search-wrap ${
            searchToggle ? 'js-show' : ''
          }`}
          id="wrap-search"
        >
          <form
            className="nhsuk-header__search-form"
            id="search"
            action="/search/"
            method="get"
            onSubmit={this.handleSubmit}
            role="search"
          >
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label className="nhsuk-u-visually-hidden" htmlFor="search-field">
              {hiddenLabel}
            </label>
            <div
              className="autocomplete-container"
              id="autocomplete-container"
            />
            <input
              className="nhsuk-search__input"
              id="search-field"
              type="text"
              placeholder="Search"
              value={currentSearch}
              onChange={event =>
                this.setState({ currentSearch: event.target.value })
              }
              autoComplete="off"
            />
            <button className="nhsuk-search__submit" type="submit">
              <svg
                className="nhsuk-icon nhsuk-icon__search"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M19.71 18.29l-4.11-4.1a7 7 0 1 0-1.41 1.41l4.1 4.11a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 10a5 5 0 1 1 5 5 5 5 0 0 1-5-5z" />
              </svg>
              <span className="nhsuk-u-visually-hidden">Search</span>
            </button>
            <button
              type="button"
              className="nhsuk-search__close"
              onClick={this.handleSearchToggle}
              id="close-search"
            >
              <svg
                className="nhsuk-icon nhsuk-icon__close"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M13.41 12l5.3-5.29a1 1 0 1 0-1.42-1.42L12 10.59l-5.29-5.3a1 1 0 0 0-1.42 1.42l5.3 5.29-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l5.29-5.3 5.29 5.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
              </svg>
              <span className="nhsuk-u-visually-hidden">Close search</span>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default HeaderSearch;
