import { site } from '../../data/site';

export default function UtilityBar() {
  return (
    <div className="utility">
      <div className="wrap utility__in">
        <nav className="utility__links" aria-label="Utility">
          <a href="#contact">Plan a Day Out</a>
          <span className="dot" aria-hidden="true" />
          <a href={site.phoneHref}>{site.phone}</a>
        </nav>
      </div>
    </div>
  );
}
