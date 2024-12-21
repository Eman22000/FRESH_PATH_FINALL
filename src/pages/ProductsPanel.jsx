import React, { useState } from 'react';
import './Admin.css';

export function ProductsPanel() {
  const [products, setProducts] = useState([
    { id: 1, title: 'Product 1', price: 100, categorie: 'Vegetables' },
    { id: 2, title: 'Product 2', price: 150, categorie: 'Fruits' },
    { id: 3, title: 'Product 3', price: 230, categorie: 'Fruits' },
    { id: 4, title: 'Product 4', price: 340, categorie: 'Nuts' },
  ]);
  const [newProduct, setNewProduct] = useState({ title: '', price: '', categorie: '' });

  const addProduct = () => {
    if (newProduct.title && newProduct.price && newProduct.categorie) {
      setProducts([...products, { id: Date.now(), ...newProduct, price: Number(newProduct.price) }]);
      setNewProduct({ title: '', price: '', categorie: '' });
    }
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const editProduct = (id, field, value) => {
    setProducts(products.map(product =>
      product.id === id ? { ...product, [field]: field === 'price' ? Number(value) : value } : product
    ));
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Manage Products</h2>
      <div className="add-product-form">
        <input
          type="text"
          value={newProduct.title}
          onChange={(e) => setNewProduct({ ...newProduct, title: e.target.value })}
          placeholder="Product name"
        />
        <input
          type="number"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          placeholder="Price"
        />
        <select
          value={newProduct.categorie}
          onChange={(e) => setNewProduct({ ...newProduct, categorie: e.target.value })}
        >
          <option value="">Select Category</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Fruits">Fruits</option>
          <option value="Nuts">Nuts</option>
        </select>
        <button onClick={addProduct}>Add Product</button>
      </div>
      <table className="product-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.categorie}</td>
              <td>
                <button
                  onClick={() => {
                    const newTitle = prompt('Enter new title', product.title);
                    if (newTitle) editProduct(product.id, 'title', newTitle);
                  }}
                >
                  Edit Title
                </button>
                <button
                  onClick={() => {
                    const newPrice = prompt('Enter new price', product.price.toString());
                    if (newPrice) editProduct(product.id, 'price', newPrice);
                  }}
                >
                  Edit Price
                </button>
                <button onClick={() => removeProduct(product.id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
