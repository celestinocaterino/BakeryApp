import { Navigate } from 'react-router-dom';
import { isAuthenticated } from '../utils/auth.utils';
import MainLayout from '../layouts/main.layout';

interface PrivateRouteProps {
  children: React.ReactElement;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  if (!isAuthenticated()) {
    return <Navigate to="/login" replace />;
  }

  return <MainLayout>{children}</MainLayout>;
};

export default PrivateRoute;
