import React from 'react';
import PropTypes from 'prop-types';

class PanelGroup extends React.Component {
  constructor(props) {
    super(props);
    this.getColumnSize = this.getColumnSize.bind(this);
    this.wrapChildren = this.wrapChildren.bind(this);
  }

  getColumnSize() {
    const { children } = this.props;
    switch (React.Children.count(children)) {
      case 1:
        return 'nhsuk-grid-column-full';
      case 2:
        return 'nhsuk-grid-column-one-half';
      case 3:
        return 'nhsuk-grid-column-one-third';
      case 4:
        return 'nhsuk-grid-column-one-quarter';
      default:
        return '';
    }
  }

  wrapChildren() {
    const { children } = this.props;
    const columnSize = this.getColumnSize();
    return React.Children.map(children, child => (
      <div className={`${columnSize} nhsuk-panel-group__item`}>{child}</div>
    ));
  }

  render() {
    return (
      <div className="nhsuk-grid-row nhsuk-panel-group">
        {this.wrapChildren()}
      </div>
    );
  }
}

PanelGroup.propTypes = {
  children: PropTypes.node.isRequired
};

export default PanelGroup;
