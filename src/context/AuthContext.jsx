import { createContext, useContext, useEffect, useState } from 'react';
import { login, logout, useFirebase } from '../api/firebase';
import { onAuthStateChanged } from 'firebase/auth';

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [authState, setAuthState] = useState({ user: null, loading: true });
  const { adminUser, auth } = useFirebase();
  const user = authState.user;
  const loading = authState.loading;

  useEffect(() => {
    const stopListen = onAuthStateChanged(auth, (user) => {
      if (user) {
        adminUser(user).then((user) => setAuthState({ user, loading: false }));
      } else {
        setAuthState({ user: null, loading: false });
      }
    });
    return () => stopListen();
  }, [adminUser, auth]);

  return (
    <AuthContext.Provider
      value={{ user, uid: user && user.uid, loading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
