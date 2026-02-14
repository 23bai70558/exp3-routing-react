import { NavLink } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function Header() {
  const { user } = useAuth();

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            <NavLink to="/">
              <span className="logo-icon">⚛️</span>
              <span className="logo-text">React SPA</span>
            </NavLink>
          </div>

          <nav className="nav">
            <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              About
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Products
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
              Contact
            </NavLink>
            {user ? (
              <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Dashboard
              </NavLink>
            ) : (
              <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link nav-link-login active' : 'nav-link nav-link-login'}>
                Login
              </NavLink>
            )}
          </nav>

          {user && (
            <div className="user-info">
              <span className="user-badge">👤 {user}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
