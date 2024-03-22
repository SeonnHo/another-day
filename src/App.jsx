import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import { AuthContextProvider } from './components/context/AuthContext';

export default function App() {
  return (
    <AuthContextProvider>
      <Header />
      <Outlet />
    </AuthContextProvider>
  );
}
