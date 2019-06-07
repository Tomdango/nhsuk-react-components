import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Container, Row } from '../layout';

const isScrolledIntoView = element => {
  const rect = element.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;
  const isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
};

const mockFooter = {
  getBoundingClientRect: () => ({ top: 10, bottom: 20 })
};

class FeedbackBanner extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    timeout: PropTypes.number,
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    label: PropTypes.node,
    href: PropTypes.string,
    onClick: PropTypes.func,
    visuallyHiddenText: PropTypes.string,
    className: PropTypes.string
  };

  static defaultProps = {
    id: 'nhsuk-feedback-banner',
    timeout: 3000,
    title: '',
    label: '',
    href: '#',
    onClick: () => {},
    visuallyHiddenText: ' feedback invite',
    className: ''
  };

  constructor(props) {
    super(props);
    this.state = {
      shown: false,
      jsInView: false
    };
    this.toggleBanner = this.toggleBanner.bind(this);
    this.unstickBanner = this.unstickBanner.bind(this);
    this.initialPendingTimeout = false;
    this.timer = false;
  }

  componentDidMount() {
    const { timeout } = this.props;
    this.initialPendingTimeout = setTimeout(() => {
      this.toggleBanner(true);
      this.initialPendingTimeout = false;
    }, timeout);
    window.addEventListener('scroll', this.unstickBanner);
  }

  componentWillUnmount() {
    if (this.initialPendingTimeout) {
      clearTimeout(this.initialPendingTimeout);
    }
    if (this.timer) {
      clearTimeout(this.timer);
    }
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

  unstickBanner(
    testVars = {
      useMockFooter: false,
      forceScrolledIntoView: undefined,
      forceDidScroll: undefined
    }
  ) {
    const { forceDidScroll, useMockFooter, forceScrolledIntoView } = testVars;
    let didScroll = forceDidScroll === undefined ? false : forceDidScroll;
    const footer = useMockFooter
      ? mockFooter
      : document.querySelector('#nhsuk-footer');
    if (footer) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setInterval(() => {
        if (didScroll) {
          const inView =
            forceScrolledIntoView === undefined
              ? isScrolledIntoView(footer)
              : forceScrolledIntoView;
          if (inView) {
            this.setState({ jsInView: true });
          } else {
            this.setState({ jsInView: false });
          }
        }
      }, 50);
      didScroll = forceDidScroll === undefined ? true : forceDidScroll;
    }
  }

  render() {
    const {
      title,
      children,
      label,
      href,
      onClick,
      className,
      visuallyHiddenText,
      id,
      ...rest
    } = this.props;
    const { shown, jsInView } = this.state;
    return (
      <div
        className={classNames(
          'nhsuk-feedback-banner',
          { 'nhsuk-feedback-banner__shown': shown },
          { 'js-inview': jsInView },
          className
        )}
        id={id}
        {...rest}
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
                      id={`${id ? `${id}__label` : null}`}
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

export default FeedbackBanner;
