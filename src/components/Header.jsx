import './Header.css';

function Header() {
  const linkedin = "https://www.linkedin.com/in/solden/";
  const github = "https://github.com/soldenstoll/";
  const email = "mailto:solden [at] cs.washington.edu";
  const orcid = "https://orcid.org/0009-0007-1228-9461"
  const links = [
    { href: linkedin, icon: "fab fa-linkedin", label: "LinkedIn" },
    { href: github, icon: "fab fa-github", label: "GitHub" },
    { href: email, icon: "fas fa-envelope", label: "Email" },
    { href: orcid, icon: "fas fa-circle-nodes", label: "ORCID" },
  ];

  return (
    <header className="site-header">
      <div className="header-bar">
          <div className="logo">SOLDEN STOLL</div>
          <div className="nav-links">
            <div className="menu">
              <a href="#">Home</a>
              <a href="#about">About</a>
              <a href="#projects">Projects</a>
              <a href="#experience">Experience</a>
            </div>
            <div className="socials">
              {links.map(({ href, icon }, idx) => (
                <a
                  key={idx}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className={icon}></i>
                </a>
              ))}
            </div>
        </div>
      </div>
    </header>
  );
}

export default Header;