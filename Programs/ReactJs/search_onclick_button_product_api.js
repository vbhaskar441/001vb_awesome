//https://stackblitz.com/edit/react-dgsw8flj?file=src%2FApp.js
import React, { useState, useEffect } from 'react';
function App() {
  const [search, setSearch] = useState('');
  const [productlist, setProductList] = useState([]);
  const fetchProducts = async (query) => {
    try {
      const url = query
        ? `https://dummyjson.com/products/search?q=${query}`
        : `https://dummyjson.com/products`;
      const response = await fetch(url);
      const data = await response.json();
      setProductList(data.products || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const HandleSearch = () => {
    fetchProducts(search);
  };

  useEffect(() => {
    // Fetch initial product list when component mounts
    fetchProducts('');
  }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={search}
          id="search"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search products"
        />
        <input type="button" onClick={HandleSearch} value="Search" />
        <div>
          <table border="1" style={{ marginTop: '20px', width: '100%' }}>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {productlist.length > 0 ? (
                productlist.map((product, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={product.thumbnail}
                        alt={product.title}
                        style={{ width: '50px', height: '50px' }}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.description}</td>
                    <td>${product.price}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4">No products found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default App;