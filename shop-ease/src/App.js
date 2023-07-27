import './joshwcomeau.css';
import './App.css';

import { ProductsProvider } from './context/ProductsProvider';

import Header from './components/Header/Header'
import Aside from './components/Aside/Filters';
import Products from './components/Main/Products';
import Footer from './components/Footer/Footer';

// import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ProductsProvider>
      <Header />
      <Aside />
      <Products />
      <Footer />
    </ProductsProvider>
  );
}

export default App;
