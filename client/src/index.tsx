import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './styles/index.scss';
import { BrowserRouter } from "react-router-dom";
import { ProfileProvider } from './contexts/auth.context';
import { QueryClient, QueryClientProvider } from 'react-query';
import AppRoutes from './routes';

if (process.env.REACT_APP_NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser')
  worker.start()
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <AppRoutes />
        </ProfileProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
