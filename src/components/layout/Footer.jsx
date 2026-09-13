import { site, nav, footer } from '../../data/site';
import Logo from './Logo';

export default function Footer() {
  const year = new Date().getFullYear();
  const [findUs] = footer.columns;

  return (
    <footer className="footer" id="contact">
      <div className="wrap footer__in">
        <div className="footer__brand">
          <Logo className="brand--footer" />
          <p className="footer__blurb">{site.tagline}</p>
        </div>

        <div className="footer__col">
          <h4>{findUs.heading}</h4>
          {findUs.lines.map((block, i) => (
            <p key={i}>
              {block.map((line, j) => (
                <span key={j}>
                  {line}
                  {j < block.length - 1 && <br />}
                </span>
              ))}
            </p>
          ))}
        </div>

        <div className="footer__col">
          <h4>Reach us</h4>
          <p>
            <a href={site.phoneHref}>{site.phone}</a>
          </p>
          <p>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </p>
          <p className="footer__social">
            {footer.social.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </p>
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
        <p>
          {footer.legal.map((link, i) => (
            <span key={link.label}>
              {i > 0 && ' · '}
              <a href={link.href}>{link.label}</a>
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}
