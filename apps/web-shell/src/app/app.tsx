import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';

// Lazy-load each team's entry feature library with its exact exported component name
const LoginPage = React.lazy(() =>
  import('@react-nx26-nov/feature-login').then((m) => ({
    default: m.ReactNx26NovFeatureLogin,
  }))
);

// const CatalogPage = React.lazy(() =>
//   import('@react-nx26-nov/feature-list').then((m) => ({
//     default: m.ReactNx26NovFeatureList,
//   }))
// );

const CheckoutPage = React.lazy(() =>
  import("@react-nx26-nov/feature-payment").then((m) => ({
    default: m.ReactNx26NovFeaturePayment,
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
        {/* <Link to="/products" className="font-semibold text-blue-600">Products</Link> */}
        <Link to="/catalog">Catalog / Accounts</Link>
        <Link to="/checkout">Checkout / Transfers</Link>
        <Link to="/login">Login</Link>
      </nav>

      <main className="p-6">
        <Suspense fallback={<div className="p-4 text-gray-500">Loading module...</div>}>
          <Routes>
            <Route path="/" element={<h1 className="text-2xl font-bold">Enterprise Portal</h1>} />
            <Route path="/" element={<h1 className="text-2xl font-bold">Enterprise Portal</h1>} />
            <Route path="/products/*" element={<ProductsModules />} />
            {/* <Route path="/catalog/*" element={<CatalogPage />} />  */}
            <Route path="/checkout/*" element={<CheckoutPage />} />
          </Routes>
        </Suspense>
      </main>
    </div>
  );
}

export default App;
