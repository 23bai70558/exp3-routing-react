import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="page">
      <h1>Welcome to Our SPA</h1>
      <p className="intro">
        This is a modern Single Page Application built with React and React Router DOM v6.
      </p>
      <div className="feature-grid">
        <div className="feature-card">
          <h3>🚀 Fast Navigation</h3>
          <p>Experience instant page transitions without full page reloads.</p>
        </div>
        <div className="feature-card">
          <h3>🔐 Protected Routes</h3>
          <p>Secure dashboard access with authentication.</p>
        </div>
        <div className="feature-card">
          <h3>📱 Responsive Design</h3>
          <p>Works seamlessly on all devices and screen sizes.</p>
        </div>
        <div className="feature-card">
          <h3>⚡ Lazy Loading</h3>
          <p>Optimized performance with code splitting.</p>
        </div>
      </div>
      <div className="cta-section">
        <Link to="/products" className="btn-primary">
          Explore Products
        </Link>
        <Link to="/about" className="btn-secondary">
          Learn More
        </Link>
      </div>
    </div>
  );
}

export default Home;
