import MainLayout from '../layouts/main.layout';

interface PublicRouteProps {
  children: React.ReactElement;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  return <MainLayout>{children}</MainLayout>;
};

export default PublicRoute;
