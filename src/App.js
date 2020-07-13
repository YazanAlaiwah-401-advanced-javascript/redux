import React from 'react';
import Product from './components/product';
import Category from './components/category';
import Footer from './components/footer';
import Header from './components/header';
import ActiveCategory from './components/activecategory';
import SimpleCart from './components/cart';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <Category />
      <ActiveCategory />
      <Product />
      <Footer />
    </>
  );
}

export default App;
