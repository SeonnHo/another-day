import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { AuthContextProvider } from './context/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App() {
  return (
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Outlet />
      </QueryClientProvider>
    </AuthContextProvider>
  );
}
