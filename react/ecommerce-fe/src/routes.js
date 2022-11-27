import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import ProductListing from './pages/ProductListing';
import RegisterPage from './pages/Register';
import CreateProduct from './pages/CreateProduct';

const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<LoginPage />}></Route>
          <Route path='register' element={<RegisterPage />}></Route>
          <Route path='products' element={<ProductListing />}></Route>
          <Route path="/create-product" element = {<CreateProduct />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesComponent;
