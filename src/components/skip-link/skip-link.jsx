import React from 'react';
// import './_skip-link.scss';

/*
 * Skip link
 *
 * When using VoiceOver on iOS, focus remains on the skip link anchor
 * when elected so the next focusable element is not at the jumped to area.
 * This Javascript hack focuses on the first page <h1> element
 * (if one exists, which it should) by adding tabindex = -1 to it and
 * then removes it when focus is off it.
 */

export default class SkipLink extends React.Component {
  constructor() {
    super();
    this.skipLinkRef = React.createRef();
    this.handleSkipLink = this.handleSkipLink.bind(this);
    this.addFocus = this.addFocus.bind(this);
    this.removeFocus = this.removeFocus.bind(this);
  }

  componentDidMount() {
    const [headingElement] = document.getElementsByTagName('H1');
    this.headingElement = headingElement;
    if (this.headingElement) {
      this.headingElement.addEventListener('blur', e => {
        e.preventDefault();
        this.removeFocus();
      });
    }
  }

  componentWillUnmount() {
    if (this.headingElement) {
      this.headingElement.removeEventListener('blur', e => {
        e.preventDefault();
        this.removeFocus();
      });
    }
  }

  addFocus() {
    if (this.headingElement) {
      this.headingElement.setAttribute('tabIndex', '-1');
      this.headingElement.focus();
    }
  }

  removeFocus() {
    if (this.headingElement) {
      this.headingElement.removeAttribute('tabIndex');
    }
  }

  handleSkipLink(e) {
    e.preventDefault();
    if (this.headingElement) {
      this.addFocus();
    }
  }

  render() {
    const { href, text } = this.props;
    return (
      <a
        ref={this.skipLinkRef}
        onClick={this.handleSkipLink}
        className="nhsuk-skip-link"
        href={href || '#maincontent'}
      >
        {text || 'Skip to main content'}
      </a>
    );
  }
}
