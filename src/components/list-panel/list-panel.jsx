import React from 'react';
import SingleListPanel from '../single-list-panel';

const ListPanel = props => {
  const { panels } = props;
  const RenderedPanels = panels.map(panel => {
    return (
      <li>
        <SingleListPanel {...panel} />
      </li>
    );
  });

  return <ol className="nhsuk-list">{RenderedPanels}</ol>;
};

export default ListPanel;
