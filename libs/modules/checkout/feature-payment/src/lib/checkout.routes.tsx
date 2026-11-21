
import { Route, Routes } from 'react-router-dom';
import CheckoutContainer from './container/checkout.container';

export function CheckoutRoutes() {
  return (
    <Routes>
      <Route index element={<CheckoutContainer/>} />
    </Routes>
  );
}