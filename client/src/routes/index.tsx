import { Routes, Route } from 'react-router-dom';

import Private from './Private.route';
import Public from './Public.route';

import Homepage from '../pages/homepage';
import SignIn from '../pages/sign-in';
import Dashboard from '../pages/dashboard';
import ProductDetail from '../pages/product';

const AppRoutes = () => {
  return (
    <Routes>

      <Route
        path="/"
        element={
          <Public>
            <Homepage />
          </Public>
        }
      />

      <Route
        path="dashboard"
        element={
          <Private>
            <Dashboard />
          </Private>
        }
      />

      <Route
        path="products/:id"
        element={
          <Public>
            <ProductDetail />
          </Public>
        }
      />

      <Route
        path="login"
        element={
          <Public>
            <SignIn />
          </Public>
        }
      />

    </Routes>
  );
};

export default AppRoutes;
