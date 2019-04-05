import React from 'react';
// import './_footer.scss';

const Footer = props => {
  const { links } = props;
  let footerLinks;
  if (links) {
    footerLinks = links.map(link => (
      <li className="nhsuk-footer__list-item">
        <a className="nhsuk-footer__list-item-link" href={link.URL || '#'}>
          {link.label}
        </a>
      </li>
    ));
  } else {
    footerLinks = null;
  }

  return (
    <footer role="contentinfo">
      <div className="nhsuk-footer" id="nhsuk-footer">
        <div className="nhsuk-width-container">
          <h2 className="nhsuk-u-visually-hidden">Support links</h2>
          <ul className="nhsuk-footer__list">{footerLinks}</ul>
          <p className="nhsuk-footer__copyright">&copy; Crown copyright</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
