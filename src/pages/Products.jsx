import { Link, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const mockProducts = [
  { id: 1, name: 'React Fundamentals', category: 'Courses', price: 49.99 },
  { id: 2, name: 'Advanced React Patterns', category: 'Courses', price: 79.99 },
  { id: 3, name: 'React Router Mastery', category: 'Courses', price: 39.99 },
  { id: 4, name: 'State Management Guide', category: 'Books', price: 29.99 },
  { id: 5, name: 'React Performance Tips', category: 'Books', price: 19.99 },
  { id: 6, name: 'Full Stack React', category: 'Courses', price: 99.99 },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(mockProducts);
  
  const searchQuery = searchParams.get('q') || '';
  const currentPage = parseInt(searchParams.get('page') || '1', 10);

  useEffect(() => {
    const handleFilter = () => {
      if (searchQuery) {
        const filtered = mockProducts.filter(product =>
          product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.category.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredProducts(filtered);
      } else {
        setFilteredProducts(mockProducts);
      }
    };

    handleFilter();
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const query = formData.get('search');
    if (query) {
      setSearchParams({ q: query, page: '1' });
    } else {
      setSearchParams({});
    }
  };

  const handleClearSearch = () => {
    setSearchParams({});
  };

  return (
    <div className="page">
      <h1>Our Products</h1>
      
      <div className="search-section">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            name="search"
            placeholder="Search products..."
            defaultValue={searchQuery}
            className="search-input"
          />
          <button type="submit" className="btn-primary">Search</button>
          {searchQuery && (
            <button type="button" onClick={handleClearSearch} className="btn-secondary">
              Clear
            </button>
          )}
        </form>
        
        {searchQuery && (
          <p className="search-info">
            Showing results for: <strong>{searchQuery}</strong> (Page {currentPage})
          </p>
        )}
      </div>

      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <div className="product-category">{product.category}</div>
              <h3>{product.name}</h3>
              <p className="product-price">${product.price}</p>
              <Link to={`/products/${product.id}`} className="btn-view">
                View Details
              </Link>
            </div>
          ))
        ) : (
          <p className="no-results">No products found matching your search.</p>
        )}
      </div>
    </div>
  );
}

export default Products;
