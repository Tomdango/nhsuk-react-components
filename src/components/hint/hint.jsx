import React from 'react';
// import './_hint.scss';

const Hint = props => {
  const { children } = props;
  return <span className="nhsuk-hint">{children}</span>;
};

export default Hint;
