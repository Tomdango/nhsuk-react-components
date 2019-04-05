import React from 'react';
// import './_nav-a-z.scss';

const NavAZ = props => {
  const { items } = props;
  const renderedItems = items.map(item => (
    <li className="nhsuk-nav-a-z__item">
      {item.disable ? (
        <span className="nhsuk-nav-a-z__link--disabled">{item.label}</span>
      ) : (
        <li className="nhsuk-nav-a-z__item">
          <a className="nhsuk-nav-a-z__link" href={`#${item.label}`}>
            {item.label}
          </a>
        </li>
      )}
    </li>
  ));
  return (
    <nav
      className="nhsuk-nav-a-z"
      id="nhsuk-nav-a-z"
      role="navigation"
      aria-label="A to Z Navigation"
    >
      <ol className="nhsuk-nav-a-z__list">{renderedItems}</ol>
    </nav>
  );
};

export default NavAZ;
