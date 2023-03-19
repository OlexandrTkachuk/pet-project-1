import { NavLink } from 'react-router-dom';
import ButtonDarkMode from 'components/ButtonDarkMode/ButtonDarkMode';
import './style.css';

export default function Navigation() {
  const handleActiveLink = ({ isActive }) => {
    const activeLink = 'nav-list__link nav-list__link--active';
    const normalLink = 'nav-list__link';

    if (isActive) {
      return activeLink;
    }

    return normalLink;
  };

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>Freelancer</strong> portfolio
          </NavLink>

          <ButtonDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink to="/" className={handleActiveLink}>
                Home
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/projects" className={handleActiveLink}>
                Projects
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink to="/contacts" className={handleActiveLink}>
                Contacts
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
