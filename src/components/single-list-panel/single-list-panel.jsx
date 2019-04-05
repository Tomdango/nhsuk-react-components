import React from 'react';
// import './_single-list-panel.scss';

const SingleListPanel = props => {
  const {
    label,
    id,
    backToTop,
    backToTopLink,
    items = [],
    message,
    disable
  } = props;
  const renderedItems = items.reduce((itemsArray, item) => {
    itemsArray.push(
      <li className="nhsuk-list-panel__item">
        <a className="nhsuk-list-panel__link" href={item.url || '#'}>
          {item.link}
        </a>
      </li>
    );
    return itemsArray;
  }, []);

  return (
    <div className="nhsuk-list-panel">
      <h2 className="nhsuk-list-panel__label" id={id}>
        {label}
      </h2>
      {disable ? (
        <div className="nhsuk-list-panel__box nhsuk-list-panel__box--with-label">
          <p className="nhsuk-list-panel--results-items__no-results">
            {message || ''}
          </p>
        </div>
      ) : (
        <ul className="nhsuk-list-panel__list nhsuk-list-panel__list--with-label">
          {renderedItems}
        </ul>
      )}

      {backToTop ? (
        <div className="nhsuk-back-to-top">
          <a className="nhsuk-back-to-top__link" href={backToTopLink || '#'}>
            <svg
              className="nhsuk-icon nhsuk-icon__arrow-right"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z" />
            </svg>
            Back to top
          </a>
        </div>
      ) : null}
    </div>
  );
};

export default SingleListPanel;
