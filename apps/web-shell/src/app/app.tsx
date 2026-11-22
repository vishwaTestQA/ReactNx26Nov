import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {ProtectedRoutes } from '@react-nx26-nov/feature-login'

// Lazy-load each team's entry feature library with its exact exported component name
const AuthModules = React.lazy(() =>
  import('@react-nx26-nov/feature-login').then((m) => ({
    default: m.AuthRoutes,
  }))
);

// const CatalogPage = React.lazy(() =>
//   import('@react-nx26-nov/feature-list').then((m) => ({
//     default: m.ReactNx26NovFeatureList,
//   }))
// );

const CheckoutPage = React.lazy(() =>
  import("@react-nx26-nov/feature-payment").then((m) => ({
    default: m.CheckoutRoutes,
  }))
);

const ProductsModules = React.lazy(() =>
  import("@react-nx26-nov/feature-products").then((m) => ({
    default: m.ProductsRoutes,
  }))
);

export function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <nav className="flex gap-6 bg-white px-6 py-4 shadow-sm">
        <Link to="/" className="font-semibold text-blue-600">Home</Link>
        <Link to="/products" className="font-semibold text-blue-600">Products</Link>
        <Link to="/catalog">Catalog / Accounts</Link>
        <Link to="/checkout">Checkout / Transfers</Link>
        <Link to="/auth/login">Login</Link>
      </nav>

      <main className="p-6">
        <Suspense fallback={<div className="p-4 text-gray-500">Loading module...</div>}>
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Enterprise Portal</h1>} />
            <Route path="/auth/*" element={<AuthModules/>} />
            {/* <Route element={<ProtectedRoutes allowedRoles={['ADMIN', 'USER']} redirectTo='/auth/login'/>}> */}
            <Route path="/products/*" element={<ProductsModules />} />
            {/* <Route path="/catalog/*" element={<CatalogPage />} />  */}
            <Route path="/checkout/*" element={<CheckoutPage />} />
            {/* </Route> */}
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
