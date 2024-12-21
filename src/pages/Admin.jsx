import React, { useState } from 'react';
import { CategoriesPanel } from './CategoriesPanel';
import { ProductsPanel } from './ProductsPanel';
import { OrdersPanel } from './OrdersPanel';
import { CartPanel } from './CartPanel';
import './Admin.css';

export default function Admin({Diets,ed}) {
  const [activeTab, setActiveTab] = useState('categories');
  return (
    <div className="admin-container">
      <h1 className="admin-title">Admin Panel</h1>
      <div className="admin-tabs">
        <button
          className={`admin-tab ${activeTab === 'categories' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('categories')}
        >
          Categories
        </button>
        <button
          className={`admin-tab ${activeTab === 'products' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`admin-tab ${activeTab === 'orders' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('orders')}
        >
          Orders
        </button>
        <button
          className={`admin-tab ${activeTab === 'cart' ? 'active-tab' : ''}`}
          onClick={() => setActiveTab('cart')}
        >
          Cart
        </button>
      </div>
      <div className="admin-content">
        {activeTab === 'categories' && <CategoriesPanel ed={ed} Diets={Diets} className="categories-panel" />}
        {activeTab === 'products' && <ProductsPanel className="products-panel" />}
        {activeTab === 'orders' && <OrdersPanel className="orders-panel" />}
        {activeTab === 'cart' && <CartPanel className="cart-panel" />}
      </div>
    </div>
  );
}
