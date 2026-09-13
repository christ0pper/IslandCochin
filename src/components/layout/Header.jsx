import { useEffect, useRef, useState } from 'react';
import { nav } from '../../data/site';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import Logo from './Logo';
import Button from '../ui/Button';

const SECTION_IDS = nav.map((item) => item.href.replace('#', ''));

export default function Header() {
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(SECTION_IDS);
  const burgerRef = useRef(null);
  const navRef = useRef(null);

  // The drawer is only ever opened from the burger, which exists below 1024px
  // alone — so an open drawer always means the panel layout. Escape closes it
  // and hands focus back to the control that opened it; opening moves focus in,
  // otherwise the keyboard is left behind the panel it just summoned.
  useEffect(() => {
    if (!open) return;

    navRef.current?.querySelector('a')?.focus();

    const onKeyDown = (event) => {
      if (event.key !== 'Escape') return;
      setOpen(false);
      burgerRef.current?.focus();
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="header">
      <div className="wrap header__in">
        <Logo />

        <nav
          id="nav"
          ref={navRef}
          className={open ? 'nav open' : 'nav'}
          aria-label="Primary"
          onClick={() => setOpen(false)}
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={active === item.href.replace('#', '') ? 'is-active' : undefined}
            >
              {item.label}
            </a>
          ))}
          {/* the header's Book button is hidden at drawer widths */}
          <Button href="#book" className="nav__book">Book now</Button>
        </nav>

        <div className="header__cta">
          <Button href="#book">Book now</Button>
          <button
            className="burger"
            ref={burgerRef}
            aria-label="Menu"
            aria-expanded={open}
            aria-controls="nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
