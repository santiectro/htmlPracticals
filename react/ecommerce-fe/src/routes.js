import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import ProductListing from './pages/ProductListing';
import RegisterPage from './pages/Register';
import CreateProduct from './pages/CreateProduct';
import EditProductPage from './pages/EditProductPage';
import TestPage from './pages/test';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='products' element={<ProductListing />}></Route>
          <Route path="/create-product" element = {<CreateProduct />} />
          <Route path="/edit-product" element = {<EditProductPage />} />
          <Route path="/test" element = {<TestPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
