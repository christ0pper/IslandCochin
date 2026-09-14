import { site, nav, footer } from '../../data/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="wrap footer__in">
        <div className="footer__brand">
          <Logo className="brand--footer" />
          <p className="footer__tagline">{site.tagline}</p>
          <p className="footer__blurb">{site.blurb}</p>
        </div>

        <div className="footer__col">
          <h4>Find us</h4>
          <p>
            Boat pickup &amp; free parking
            <br />
            {site.pickup}
          </p>
          <p>About 15 minutes from Marine Drive</p>
        </div>

        <div className="footer__col">
          <h4>Reach us</h4>
          <p>
            <a href={site.phoneHref}>Call {site.phone}</a>
          </p>
          <p>
            <a href={site.whatsappHello} target="_blank" rel="noopener noreferrer">
              WhatsApp us
            </a>
          </p>
          <p>{site.hours}</p>
          {footer.social.length > 0 && (
            <p className="footer__social">
              {footer.social.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </p>
          )}
        </div>

        <div className="footer__col">
          <h4>The island</h4>
          <nav className="footer__nav" aria-label="Footer">
            {nav
              .filter((item) => item.href !== '#contact')
              .map((item) => (
                <a key={item.href} href={item.href}>
                  {item.label}
                </a>
              ))}
          </nav>
        </div>
      </div>

      <div className="wrap footer__base">
        <p>
          © {year} {site.name}. All rights reserved.
        </p>
        {footer.legal.length > 0 && (
          <p>
            {footer.legal.map((link, i) => (
              <span key={link.label}>
                {i > 0 && ' · '}
                <a href={link.href}>{link.label}</a>
              </span>
            ))}
          </p>
        )}
      </div>
    </footer>
  );
}
