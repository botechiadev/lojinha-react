import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HeaderNavbar } from '../components/HeaderNavbar/HeaderNavbar';
import CartPage from './../pages/CartPage/CartPage';
import HomePage from './../pages/HomePage/HomePage';
export default function Router() {
  return (
    <BrowserRouter>
      <HeaderNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </BrowserRouter>
  );
}
