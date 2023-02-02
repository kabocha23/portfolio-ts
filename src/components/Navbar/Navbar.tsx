import { FC } from "react";
import "./Navbar.css";

interface NavbarProps {
  isNavExpanded: boolean;
  setIsNavExpanded: (isNavExpanded: boolean) => void;
  navBgColor: boolean;
  setNavBgColor: (navBgColor: boolean) => void;
  handleHomeClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleAboutClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleProjectsClick: React.MouseEventHandler<HTMLAnchorElement>;
  handleContactClick: React.MouseEventHandler<HTMLAnchorElement>;
}

const Navbar: FC<NavbarProps> = ({
  isNavExpanded,
  setIsNavExpanded,
  navBgColor,
  setNavBgColor,
  handleHomeClick,
  handleAboutClick,
  handleProjectsClick,
  handleContactClick,
}) => {
  const toggleIsNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  const changeNavbarColor = () => {
    if (window.scrollY >= 65) {
      setNavBgColor(true);
    } else {
      setNavBgColor(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <nav
      className={
        navBgColor ? "nav-container colorBg" : "nav-container transpBg"
      }
    >
      <div className="navbar-home">
        <a onClick={handleHomeClick}>JK</a>
      </div>
      <div className="toggle-button">
        <a title="col-nav-btn" onClick={toggleIsNav}>
          {isNavExpanded ? "X" : "☰"}
        </a>
      </div>
      <div className={isNavExpanded ? "nav-menu expanded" : "nav-menu"}>
        <ul className={navBgColor ? "nav-ul colorBg" : "nav-ul transpBg"}>
          <li>
            <a onClick={handleAboutClick}>About</a>
          </li>
          <li>
            <a onClick={handleProjectsClick}>Projects</a>
          </li>
          <li>
            <a onClick={handleContactClick}>Contact</a>
          </li>
        </ul>
      </div>
      <div className="nav-menu-fs">
        <div className="nav-menu-fs-sub">
          <a onClick={handleAboutClick}>About</a>
          <a onClick={handleProjectsClick}>Projects</a>
          <a onClick={handleContactClick}>Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
