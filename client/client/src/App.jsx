import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './views/Main';
import Detail from './Components/Detail';
import ProductUpdate from './Components/ProductUpdate';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <Link to="/products">Products</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route element={<Main />} path="/products" default />
          <Route element={<Detail />} path="/products/:id" />
          <Route element={<ProductUpdate />} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
