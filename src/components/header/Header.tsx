import './Header.scss';

export const Header = () => (
  <header className="Header">
    <nav className="Header__nav" aria-label="Global">
      <a href="https://futjesus.dev" target="_blank" className="Header__logo">
        <span className="sr-only">Example AbortController</span>
        <img
          className="w-20"
          src="https://bucket.futjesus.dev/public/logo-without-background.png"
          alt="futjesus logo"
        />
      </a>
    </nav>
  </header>
);
