import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import HomePage from './pages/HomePage';
import ProductPage from './pages/Product';
import ProductDetailPage from './pages/ProductDetail';
import Dashboard from './pages/admin/Dashboard';
import ProductManagementPage from './pages/admin/ProductManagement';
import AddProductPage from './pages/admin/AddProduct';
import { addProduct, getAllProduct, updateProduct } from './api/product';
import UpdateProductPage from './pages/admin/UpdateProduct';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import SignUp from './pages/signup';
import Signin from './pages/signin';
import { IProduct } from './types/product';

function App() {
  const [products, setProduct] = useState<IProduct[]>([]);
  useEffect(() => {
    getAllProduct().then(({ data }) => setProduct(data));
  }, []);

  const onHandleRemove = (id) => {
    fetch('http://localhost:3000/products/' + id, {
      method: 'DELETE',
    }).then(() => setProduct(products.filter((item) => item.id != id)));
  };
  const onHandleAdd = (product) => {
    addProduct(product).then(() => {
      getAllProduct().then(({ data }) => setProduct(data));
    });
  };
  const onHandleUpdate = (product) => {
    updateProduct(product).then(() =>
      setProduct(
        products.map((item) => (item.id == product.id ? product : item))
      )
    );
  };
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<WebsiteLayout />}>
            <Route index element='{<HomePage />}' />
            <Route path='signup' element={<SignUp />} />
            <Route path='signin' element={<Signin />} />

            <Route path='products'>
              <Route
                index
                element={
                  <ProductPage products={products} onRemove={onHandleRemove} />
                }
              />
              <Route
                path=':id'
                element={<ProductDetailPage products={products} />}
              />
            </Route>
          </Route>

          <Route path='/admin' element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='products'>
              <Route
                index
                element={
                  <ProductManagementPage
                    products={products}
                    onRemove={onHandleRemove}
                  />
                }
              />
              <Route
                path='add'
                element={<AddProductPage onAdd={onHandleAdd} />}
              />
              <Route
                path=':id/update'
                element={
                  <UpdateProductPage
                    onUpdate={onHandleUpdate}
                    products={products}
                  />
                }
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
