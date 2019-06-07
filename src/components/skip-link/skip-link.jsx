import React from 'react';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import classNames from 'classnames';
/*
 * Skip link
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 * This Javascript hack focuses on the first page <h1> element
 * (if one exists, which it should) by adding tabindex = -1 to it and
 * then removes it when focus is off it.
 */

class SkipLink extends React.Component {
  constructor() {
    super();
    this.skipLinkRef = React.createRef();
  }

  componentDidMount = () => {
    const { testHeadingElement } = this.props;
    const [headingElement] = document.getElementsByTagName('h1');
    this.headingElement = testHeadingElement || headingElement;
    if (this.headingElement) {
      this.headingElement.addEventListener('blur', e => {
        e.preventDefault();
        this.removeFocus();
      });
    }
  };

  componentWillUnmount() {
    if (this.headingElement) {
      this.headingElement.removeEventListener('blur', e => {
        e.preventDefault();
        this.removeFocus();
      });
    }
  }

  addFocus = () => {
    if (this.headingElement) {
      this.headingElement.setAttribute('tabIndex', '-1');
      this.headingElement.focus();
    }
  };

  removeFocus = () => {
    if (this.headingElement) {
      this.headingElement.removeAttribute('tabIndex');
    }
  };

  handleSkipLink = e => {
    e.preventDefault();
    if (this.headingElement) {
      this.addFocus();
    }
  };

  render() {
    const { href, children, className, ...rest } = this.props;
    return (
      <a
        href={href}
        ref={this.skipLinkRef}
        onClick={this.handleSkipLink}
        className={classNames('nhsuk-skip-link', className)}
        {...rest}
      >
        {children}
      </a>
    );
  }
}

SkipLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.string,
  className: PropTypes.string,
  style: stylePropType,
  testHeadingElement: PropTypes.oneOf([PropTypes.node, PropTypes.bool])
};

SkipLink.defaultProps = {
  children: 'Skip to main content',
  href: '#maincontent',
  className: '',
  style: {},
  testHeadingElement: false
};

export default SkipLink;
