import './Header.css';

function Header() {
  return (
    <header className="site-header">
      <div className="header-bar">
          <div className="logo">SOLDEN STOLL</div>
          <div className="nav-links">
            <div className="menu">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Projects</a>
              <a href="#">Experience</a>
            </div>
            <div className="socials">
              <a href="#"><i className="fab fa-linkedin"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
              <a href="mailto:your@email.com"><i className="fas fa-envelope"></i></a>
              <a href="#"><i className="fas fa-circle-nodes"></i></a> {/* ORCID placeholder */}
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;