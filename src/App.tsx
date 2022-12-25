import { QueryClient, useQuery, useQueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Products from './components/Products';
import logo from './logo.svg';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import './style/globals.scss';
import Cart from './pages/Cart';
import User from './pages/User';
import ProductPage from './pages/ProductPage';
import Order from './pages/Order';

function App() {
  
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client = {queryClient}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="register" element={<Register/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="cart" element={<Cart/>}/>
            <Route path="user" element={<User/>}/>
            <Route path="product/:id" element={<ProductPage/>}/>
            <Route path="order" element={<Order/>}/>
          </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
