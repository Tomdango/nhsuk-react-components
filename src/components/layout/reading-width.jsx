import React from 'react';
import { node } from 'prop-types';

const ReadingWidth = ({ children }) => (
  <div className="nhsuk-u-reading-width">{children}</div>
);

ReadingWidth.propTypes = {
  children: node.isRequired
};

export default ReadingWidth;
