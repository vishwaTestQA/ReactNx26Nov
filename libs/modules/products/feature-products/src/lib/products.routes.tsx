import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductsContainer from './containers/Products.container';
import ProductDetailsContainer from './containers/product-details.container';


export function ProductsRoutes() {
  return (
    <Routes>
      <Route index element={<ProductsContainer />} />
      <Route path=":productId" element={<ProductDetailsContainer />} />
    </Routes>
  );
}
