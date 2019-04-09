import React from 'react';
import PropTypes from 'prop-types';
import { Container, Row } from '../layout';

const isScrolledIntoView = element => {
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

class FeedbackBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      jsInView: false
    };
    this.toggleBanner = this.toggleBanner.bind(this);
    this.unstickBanner = this.unstickBanner.bind(this);
    this.timer = false;
  }

  componentDidMount() {
    const { timeout } = this.props;
    setTimeout(() => {
      this.toggleBanner(true);
    }, timeout);
    window.addEventListener('scroll', this.unstickBanner);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.unstickBanner);
  }

  toggleBanner(toggle = 'unset') {
    if (toggle === 'unset') {
      const { shown } = this.state;
      this.setState({ shown: !shown });
    } else {
      this.setState({ shown: toggle });
    }
  }

  unstickBanner() {
    let didScroll = false;
    const footer = document.querySelector('#nhsuk-footer');
    if (footer) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setInterval(() => {
        if (didScroll) {
          if (isScrolledIntoView(footer)) {
            this.setState({ jsInView: true });
          } else {
            this.setState({ jsInView: false });
          }
        }
      }, 500);
      didScroll = true;
    }
  }

  render() {
    const {
      title,
      children,
      label,
      href,
      id,
      onClick,
      visuallyHiddenText
    } = this.props;
    const { shown, jsInView } = this.state;
    return (
      <div
        className={`nhsuk-feedback-banner ${
          shown ? 'nhsuk-feedback-banner__shown' : ''
        } ${jsInView ? 'js-inview' : ''}`}
        id={id}
      >
        <Container>
          <Row>
            <Row.Column width="full">
              <div className="nhsuk-feedback-banner__content">
                <h2 className="nhsuk-feedback-banner__heading">{title}</h2>
                <p className="nhsuk-feedback-banner__message">
                  {children}
                  {label ? (
                    <a
                      href={href}
                      onClick={onClick}
                      className="nhsuk-u-nowrap nhsuk-feedback-banner__label"
                    >
                      {label}
                    </a>
                  ) : null}
                </p>
                <button
                  className="nhsuk-feedback-banner__close"
                  id="nhsuk-feedback-banner-close"
                  type="button"
                  onClick={() => this.toggleBanner(false)}
                >
                  Close
                  <span className="nhsuk-u-visually-hidden">
                    {visuallyHiddenText}
                  </span>
                </button>
              </div>
            </Row.Column>
          </Row>
        </Container>
      </div>
    );
  }
}

FeedbackBanner.propTypes = {
  id: PropTypes.string,
  timeout: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  label: PropTypes.node,
  href: PropTypes.string,
  onClick: PropTypes.func,
  visuallyHiddenText: PropTypes.string
};

FeedbackBanner.defaultProps = {
  id: 'nhsuk-feedback-banner',
  timeout: 0,
  title: '',
  label: '',
  href: '#',
  onClick: () => {},
  visuallyHiddenText: ' feedback invite'
};
export default FeedbackBanner;
