import React, { useState } from 'react';
import './App.css';
import Navbar from './componants/navbar/navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // تصحيح استيراد Route
import Home from './pages/home';
import About from './pages/aboutus';
import Categories from './pages/Categories2';
import Footer from './pages/Footer';
import Team from './pages/team';
import Member from './pages/teamMember';
import Products from './pages/products';
import EnhancedProfilePage from './pages/profile';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import t1 from '../src/assets/t1.jpg';
import t2 from '../src/assets/t2.jpg';
import t3 from '../src/assets/t3.jpg';
import t4 from '../src/assets/t4.jpg';
import t5 from '../src/assets/DASH Dietjpg.png'
import t6 from '../src/assets/intermittentfasting.png'
import t7 from '../src/assets/kito.jpg'
import t8 from '../src/assets/Low_Carb.jpg'
import t9 from '../src/assets/Vegetarian.jpg'
import t11 from '../src/assets/WhatsApp Image 2024-12-18 at 16.37.27_1bbfed56.jpg';
import t12 from '../src/assets/pre3.png';
import Login from './pages/login';
import SearchBar from './pages/SearchBar';
import SingleProduct from './pages/SingleProduct';



function App() {
  const items = [
    { id: 1, name: 'Marcel Guani', describtion: 'Founder', image: t2 },
    { id: 2, name: 'Chef Marcel Guani', describtion: 'Cook', image: t3 },
    { id: 3, name: 'Chef Marcel Guani', describtion: 'Senior Chef', image: t4 },
    { id: 4, name: 'Chef Marcel Guani', describtion: 'Baker', image: t2 },
    { id: 5, name: 'Greek Yogurt Parfait with Berries', describtion: 'A healthy and delicious parfait layered with creamy Greek yogurt, fresh berries, and a touch of honey.', image: t1 },
    { id: 6, name: 'Keto Egg Salad Bowl', describtion: 'A low-carb, high-protein egg salad bowl perfect for keto enthusiasts.', image: t2 },
    { id: 7, name: 'Grilled Chicken Avocado Salad', describtion: 'A refreshing salad with grilled chicken, ripe avocado, and mixed greens, topped with a tangy dressing.', image: t3 },
    { id: 8, name: 'Spinach & Egg Scramble with Raspberries', describtion: 'A nutritious breakfast scramble made with fresh spinach and eggs, served with a side of juicy raspberries.', image: t4 },
    { id: 9, name: 'Stuffed Bell Peppers with Ground Turkey', describtion: 'Flavorful bell peppers stuffed with seasoned ground turkey and baked to perfection.', image: t5 },
    { id: 10, name: 'Quinoa and Roasted Veggie Bowl', describtion: 'A wholesome bowl featuring fluffy quinoa and a mix of roasted seasonal vegetables.', image: t6 },
    { id: 11, name: 'Chicken Stew with Vegetables', describtion: 'A comforting stew made with tender chicken and a medley of hearty vegetables.', image: t7 },
    { id: 12, name: 'Avocado and Egg Breakfast Bowl', describtion: 'A protein-packed breakfast bowl with creamy avocado and perfectly cooked eggs.', image: t8 },
    { id: 13, name: 'Creamy Broccoli and Pesto Pasta Salad', describtion: 'A delightful pasta salad tossed with creamy pesto sauce and fresh broccoli florets.', image: t9 },
    { id: 15, name: 'Kale Salad with Chickpeas', describtion: 'A nutritious kale salad tossed with protein-rich chickpeas and a light lemon dressing.', image: t11 },
    { id: 16, name: 'Tomato Salad', describtion: 'A simple and fresh salad made with juicy tomatoes, olive oil, and a hint of basil.', image: t12 },
  ];
  const [categories, setCategories] = useState([
    { id: 1, name: 'DASH Diet', describtion: 'A diet focused on reducing sodium and improving heart health.', image: t5 },
    { id: 2, name: 'Intermittent Fasting', describtion: 'A meal-timing approach that cycles between eating and fasting periods.', image: t6 },
    { id: 3, name: 'Keto', describtion: 'A low-carb, high-fat diet that helps in weight loss and improving energy.', image: t7 },
    { id: 4, name: 'Low Carb', describtion: 'A diet that restricts carbohydrates, focusing on protein and healthy fats.', image: t8 },
    { id: 4, name: 'Vegetarian', describtion: 'A diet focused on plant-based foods, excluding meat and fish.', image: t9 },
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState(items);
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    const filteredResults = items.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
  };
  const [cartIsOpen, setCartIsOpen] = useState(false);
  console.log(cartIsOpen)
  const [showLogin, setShowLogin] = useState(false)
  return (
    <>
      <BrowserRouter>
        {showLogin ? <Login setShowLogin={setShowLogin} /> : <> </>}
        <Navbar setShowLogin={setShowLogin} setCartIsOpen={setCartIsOpen} handleSearch={handleSearch} searchTerm={searchTerm} />
        {cartIsOpen ? <Cart setCartIsOpen={setCartIsOpen} /> : ""}

        {searchTerm ? <SearchBar searchResults={searchResults} searchTerm={searchTerm} /> : <Routes>
          <Route path="/" element={<><Home /> <Categories Diets={categories} /> <About /> <Team />  </>} />
          <Route path="/home" element={<><Home /> <Categories Diets={categories} /> <About /> <Team />  </>} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/member/:id" element={<Member />} />
          <Route path="/categories" element={<Categories Diets={categories} />}></Route>
          <Route path="/product/:id" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/profile" element={<EnhancedProfilePage />} />
          <Route path="/admin" element={<Admin Diets={categories} ed={setCategories} />} />
        </Routes>}
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
