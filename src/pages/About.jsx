function About() {
  return (
    <div className="page">
      <h1>About This Application</h1>
      <div className="content-section">
        <h2>Project Overview</h2>
        <p>
          This Single Page Application demonstrates the powerful routing capabilities 
          of React Router DOM v6. Built with Vite for blazing-fast development and 
          optimized production builds.
        </p>
        
        <h2>Key Features Implemented</h2>
        <ul className="feature-list">
          <li>✅ Client-side routing with React Router DOM v6</li>
          <li>✅ Dynamic routes with URL parameters</li>
          <li>✅ Nested routing with Layout components</li>
          <li>✅ Protected routes with authentication</li>
          <li>✅ Programmatic navigation</li>
          <li>✅ Query string parameters</li>
          <li>✅ Route-based code splitting with lazy loading</li>
          <li>✅ Breadcrumb navigation</li>
          <li>✅ 404 error handling</li>
          <li>✅ Active navigation highlighting</li>
        </ul>

        <h2>Technology Stack</h2>
        <div className="tech-stack">
          <span className="tech-badge">React 19</span>
          <span className="tech-badge">React Router DOM v7</span>
          <span className="tech-badge">Vite</span>
          <span className="tech-badge">JavaScript ES6+</span>
        </div>
      </div>
    </div>
  );
}

export default About;
